// ============================================================
// ✏️  EDIT THIS FILE to make the portfolio yours.
// All personal info, links, projects and skills live here —
// so you only ever edit ONE place.
// ============================================================

export const profile = {
  name: 'Anush Pradhan',
  role: 'Frontend Developer',
  tagline: 'I build fast, accessible web apps with React.',
  location: 'Pokhara, Nepal',
  email: 'anushnewar93@gmail.com',
 github: 'https://github.com/newaar93',
  // 👇 Anush: send me your LinkedIn URL and I'll plug it in
  linkedin: 'https://www.linkedin.com/in/anushnewar93',
}

// 👇 Your projects — each one is an object rendered as a card.
export const projects = [
  {
    title: 'FocusFlow',
    emoji: '⏱️',
    description:
      'A minimal Pomodoro timer with session stats — focus sprints, automatic breaks, and a 7-day history chart, all saved locally in your browser.',
    status: 'live',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'localStorage'],
    highlights: [
      'Focus / short break / long break modes with automatic cycling',
      'Animated SVG progress ring + live countdown in the browser tab',
      'Session history persisted with localStorage — survives refresh',
    ],
       liveUrl: 'https://focusflow-mocha-two.vercel.app',
   repoUrl: 'https://github.com/newaar93/focusflow',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['JavaScript (ES2023)', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Tailwind CSS'],
  },
  {
    label: 'Tools & Workflow',
    items: ['Git & GitHub', 'Vite', 'Vercel', 'Chrome DevTools'],
  },
]
