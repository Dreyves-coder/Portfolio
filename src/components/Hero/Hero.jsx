import { useEffect, useState } from 'react';
import './Hero.css';

const ROLES = [
  'Développeur Full Stack',
  'Développeur React',
  'Développeur Node.js',
  'Développeur PHP Symfony',
  'Étudiant en Master',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="dot" />
            Disponible pour stage & alternance
          </p>

          <h1 className="hero-name">
            Salut, je suis<br />
            <span>Dreyves Doukanda</span>
          </h1>

          <h2 className="hero-role">
            <span className="typed">{displayed}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-desc">
            Développeur Full Stack passionné, étudiant en Master à Sup de Vinci.
            Je construis des applications web modernes avec <strong>React</strong> , <strong>Node.js</strong> et <strong>PHP</strong>.
            Basé à Nantes, disponible pour une alternance à partir de septembre 2026.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Voir mes projets ↓</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Dreyves-coder" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/dreyves-doukanda" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:mambouenidreyves@gmail.com">Email</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-file">dreyves.js</span>
            </div>
            <pre className="code-body">{`const dreyves = {
  role: "Full Stack Dev",
  stack: ["React", "Node.js",
          "Symfony", "MySQL"],
  location: "Nantes 🇫🇷",
  available: true,
  seeking: "Alternance 2026",
  
  code: () => {
    return "Passion + Rigueur";
  }
}`}</pre>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Stages</span>
            </div>
            <div className="stat">
              <span className="stat-num">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Projets GitHub</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <div className="scroll-dot" />
      </a>
    </section>
  );
}
