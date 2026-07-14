export interface Project {
  eyebrow: string;
  name: string;
  description: string;
  stack: string;
  href: string;
}

export const projects: Project[] = [
  {
    eyebrow: 'SOLO PROJECT · JAN 2026-PRESENT',
    name: 'Recur',
    description:
      "A strength-training app for adults whose schedules, bodies, and motivation don't always line up. Builds workouts around the equipment on hand, adjusts after time off, and works around nagging aches.",
    stack: 'REACT NATIVE · TAMAGUI · TANSTACK QUERY · ZUSTAND · SUPABASE',
    href: 'https://recur.fit',
  },
];
