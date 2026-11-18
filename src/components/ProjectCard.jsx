import { useState } from 'react';

function renderMock(kind) {
  if (kind === 'nva') {
    return (
      <div className="pv-mock" data-speed="0.85">
        <b>01</b> Hero: torus knot · drag to rotate · no assets<br />
        <b>02</b> Form → Supabase RLS <span className="c">insert-only</span><br />
        <b>03</b> CTA → <span className="c">wa.me</span> handoff after save ✓<br />
        <b>LIVE</b> nva-studio.vercel.app
      </div>
    );
  }

  return null;
}

export default function ProjectCard({ project }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setRotate({ x: y * -10, y: x * 14 });
  };

  return (
    <article className="proj tilt reveal" onMouseMove={handleMove} onMouseLeave={() => setRotate({ x: 0, y: 0 })} style={{ transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}>
      <div className={`proj-visual ${project.cls}`}>
        <span className="pv-tag">{project.tag}</span>
        {renderMock(project.mock)}
      </div>
      <div className="proj-body">
        <span className="type">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <ul className="feat">
          {project.feats.map((feat) => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        {project.links?.length ? (
          <div className="proj-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
