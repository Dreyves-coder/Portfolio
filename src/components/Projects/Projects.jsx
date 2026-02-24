import './Projects.css';

const PROJECTS = [
  {
    title: 'TaskBoard',
    emoji: '📋',
    desc: "Application Kanban full stack avec drag & drop, authentification JWT et gestion complète des tâches. Chaque utilisateur gère ses propres tâches en temps réel.",
    tags: ['React', 'Node.js', 'MySQL', 'JWT', 'Express'],
    github: 'https://github.com/Dreyves-coder/taskboard',
    demo: null,
    highlight: true,
  },
  {
    title: 'Plateforme Kinlii',
    emoji: '🏥',
    desc: "Site WordPress pour une plateforme santé & parentalité. Intégration complète avec Elementor et Astra, optimisation SEO et gestion des contenus.",
    tags: ['WordPress', 'Elementor', 'SEO', 'PHP'],
    github: null,
    demo: null,
  },
  {
    title: 'App de suivi de projets',
    emoji: '📊',
    desc: "Application interne développée de A à Z pour l'Agence DEBORD. Gestion des tâches, utilisateurs et deadlines avec base de données relationnelle.",
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: null,
    demo: null,
  },
  {
    title: 'Tableaux de bord Power BI',
    emoji: '📈',
    desc: "Dashboards analytiques pour 3 services (RH, Production, Achats) à partir de données Microsoft Dynamics. Indicateurs clés pour la prise de décision.",
    tags: ['Power BI', 'Microsoft Dynamics', 'SQL', 'Data'],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-tag">// projets</p>
        <h2 className="section-title">Mes <span>Réalisations</span></h2>
        <p className="section-sub">Ce que j'ai construit en stage et en personnel</p>

        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className={`card project-card ${p.highlight ? 'highlight' : ''}`}>
              {p.highlight && <div className="project-badge">⭐ Projet personnel</div>}
              <div className="project-emoji">{p.emoji}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub →
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-link demo">
                    Demo →
                  </a>
                )}
                {!p.github && !p.demo && (
                  <span className="project-link disabled">Projet en entreprise</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
