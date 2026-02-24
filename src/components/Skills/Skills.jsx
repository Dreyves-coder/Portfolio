import './Skills.css';

const SKILLS = [
  { category: 'Frontend', icon: '🎨', items: [
    { name: 'React', level: 75 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML / CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
  ]},
  { category: 'Backend', icon: '⚙️', items: [
    { name: 'Node.js', level: 75 },
    { name: 'PHP / Symfony', level: 75 },
    { name: 'Spring Boot', level: 60 },
    { name: 'API REST', level: 70 },
  ]},
  { category: 'Base de données', icon: '🗄️', items: [
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'SQL', level: 80 },
    { name: 'Power BI', level: 70 },
  ]},
  { category: 'Outils', icon: '🛠️', items: [
    { name: 'Git / GitHub', level: 80 },
    { name: 'Figma', level: 65 },
    { name: 'Trello', level: 75 },
    { name: 'Agile / Scrum', level: 75 },
  ]},
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-tag">// compétences</p>
        <h2 className="section-title">Mes <span>Technologies</span></h2>
        <p className="section-sub">Les outils avec lesquels je travaille au quotidien</p>

        <div className="skills-grid">
          {SKILLS.map(cat => (
            <div key={cat.category} className="card skill-card">
              <div className="skill-cat-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-items">
                {cat.items.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
