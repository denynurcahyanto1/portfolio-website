export default function BrandIcon({ icon, label }) {
  const isGsap = label === 'GSAP';
  const color = icon.hex === '181717' ? '#F4F4F0' : `#${icon.hex}`;

  return (
    <svg
      aria-label={`${label} logo`}
      className={`brand-logo${isGsap ? ' brand-logo-gsap' : ''}`}
      role="img"
      viewBox="0 0 24 24"
      style={{ color }}
    >
      <title>{label}</title>
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}
