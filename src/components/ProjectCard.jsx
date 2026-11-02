import { useState } from 'react';

function renderMock(kind) {
  if (kind === 'office') {
    return (
      <div className="mini-office" data-speed="0.85">
        <div>🤖<small>Kiro</small></div>
        <div>🤖<small>Gemini</small></div>
        <div>🤖<small>Codex</small></div>
        <div>🤖<small>Muse</small></div>
        <div>🤖<small>Qoder</small></div>
        <div>🤖<small>NVIDIA</small></div>
        <div>🤖<small>OpenRouter</small></div>
        <div>🎉<small>Request done</small></div>
      </div>
    );
  }

  if (kind === 'pipeline') {
    return (
      <div className="pv-mock" data-speed="0.85">
        <b>09:00</b> Research topic → fact-check<br />
        <b>09:10</b> Script + AI narration <span className="c">(-14 LUFS)</span><br />
        <b>09:20</b> Render 720×1280 · captions ON<br />
        <b>09:30</b> Publish → <span className="r">YouTube</span> + <span className="c">TikTok</span> ✓
      </div>
    );
  }

  return (
    <div className="pv-mock" data-speed="0.85">
      🖼️ <b>Poster</b> — "Melayani dengan Hati,<br />
      &nbsp;&nbsp;&nbsp;Membangun Plesungan Lebih Maju"<br />
      🎬 <b>Video</b> — 30s campaign spot<br />
      📍 Plesungan · Gondangrejo · Karanganyar
    </div>
  );
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
      </div>
    </article>
  );
}
