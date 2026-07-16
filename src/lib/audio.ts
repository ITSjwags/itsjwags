import { MUTE_STORAGE_KEY } from './constants';

let audioContext: AudioContext | null = null;
let muted = loadMutePreference();

function loadMutePreference(): boolean {
  try {
    return localStorage.getItem(MUTE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function isMuted(): boolean {
  return muted;
}

export function setMuted(next: boolean): void {
  muted = next;
  try {
    localStorage.setItem(MUTE_STORAGE_KEY, String(next));
  } catch {
    // Ignore — muting still works for this page load, it just won't persist.
  }
}

function ensureAudioContext(): AudioContext | null {
  try {
    // Mobile browsers can close an AudioContext outside script control
    // (e.g. Safari on backgrounding/screen-lock) — treat 'closed' the same
    // as having no context yet, or every future call would keep handing
    // back a dead context and throw on every oscillator creation.
    if (!audioContext || audioContext.state === 'closed') {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioContext = new AudioContextClass();
    }
    if (audioContext.state === 'suspended') {
      // resume() is async and can reject (e.g. the context closes again
      // between the state check above and this call actually running) —
      // unhandled, that's an uncaught promise rejection in the console.
      audioContext.resume().catch(() => {});
    }
    return audioContext;
  } catch {
    return null;
  }
}

interface ToneOptions {
  type: OscillatorType;
  freq: number;
  rampToFreq?: number;
  rampDuration?: number;
  gainPeak: number;
  duration: number;
  stopAt: number;
}

function playTone({
  type,
  freq,
  rampToFreq,
  rampDuration,
  gainPeak,
  duration,
  stopAt,
}: ToneOptions): void {
  if (muted) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;
  // Node-graph creation/start can still throw even with a live context
  // (e.g. a stale reference slipping past the closed-state check above) —
  // swallow it so this function never throws, matching
  // ensureAudioContext's own degrade-to-silent contract.
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime;
    osc.type = type;
    if (rampToFreq !== undefined) {
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(
        rampToFreq,
        t + (rampDuration ?? duration)
      );
    } else {
      osc.frequency.value = freq;
    }
    gain.gain.setValueAtTime(gainPeak, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + stopAt);
  } catch {
    // Silent — see comment above.
  }
}

export function playDrumHit(freq: number): void {
  playTone({
    type: 'sine',
    freq,
    rampToFreq: freq * 0.5,
    rampDuration: 0.18,
    gainPeak: 0.22,
    duration: 0.22,
    stopAt: 0.24,
  });
}

export function playGolfTick(): void {
  playTone({ type: 'triangle', freq: 540, gainPeak: 0.1, duration: 0.08, stopAt: 0.09 });
}

export function playGolfDrop(): void {
  playTone({
    type: 'sine',
    freq: 300,
    rampToFreq: 120,
    rampDuration: 0.18,
    gainPeak: 0.2,
    duration: 0.22,
    stopAt: 0.24,
  });
}
