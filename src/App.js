import React, { useState, useEffect } from 'react';
import './App.css';
import { QRCodeCanvas } from 'qrcode.react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Bediaf Imene</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => scrollToSection('home')}>Accueil</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>À Propos</a>
            <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>Compétences</a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Expériences</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Bonjour, je suis <span className="highlight">Bediaf Imene</span>
          </h1>
          <p className="hero-subtitle">Technologue Agro-alimentaire & Athlète Élite</p>
          <p className="hero-description">
            Spécialisée en technologie agro-alimentaire et contrôle de qualité, aide-soignante diplômée, 
            et athlète de basket-ball au niveau national. Passionnée par la santé publique et l'éducation sportive.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              Mes Expériences
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Me Contacter
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img 
              src="/images/profile-photo.jpg" 
              alt="Bediaf Imene" 
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-placeholder" style={{display: 'none'}}>🏥</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">À Propos de Moi</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Je suis Bediaf Imene, née le 21/01/2002 à Batna. Professionnelle passionnée avec une formation solide 
                en technologie agro-alimentaire et contrôle de qualité (2021-2025). Diplômée aide-soignante de la santé 
                publique (2023), je combine mes compétences techniques avec une expérience pratique dans le domaine médical.
              </p>
              <p>
                En parallèle, je suis athlète élite de basket-ball, membre de l'équipe nationale depuis 2019 
                et de l'Union Sportive Aurésienne Batna depuis 2017. Cette double expertise me permet d'allier 
                rigueur professionnelle et excellence sportive.
              </p>
              <p>
                <strong>Compétences professionnelles :</strong> Très bonnes relations interpersonnelles et travail d'équipe, 
                sens de la responsabilité et de la disponibilité selon besoin, gestion du temps et flexibilité.
              </p>
              <p>
                <strong>Qualités personnelles :</strong> Préservante, excellente présentation, assistance orale, 
                rigueur et sens de l'organisation.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>6+</h3>
                  <p>Années de Sport</p>
                </div>
                <div className="stat">
                  <h3>3+</h3>
                  <p>Années Nationale</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Compétences & Qualifications</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Formation & Diplômes</h3>
              <div className="skill-items">
                <span className="skill-item">Licence Technologie Agro-alimentaire (2021-2025)</span>
                <span className="skill-item">Diplôme Aide-soignant Santé Publique (2023)</span>
                <span className="skill-item">Baccalauréat Sciences Nature et Vie (2021)</span>
                <span className="skill-item">Moniteur Éducateur Natation</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Compétences Clés</h3>
              <div className="skill-items">
                <span className="skill-item">Promotion Médicale et Pharmaceutique</span>
                <span className="skill-item">Techniques de Vente et Négociation</span>
                <span className="skill-item">Animation de Présentation et Formations</span>
                <span className="skill-item">Connaissance en Dermocosmétique</span>
                <span className="skill-item">Nutrition</span>
                <span className="skill-item">Contrôle Qualité</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Langues & Sport</h3>
              <div className="skill-items">
                <span className="skill-item">Arabe (Maternelle)</span>
                <span className="skill-item">Français (Avancé)</span>
                <span className="skill-item">Anglais (Avancé)</span>
                <span className="skill-item">Basket-ball Élite (Nationale 2019)</span>
                <span className="skill-item">USAB Batna (2017-2024)</span>
                <span className="skill-item">Entraînement Sportif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Expériences Professionnelles</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/photo_6010201389927616293_y (1).jpg" 
                  alt="Stages Hospitaliers" 
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="project-placeholder">🏥</div>';
                  }}
                />
              </div>
              <div className="project-content">
                <h3>Stages Hospitaliers CHU Batna</h3>
                <p>Expérience pratique au Centre Hospitalier Universitaire de Batna dans divers services : réanimation médicale (Juin 2023), urgences (Mai 2023, Septembre 2022), chirurgie femme (Mars 2023), chirurgie infantile (Décembre 2022), traumatologie homme (Octobre 2022), chirurgie homme (Mai 2022), pédiatrie (Avril 2022), EPH infectieux (Janvier 2023), maternité Meriem Bouatoura (Février 2023), et Policlinique Douar El Diss (Mars 2022).</p>
                <div className="project-tech">
                  <span>Santé Publique</span>
                  <span>Soins Médicaux</span>
                  <span>Urgences</span>
                  <span>Chirurgie</span>
                  <span>Pédiatrie</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/photo_6012327364379398243_y (1).jpg" 
                  alt="Sports & Entraînement" 
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="project-placeholder">🏀</div>';
                  }}
                />
              </div>
              <div className="project-content">
                <h3>Sports & Entraînement</h3>
                <p>Entraîneuse de natation au Club Atlético Del Alma depuis 2023. Athlète élite de basket-ball, membre de l'équipe nationale depuis 2019 et de l'Union Sportive Aurésienne Batna depuis 2017. Expérience en vente en ligne et gestion commerciale.</p>
                <div className="project-tech">
                  <span>Natation</span>
                  <span>Basket-ball Élite</span>
                  <span>Équipe Nationale</span>
                  <span>Entraînement</span>
                  <span>Commerce</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/photo_6014606634803907070_x.jpg" 
                  alt="Création de Contenu" 
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="project-placeholder">💻</div>';
                  }}
                />
              </div>
              <div className="project-content">
                <h3>Création de Contenu Digital</h3>
                <p>Spécialisée dans la création de contenu digital dans le domaine médical sur internet. Gestionnaire des médias sociaux pour la Crèche Elmouhtarif et création de contenus éducatifs dans le domaine de la santé.</p>
                <div className="project-tech">
                  <span>Contenu Digital</span>
                  <span>Médias Sociaux</span>
                  <span>Éducation Médicale</span>
                  <span>Santé</span>
                </div>
                <div className="project-links">
                  <a href="https://www.instagram.com/nursing_world____?igsh=bWh5ZXk3NXlqZXdw" target="_blank" rel="noopener noreferrer" className="project-link instagram-link">
                    📸 Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img 
                  src="/images/OIP.webp" 
                  alt="Actions Sociales" 
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="project-placeholder">❤️</div>';
                  }}
                />
              </div>
              <div className="project-content">
                <h3>Actions Sociales</h3>
                <p>Membre active du Croissant Rouge avec participation au don du sang et missions de désinfection des établissements publics médicaux. Engagement social et humanitaire dans la communauté de Batna.</p>
                <div className="project-tech">
                  <span>Croissant Rouge</span>
                  <span>Don du Sang</span>
                  <span>Désinfection</span>
                  <span>Humanitaire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contactez-Moi</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Travaillons ensemble !</h3>
              <p>Je suis toujours intéressée par de nouvelles opportunités et projets passionnants. Véhiculée et disponible sur Batna, Sétif, Constantine, Khenchela et Biskra. N'hésitez pas à me contacter !</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>Imenebediaf@yahoo.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>  0665180532</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Batna, Algérie</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Votre Nom" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Votre Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Sujet" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Votre Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Bediaf Imene. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
