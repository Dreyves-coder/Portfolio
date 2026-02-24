import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-logo"><span>&lt;</span>Dreyves<span>/&gt;</span></p>
        <p className="footer-text">Développeur Full Stack · Nantes · Disponible 2026</p>
        <div className="footer-links">
          <a href="https://github.com/Dreyves-coder" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/dreyves-doukanda" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mambouenidreyves@gmail.com">Email</a>
        </div>
        <p className="footer-copy">© 2026 Dreyves Doukanda Mamboueni · Fait avec React ❤️</p>
      </div>
    </footer>
  );
}
