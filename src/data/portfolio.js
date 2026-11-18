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
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Teknologi', href: '#stack' },
  { label: 'Kontak', href: '#contact' },
];

export const skills = [
  { icon: siReact, name: 'React', desc: 'Komponen, props, state, hooks: pustaka UI utama saya.', pct: 78 },
  { icon: siJavascript, name: 'JavaScript', desc: 'ES6+ modern, manipulasi DOM, dan logika UI interaktif.', pct: 80 },
  { icon: siTypescript, name: 'TypeScript', desc: 'Props dan komponen bertipe untuk refactoring yang lebih aman dan bersih.', pct: 80 },
  { icon: siHtml5, name: 'HTML5', desc: 'Markup semantik dan aksesibel untuk struktur halaman.', pct: 88 },
  { icon: siCss, name: 'CSS', desc: 'Flexbox/Grid, tata letak responsif, dan styling.', pct: 88 },
  { icon: siNodedotjs, name: 'Node.js', desc: 'Server kecil, bridge, skrip & alat otomatisasi.', pct: 65 },
  { icon: siGsap, name: 'GSAP', desc: 'Animasi ScrollTrigger, timeline, dan efek teks hero.', pct: 70 },
  { icon: siReact, name: 'React Bits', desc: 'Komponen interaktif beranimasi: tilt, magnet, spotlight.', pct: 68 },
  { icon: siGit, name: 'Git', desc: 'Commit, branch, dan kontrol versi harian.', pct: 72 },
  { icon: siGithub, name: 'GitHub', desc: 'Repositori dan publikasi kode secara terbuka.', pct: 72 },
  { icon: siOpenbot, name: 'OpenBot', desc: 'Orkestrasi agen, pemanggilan tool, dan otomatisasi alur kerja.', pct: 65 },
];

export const projects = [
  {
    cls: 'pv-4',
    tag: '🟢 Situs Live · Website Studio',
    type: 'Next.js · TypeScript · React Three Fiber',
    title: 'NVA Studio',
    desc: 'Landing page produksi untuk NVA Studio, studio digital & kreatif di Surakarta. Hero 3D prosedural membawa identitas brand, dan setiap section dirancang untuk mengonversi pengunjung menjadi percakapan WhatsApp.',
    feats: [
      'Hero torus-knot prosedural di React Three Fiber: geser untuk memutar, tanpa unduhan tekstur eksternal',
      'Form konsultasi tervalidasi di UI, tersimpan di Supabase dengan RLS insert-only, lalu membuka WhatsApp',
      'Set identitas lengkap: favicon kustom, gambar OG 1200×630, dan metadata sosial ramah tema',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Three Fiber', 'Supabase'],
    links: [
      { label: 'Lihat Situs', href: 'https://nva-studio.vercel.app' },
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
