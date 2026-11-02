import BrandIcon from './BrandIcon';

export default function SkillCard({ skill }) {
  return (
    <article className="skill reveal">
      <span className="pct">{skill.pct}%</span>
      <div className="ic">
        <BrandIcon icon={skill.icon} label={skill.name} />
      </div>
      <h3>{skill.name}</h3>
      <p>{skill.desc}</p>
      <div className="bar">
        <i style={{ width: `${skill.pct}%` }} />
      </div>
    </article>
  );
}
