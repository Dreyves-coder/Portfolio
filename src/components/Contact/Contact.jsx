import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Portfolio – ${form.name}`);
    const body = encodeURIComponent(`Bonjour Dreyves,\n\n${form.message}\n\nCordialement,\n${form.name}\n${form.email}`);
    window.open(`mailto:mambouenidreyves@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-tag">// contact</p>
        <h2 className="section-title">On se <span>connecte ?</span></h2>
        <p className="section-sub">Disponible pour une alternance à partir de septembre 2026</p>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="card info-card">
              <h3>Parlons de ton projet 💬</h3>
              <p>Tu cherches un développeur Full Stack motivé pour une alternance ou un stage ? N'hésite pas à me contacter !</p>
            </div>
            <div className="contact-links">
              {[
                { icon: '📧', label: 'Email', value: 'mambouenidreyves@gmail.com', href: 'mailto:mambouenidreyves@gmail.com' },
                { icon: '💼', label: 'LinkedIn', value: 'dreyves-doukanda', href: 'https://linkedin.com/in/dreyves-doukanda' },
                { icon: '🐙', label: 'GitHub', value: 'Dreyves-coder', href: 'https://github.com/Dreyves-coder' },
                { icon: '📍', label: 'Localisation', value: 'Nantes, France', href: null },
              ].map(item => (
                <div key={item.label} className="card contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    {item.href
                      ? <a href={item.href} target="_blank" rel="noreferrer" className="contact-value">{item.value}</a>
                      : <p className="contact-value">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <h3>Envoyer un message</h3>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" placeholder="Ton nom" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="ton@email.com" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Ton message..." rows={5} value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              {sent ? '✅ Message envoyé !' : '📨 Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
