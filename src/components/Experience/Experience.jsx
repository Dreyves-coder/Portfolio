import './Experience.css';

const EXPERIENCES = [
  {
    company: 'Kinlii – Plateforme santé & parentalité',
    role: 'Développeur web – Stage',
    period: 'Avril 2025 – Juin 2025',
    emoji: '🏥',
    tasks: [
      "Conception et intégration complète d'un site WordPress (Elementor, Astra)",
      "Architecture des pages, contenus, plugins et optimisation SEO",
      "Livraison d'un site fonctionnel dans les délais impartis",
    ],
    tags: ['WordPress', 'Elementor', 'SEO', 'PHP'],
  },
  {
    company: 'Agence DEBORD',
    role: 'Développeur web – Stage',
    period: 'Avril 2024 – Juin 2024',
    emoji: '🏢',
    tasks: [
      "Développement from scratch d'une application interne de suivi de projets",
      "Conception d'une base de données relationnelle (tâches, utilisateurs, deadlines)",
      "Outil adopté en interne pour améliorer le suivi opérationnel",
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    company: 'Atelier Perrault',
    role: 'Assistant Data Analyst – Stage',
    period: 'Juillet 2023 – Sept 2023',
    emoji: '📊',
    tasks: [
      "Tableaux de bord Power BI pour 3 services (RH, Production, Achats)",
      "Connexion et traitement de données depuis Microsoft Dynamics",
      "Mise en place d'indicateurs de performance pour la direction",
    ],
    tags: ['Power BI', 'Microsoft Dynamics', 'SQL', 'Data'],
  },
];

const FORMATIONS = [
  { school: 'Sup de Vinci', degree: 'Master Développement Full Stack', period: '2025 – 2027', emoji: '🎓' },
  { school: 'Nantes Université – FST', degree: 'Licence 3 MIAGE', period: '2023 – 2025', emoji: '🎓' },
  { school: 'Université Libre du Congo', degree: 'BTS Informatique de Gestion', period: '2021 – 2023', emoji: '🎓' },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-tag">// parcours</p>
        <h2 className="section-title">Expériences & <span>Formations</span></h2>
        <p className="section-sub">Mon parcours professionnel et académique</p>

        <div className="exp-layout">
          <div className="exp-col">
            <h3 className="col-title">💼 Expériences</h3>
            <div className="timeline">
              {EXPERIENCES.map(e => (
                <div key={e.company} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="card timeline-card">
                    <div className="exp-header">
                      <span className="exp-emoji">{e.emoji}</span>
                      <div>
                        <h4>{e.company}</h4>
                        <p className="exp-role">{e.role}</p>
                      </div>
                      <span className="exp-period">{e.period}</span>
                    </div>
                    <ul className="exp-tasks">
                      {e.tasks.map(t => <li key={t}>{t}</li>)}
                    </ul>
                    <div className="project-tags">
                      {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-col">
            <h3 className="col-title">🎓 Formations</h3>
            <div className="formations">
              {FORMATIONS.map(f => (
                <div key={f.school} className="card form-card">
                  <span className="form-emoji">{f.emoji}</span>
                  <div>
                    <h4>{f.school}</h4>
                    <p className="form-degree">{f.degree}</p>
                    <p className="form-period">{f.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
