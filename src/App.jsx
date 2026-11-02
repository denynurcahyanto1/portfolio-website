import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import SectionHeader from './components/SectionHeader';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { navLinks, skills, projects, stackItems, workflowTools } from './data/portfolio';
import BrandIcon from './components/BrandIcon';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function handleAnchorNavigation(event, onNavigate) {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;

  const selector = anchor.getAttribute('href');
  const target = selector && selector !== '#' ? document.querySelector(selector) : null;
  if (!target) return;

  event.preventDefault();
  onNavigate?.();
  window.history.pushState(null, '', selector);

  const smoother = ScrollSmoother.get();
  if (smoother) {
    smoother.scrollTo(target, true, 'top 96px');
    return;
  }

  target.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  });
}

function MagneticButton({ className = '', children, href, variant = 'primary' }) {
  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    event.currentTarget.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleLeave = (event) => {
    event.currentTarget.style.transform = 'translate(0, 0)';
  };

  const classes = `magnetic ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`.trim();

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}>
        <button type="button" className={classes} onMouseMove={handleMove} onMouseLeave={handleLeave}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </button>
  );
}

export default function App() {
  const roles = ['React Developer', 'GSAP Animator', 'UI Builder', 'Automation Tinkerer', 'Open to Work'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [copyMessage, setCopyMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('@denyy.xt');
      setCopyMessage('✓ Copied — find me on Instagram as @denyy.xt');
    } catch {
      setCopyMessage('✓ Copied — find me on Instagram as @denyy.xt');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [roles.length]);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return undefined;
    }

    const cursor = document.getElementById('cursor');
    const glow = document.getElementById('glow');
    if (!cursor || !glow) {
      return undefined;
    }

    const moveCursor = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    window.addEventListener('pointermove', moveCursor);
    return () => window.removeEventListener('pointermove', moveCursor);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const smoother = prefersReducedMotion
      ? null
      : ScrollSmoother.create({
          smooth: 2,
          smoothTouch: 0.5,
          effects: true,
        });

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('.reveal', { y: 0, opacity: 1 });
        gsap.utils.toArray('.count').forEach((element) => {
          element.textContent = element.dataset.to || '0';
        });
        return;
      }

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray('.count').forEach((element) => {
        const target = Number(element.dataset.to || 0);
        gsap.fromTo(
          element,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: element,
              start: 'top 95%',
            },
          }
        );
      });

      gsap.from('.magnetic', {
        opacity: 0,
        y: 8,
        duration: 0.6,
        stagger: 0.09,
        ease: 'power2.out',
      });
    });

    return () => {
      ctx.revert();
      smoother?.kill();
    };
  }, []);

  return (
    <>
      <div id="glow" />
      <div id="cursor" />

      <nav onClick={(event) => handleAnchorNavigation(event, () => setIsMobileMenuOpen(false))}>
        <a className="logo" href="#top">Deny.dev</a>
        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <button
          ref={mobileMenuButtonRef}
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-links"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-cta-desktop">
          <MagneticButton href="#contact" className="nav-cta">
            Let&apos;s Talk →
          </MagneticButton>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-navlinks" id="mobile-nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
            <a className="mobile-nav-cta" href="#contact">Let&apos;s Talk →</a>
          </div>
        )}
      </nav>

      <div id="smooth-wrapper" onClick={handleAnchorNavigation}>
        <div id="smooth-content">
          <main id="top" className="wrap">
        <header className="hero">
          <span className="badge">
            <span className="dot" /> Available for work · Indonesia (WIB)
          </span>
          <h1 id="split-title">
            DENY
            <br />
            <em>NURCAH</em>
            <span className="lime">YANTO</span>
          </h1>
          <div className="role-line">
            &gt; Junior Developer — <span id="rotator">{roles[roleIndex]}</span>
            <span style={{ color: 'var(--lime)' }}>_</span>
          </div>
          <p className="lead">
            I build interfaces that <strong>move, respond, and feel alive</strong> — with React, GSAP animations, and React Bits–style components. Still early in my career, already shipping real projects: a live AI office dashboard, a daily content automation pipeline, and campaign media used in the real world.
          </p>
          <div className="btns">
            <MagneticButton href="#projects">View My Projects ↓</MagneticButton>
            <MagneticButton href="#about" variant="ghost">About Me</MagneticButton>
          </div>
          <div className="socials">
            <a className="soc" href="https://instagram.com/denyy.xt" target="_blank" rel="noreferrer noopener">
              Instagram <span>@denyy.xt</span>
            </a>
            <a className="soc" href="https://youtube.com/@DenyNurcahyanto" target="_blank" rel="noreferrer noopener">
              YouTube <span>@DenyNurcahyanto</span>
            </a>
            <a className="soc" href="https://github.com/denynurcahyanto1" target="_blank" rel="noreferrer noopener">
              GitHub <span>@denynurcahyanto1</span>
            </a>
            <a className="soc" href="#">
              LinkedIn <span>↗</span>
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <b>
                <span className="count" data-to="3">0</span>
              </b>
              <span>Real projects shipped</span>
            </div>
            <div className="stat">
              <b>
                <span className="count" data-to="7">0</span>+
              </b>
              <span>Core technologies</span>
            </div>
            <div className="stat">
              <b>
                <span className="count" data-to="2">0</span>
              </b>
              <span>Platforms published to daily</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>Built &amp; run by me, end to end</span>
            </div>
          </div>
        </header>
      </main>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track" id="marquee">
          {[...workflowTools, ...workflowTools].map((tool, index) => (
            <span className="marquee-item" key={`${tool.name}-${index}`}>
              <BrandIcon icon={tool.icon} label={tool.name} />
              {tool.name}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <main className="wrap">
        <section id="about">
          <SectionHeader
            kicker="01 — About"
            title="A junior developer who learns by shipping."
          />
          <div className="about-grid" style={{ marginTop: '32px' }}>
            <div className="about-copy reveal">
              <p>
                Hi, I&apos;m <strong>Deny Nurcahyanto</strong> — a junior developer focused on front-end development with <strong>React and JavaScript</strong>. I care about the details most portfolios skip: motion, feedback, and interfaces that explain themselves.
              </p>
              <p>
                My projects aren&apos;t tutorial clones. I built a <strong>live dashboard</strong> that visualizes an AI router as an isometric office, an <strong>automation pipeline</strong> that publishes videos every day, and <strong>design work</strong> for a real village election campaign in Plesungan, Karanganyar.
              </p>
              <p>
                Right now I&apos;m deepening my React fundamentals, animation with GSAP, and design basics in Figma — so I can go from idea → design → working product on my own.
              </p>
              <ul className="checklist">
                <li>Comfortable building component-based UIs in React</li>
                <li>Animation-first mindset: GSAP + interactive components</li>
                <li>Happy working solo or alongside a senior dev / mentor</li>
                <li>Based in Indonesia, open to remote opportunities</li>
              </ul>
            </div>
            <div className="codewin reveal" aria-label="Developer profile as a React component">
              <div className="codewin-head">
                <i style={{ background: '#FF5F57' }} />
                <i style={{ background: '#FEBC2E' }} />
                <i style={{ background: '#28C840' }} />
                <span className="mono" style={{ marginLeft: '8px', color: '#9C9CA8', fontSize: '12px' }}>
                  Developer.jsx
                </span>
              </div>
              <pre>
{`const developer = {
  name: 'Deny Nurcahyanto',
  role: 'Junior Developer',
  stack: ['React', 'JavaScript', 'TypeScript', 'Node.js'],
  currentlyLearning: 'Advanced React patterns',
  openToWork: true,
};

// hireable if coffee is provided ☕
export default developer;`}
              </pre>
            </div>
          </div>
        </section>

        <section id="skills" style={{ paddingTop: '24px' }}>
          <SectionHeader
            kicker="02 — Skills"
            title="What I work with"
            subtitle="Honest levels for a junior profile — strong where I've shipped real work, growing where I'm actively learning."
          />
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        <section id="projects" style={{ paddingTop: '24px' }}>
          <SectionHeader
            kicker="03 — Projects"
            title="Selected work"
            subtitle="Three real projects — a live product, an automation system, and design work with a real-world audience."
          />
          <div id="projectList">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="stack" style={{ paddingTop: '24px' }}>
          <SectionHeader kicker="04 — Daily Stack" title="Tools in my workflow" />
          <div className="stack reveal">
            {workflowTools.map((tool) => (
              <div className="chip" key={tool.name}>
                <BrandIcon icon={tool.icon} label={tool.name} />
                {tool.name}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ paddingTop: '24px' }}>
          <div className="cta reveal">
            <div className="kicker" style={{ justifyContent: 'center' }}>05 — Contact</div>
            <h2>Let&apos;s build something that moves people.</h2>
            <p>
              Looking for a junior developer role, freelance project, or just want to talk React and animation? My inbox on social media is open.
            </p>
            <div className="btns" style={{ justifyContent: 'center' }}>
              <MagneticButton href="https://instagram.com/denyy.xt" className="cta-btn">DM on Instagram ↗</MagneticButton>
              <MagneticButton href="https://youtube.com/@DenyNurcahyanto" variant="ghost" className="cta-btn">Watch on YouTube ↗</MagneticButton>
              <button type="button" className="btn-ghost magnetic" id="copyBtn" onClick={handleCopy}>
                Copy: @denyy.xt
              </button>
            </div>
            <p id="copyMsg" className="mono" style={{ margin: '18px auto 0', fontSize: '13px', color: 'var(--lime-dim)', minHeight: '20px' }}>
              {copyMessage}
            </p>
          </div>
        </section>

        <footer>
          <span>© 2026 Deny Nurcahyanto — Junior Developer</span>
          <span className="mono">Built with React, GSAP, and React Bits spirit</span>
          <span>
            <a href="https://instagram.com/denyy.xt" target="_blank" rel="noreferrer noopener">Instagram</a> · <a href="https://youtube.com/@DenyNurcahyanto" target="_blank" rel="noreferrer noopener">YouTube</a> · <a href="https://github.com/denynurcahyanto1" target="_blank" rel="noreferrer noopener">GitHub</a> · <a href="#">LinkedIn</a>
          </span>
        </footer>
          </main>
        </div>
      </div>
    </>
  );
}
