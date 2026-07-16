export interface Project {
  name: string;
  description: string;
  stack: string;
  href: string;
}

export const projects: Project[] = [
  {
    name: 'Recur',
    description:
      "A strength-training app for adults whose schedules, bodies, and motivation don't always line up. Builds workouts around the equipment on hand, adjusts after time off, and works around nagging aches.",
    stack: 'react native // tamagui // tanstack query // zustand // supabase',
    href: 'https://recur.fit',
  },
];
