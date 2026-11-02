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
  siFigma,
} from 'simple-icons';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  { icon: siReact, name: 'React', desc: 'Components, props, state, hooks — my main UI library.', pct: 78 },
  { icon: siJavascript, name: 'JavaScript', desc: 'Modern ES6+, DOM work, and interactive UI logic.', pct: 80 },
  { icon: siTypescript, name: 'TypeScript', desc: 'Typed props and components for safer, cleaner refactoring.', pct: 80 },
  { icon: siHtml5, name: 'HTML5', desc: 'Semantic, accessible markup for page structure.', pct: 88 },
  { icon: siCss, name: 'CSS', desc: 'Flexbox/Grid, responsive layouts, and styling.', pct: 88 },
  { icon: siNodedotjs, name: 'Node.js', desc: 'Small servers, bridges, scripts & automation tooling.', pct: 65 },
  { icon: siGsap, name: 'GSAP', desc: 'ScrollTrigger reveals, timelines, SplitText-style hero motion.', pct: 70 },
  { icon: siReact, name: 'React Bits', desc: 'Animated, interactive components: tilt, magnet, spotlight.', pct: 68 },
  { icon: siGit, name: 'Git', desc: 'Commits, branches, and everyday version control.', pct: 72 },
  { icon: siGithub, name: 'GitHub', desc: 'Repositories and shipping code in the open.', pct: 72 },
  { icon: siFigma, name: 'Figma', desc: 'Basics — reading designs, simple UI screens, handoff to code.', pct: 55 },
];

export const projects = [
  {
    cls: 'pv-1',
    tag: '🟢 Live Product · Dashboard',
    type: 'React · Node.js · Real-time Data',
    title: 'Kantor AI 9Router',
    desc: 'A live, isometric AI-office dashboard that visualizes a local LLM router. Every provider and model becomes a character in a 3D office — walking the corridor, chatting in speech bubbles, and reacting in real time when requests come in.',
    feats: [
      'One character per AI model, grouped by provider division',
      'Small Node.js bridge streams real request logs into the office',
      'Live activity feed, status states & night-shift mode',
    ],
    tags: ['React', 'Node.js', 'Real-time', 'Data Viz', 'Isometric UI'],
    mock: 'office',
  },
  {
    cls: 'pv-2',
    tag: '🔴 Automation · Content Pipeline',
    type: 'Automation · AI Narration · Publishing',
    title: 'YouTube Shorts Automation',
    desc: 'An automated daily pipeline that produces and publishes English "Did You Know" Shorts for my channel @DenyNurcahyanto — from topic research and fact-checking, to AI narration, big on-screen captions, and scheduled publishing.',
    feats: [
      'Research-first workflow with keyword validation for a US audience',
      'AI narration normalized to a consistent loudness standard',
      'Publishes to both YouTube Shorts and TikTok, twice a day',
    ],
    tags: ['Automation', 'AI Voice', 'Video Pipeline', 'YouTube', 'TikTok'],
    mock: 'pipeline',
  },
  {
    cls: 'pv-3',
    tag: '🎨 Design · Real-World Campaign',
    type: 'Graphic Design · Video · Branding',
    title: 'Village Campaign Media',
    desc: 'Poster and campaign video design for a village head (Kepala Desa) election in Plesungan, Gondangrejo, Karanganyar. Designed around the slogan "Melayani dengan Hati, Membangun Plesungan Lebih Maju" — serving with heart, building a better Plesungan.',
    feats: [
      'Final poster design: green village-gate concept with handshake motif',
      '~30-second campaign video with narration and village scenes',
      'Design iterated directly with the candidate and family feedback',
    ],
    tags: ['Poster Design', 'Video Editing', 'Branding', 'Figma'],
    mock: 'campaign',
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
  { name: 'Figma', icon: siFigma },
];

export const stackItems = workflowTools.map(({ name }) => name);
