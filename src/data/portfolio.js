import {
  siReact,
  siJavascript,
  siTypescript,
  siHtml5,
  siCss,
  siNodedotjs,
  siGsap,
  siGit,
  siGithub,
} from 'simple-icons';

// Custom icon for OpenBot (simple-icons doesn't have it)
const siOpenbot = {
  title: 'OpenBot',
  hex: 'BFFF3C',
  path: 'M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { icon: siReact, name: 'React', desc: 'Components, props, state, hooks: my main UI library.', pct: 78 },
  { icon: siJavascript, name: 'JavaScript', desc: 'Modern ES6+, DOM manipulation, and interactive UI logic.', pct: 80 },
  { icon: siTypescript, name: 'TypeScript', desc: 'Typed props and components for safer, cleaner refactors.', pct: 80 },
  { icon: siHtml5, name: 'HTML5', desc: 'Semantic, accessible markup for page structure.', pct: 88 },
  { icon: siCss, name: 'CSS', desc: 'Flexbox/Grid, responsive layout, and styling.', pct: 88 },
  { icon: siNodedotjs, name: 'Node.js', desc: 'Small servers, bridges, scripts and automation tools.', pct: 65 },
  { icon: siGsap, name: 'GSAP', desc: 'ScrollTrigger animation, timelines, and hero text effects.', pct: 70 },
  { icon: siReact, name: 'React Bits', desc: 'Animated interactive components: tilt, magnet, spotlight.', pct: 68 },
  { icon: siGit, name: 'Git', desc: 'Commits, branches, and day-to-day version control.', pct: 72 },
  { icon: siGithub, name: 'GitHub', desc: 'Repositories and publishing code in the open.', pct: 72 },
  { icon: siOpenbot, name: 'OpenBot', desc: 'Agent orchestration, tool calling, and workflow automation.', pct: 65 },
];

export const projects = [
  {
    cls: 'pv-4',
    tag: '🟢 Live Site · Studio Website',
    type: 'Next.js · TypeScript · React Three Fiber',
    title: 'NVA Studio',
    desc: 'Production landing page for NVA Studio, a digital & creative studio in Surakarta. A procedural 3D hero carries the brand identity, and every section is designed to turn visitors into WhatsApp conversations.',
    feats: [
      'Procedural torus-knot hero in React Three Fiber: drag to rotate, no external texture downloads',
      'Consultation form validated in the UI, stored in Supabase with insert-only RLS, then opens WhatsApp',
      'Complete identity set: custom favicon, 1200×630 OG image, and theme-aware social metadata',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber', 'Supabase'],
    links: [
      { label: 'View Live Site', href: 'https://nva-studio.vercel.app' },
    ],
    mock: 'nva',
  },
];

export const workflowTools = [
  { name: 'React', icon: siReact },
  { name: 'GSAP', icon: siGsap },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'React Bits', icon: siReact },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS', icon: siCss },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
  { name: 'OpenBot', icon: siOpenbot },
];

export const stackItems = workflowTools.map(({ name }) => name);
