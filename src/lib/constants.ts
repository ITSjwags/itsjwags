export const RESUME_PATH = '/resume/JonathanWagoner-Resume.pdf';

// The theme localStorage key ('jw-theme') isn't exported as a constant here:
// both places that need it (Base.astro's pre-paint script, ThemeToggle's
// click handler) must run `is:inline` for correct timing, which can't
// import modules. The literal 'jw-theme' is duplicated in both — keep them
// in sync by hand if it ever changes.
