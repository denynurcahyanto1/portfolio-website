export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <>
      <div className="kicker">{kicker}</div>
      <h2 className="reveal">{title}</h2>
      {subtitle ? <p className="sub reveal">{subtitle}</p> : null}
    </>
  );
}
