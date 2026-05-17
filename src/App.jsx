import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, ChevronDown, MonitorSmartphone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function App() {
  return (
    <>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <nav className="nav-header">
        <div className="app-container nav-content">
          <a href="#" className="nav-logo">AJAY<span className="gradient-text">.</span></a>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
          </div>
        </div>
      </nav>

      <main className="app-container">
        {/* Hero Section */}
        <section id="about" className="section">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 variants={fadeIn} className="hero-title">
              Hi, I'm <span className="gradient-text">Ajay Chauhan</span>
            </motion.h1>
            <motion.h2 variants={fadeIn} className="hero-subtitle">
              Software Engineer & Flutter Developer
            </motion.h2>
            <motion.p variants={fadeIn} className="hero-description">
              Motivated Computer Science undergraduate specializing in Flutter-based mobile application development and Firebase-backed real-time systems. I build production-ready features with a focus on performance optimization, clean UI architectures, and user-centric design.
            </motion.p>
            <motion.div variants={fadeIn} className="social-links">
              <a href="https://github.com/Ajay0008-cloud" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/ajay-chauhan-25a727205" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:ajaychauhan08122000@gmail.com" className="social-icon">
                <Mail size={24} />
              </a>
              <a href="tel:+919015067614" className="social-icon">
                <Phone size={24} />
              </a>
            </motion.div>
            <motion.div variants={fadeIn} style={{ marginTop: '3rem' }}>
              <a href="#experience" className="social-icon" style={{ display: 'inline-block', animation: 'bounce 2s infinite' }}>
                <ChevronDown size={32} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Experience
          </motion.h2>
          <div className="grid-2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card experience-card"
            >
              <h3>Software Engineering Intern</h3>
              <h4>Krishlabs • Aug 2025 - Nov 2025</h4>
              <p>Worked on multiple client-facing Flutter applications, following structured SDLC and agile development practices.</p>
              <ul>
                <li>Designed reusable and responsive UI components using Flutter widgets and clean state management patterns.</li>
                <li>Integrated REST APIs to enable real-time data synchronization and dynamic content rendering.</li>
                <li>Debugged and optimized UI, logic, and performance issues, improving application stability.</li>
                <li>Collaborated with senior developers and designers to deliver production-ready features on schedule.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card experience-card"
            >
              <h3>App Development Intern</h3>
              <h4>SJVN Limited, Shimla • Jun 2025 - Jul 2025</h4>
              <p>Designed and developed a Flutter-based internal enterprise application for employee snack ordering and coupon management.</p>
              <ul>
                <li>Implemented Firebase Authentication and Cloud Firestore to support secure, real-time access for 100+ employees.</li>
                <li>Built separate admin and employee dashboards with role-based access control and dynamic menu management.</li>
                <li>Enabled real-time tracking of coupon usage and snack orders using optimized Firestore data models.</li>
                <li>Awarded an “Excellent” performance rating by Corporate HR for innovation and execution.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <div className="grid-3">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card experience-card"
            >
              <MonitorSmartphone size={32} className="gradient-text" style={{ marginBottom: '1rem' }} />
              <h3>Delivery Management App</h3>
              <h4>Krishlabs</h4>
              <p>Developed order tracking interfaces, delivery status modules, and backend-connected workflows allowing users to monitor orders in real time.</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">REST API</span>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card experience-card"
            >
              <MonitorSmartphone size={32} className="gradient-text" style={{ marginBottom: '1rem' }} />
              <h3>News Aggregation App</h3>
              <h4>Krishlabs</h4>
              <p>Built dynamic news feeds with category-based filtering, pagination, and API-driven live updates for improved content discovery.</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">State Management</span>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card experience-card"
            >
              <MonitorSmartphone size={32} className="gradient-text" style={{ marginBottom: '1rem' }} />
              <h3>Smart Employee Lunch System</h3>
              <h4>Independent Project</h4>
              <p>Developed a full-stack mobile application enabling employees to manage lunch coupons, snack orders, and food preferences with real-time tracking.</p>
              <div style={{ marginTop: '1rem' }}>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Firestore</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Technical Skills
          </motion.h2>
          <div className="grid-2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card"
            >
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Languages</h3>
              <div>
                {['Dart', 'JavaScript', 'Python', 'C++', 'HTML', 'CSS'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card"
            >
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Mobile Development</h3>
              <div>
                {['Flutter', 'Firebase SDK', 'REST API Integration'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card"
            >
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Backend & Web</h3>
              <div>
                {['Node.js', 'React.js'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="glass-card"
            >
              <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Databases & Tools</h3>
              <div>
                {['Firebase Firestore', 'Realtime Database', 'MySQL', 'Git', 'GitHub', 'Postman', 'VS Code'].map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} Ajay Chauhan. Built with React & Vite.</p>
          <div className="social-links" style={{ marginTop: '1.5rem' }}>
            <a href="https://github.com/Ajay0008-cloud" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/ajay-chauhan-25a727205" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={20} />
            </a>
          </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        html { scroll-behavior: smooth; }
      `}} />
    </>
  );
}

export default App;
