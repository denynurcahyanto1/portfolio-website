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

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { icon: siReact, name: 'React', desc: 'Components, props, state, hooks: my main UI library.', pct: 78 },
  { icon: siJavascript, name: 'JavaScript', desc: 'Modern ES6+, DOM work, and interactive UI logic.', pct: 80 },
  { icon: siTypescript, name: 'TypeScript', desc: 'Typed props and components for safer, cleaner refactoring.', pct: 80 },
  { icon: siHtml5, name: 'HTML5', desc: 'Semantic, accessible markup for page structure.', pct: 88 },
  { icon: siCss, name: 'CSS', desc: 'Flexbox/Grid, responsive layouts, and styling.', pct: 88 },
  { icon: siNodedotjs, name: 'Node.js', desc: 'Small servers, bridges, scripts & automation tooling.', pct: 65 },
  { icon: siGsap, name: 'GSAP', desc: 'ScrollTrigger reveals, timelines, SplitText-style hero motion.', pct: 70 },
  { icon: siGit, name: 'Git', desc: 'Commits, branches, and everyday version control.', pct: 72 },
  { icon: siGithub, name: 'GitHub', desc: 'Repositories and shipping code in the open.', pct: 72 },
];

export const projects = [
  {
    cls: 'pv-4',
    tag: '🟢 Live Site · Studio Website',
    type: 'Next.js · TypeScript · React Three Fiber',
    title: 'NVA Studio',
    desc: 'A production landing page for NVA Studio, a digital & creative studio in Surakarta. A procedural 3D hero carries the brand, and every section below it is built to turn a visitor into a WhatsApp conversation.',
    feats: [
      'Procedural torus-knot hero in React Three Fiber: drag to rotate, no texture downloads',
      'Lead form validated in the UI, stored in Supabase with insert-only RLS, then opens WhatsApp',
      'Full identity set: custom favicon, 1200×630 OG image, and theme-aware social metadata',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber', 'Supabase'],
    links: [
      { label: 'Live site', href: 'https://nva-studio.vercel.app' },
      { label: 'Source', href: 'https://github.com/denynurcahyanto1/nva-studio' },
    ],
    mock: 'nva',
  },
];

export const workflowTools = [
  { name: 'React', icon: siReact },
  { name: 'GSAP', icon: siGsap },
  { name: 'JavaScript', icon: siJavascript },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'HTML5', icon: siHtml5 },
  { name: 'CSS', icon: siCss },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },
];

export const stackItems = workflowTools.map(({ name }) => name);
