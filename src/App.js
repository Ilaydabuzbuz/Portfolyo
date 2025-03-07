import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '-50px'
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      '.skill-item, .project-card, .experience-card, .contact-link, .about-text, .education-card, .skill-progress'
    );
    
    animatedElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">IB</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      
      <main className="main-content">
        <h1 className="name">Ilayda Buzbuz</h1>
        <h2 className="title">Computer Engineering Student</h2>
      </main>

      <section className="about-section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Computer Engineering third-year student from Izmir University of Economics with a full scholarship. Passionate about software development and problem-solving. Currently working on Data Science and Machine Learning.</p>
            <p>Experienced in Object-Oriented Programming, Data Structures & Algorithms, and various modern development tools and frameworks.</p>
          </div>
          
          <div className="education-card">
            <h3>Education</h3>
            <div className="education-item">
              <h4>B.S. Computer Engineering</h4>
              <p className="school">Izmir University of Economics</p>
              <p className="gpa">GPA: 2.83/4.0</p>
            </div>
            <div className="education-item">
              <h4>M.S. Computer Science - Exchange Student</h4>
              <p className="school">Hochschule Fulda</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-item left">
            <div className="skill-card">
              <span className="skill-name">Java</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "85%"}}></div>
              </div>
            </div>
          </div>
          
          <div className="skill-item right">
            <div className="skill-card">
              <span className="skill-name">Python</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "80%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item left">
            <div className="skill-card">
              <span className="skill-name">C</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "75%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item right">
            <div className="skill-card">
              <span className="skill-name">C#</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "70%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item left">
            <div className="skill-card">
              <span className="skill-name">Git/GitHub</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "90%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item right">
            <div className="skill-card">
              <span className="skill-name">VS Code</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "85%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item left">
            <div className="skill-card">
              <span className="skill-name">Maven</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "75%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item right">
            <div className="skill-card">
              <span className="skill-name">Kaggle</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "70%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item left">
            <div className="skill-card">
              <span className="skill-name">Eclipse/IntelliJ</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "85%"}}></div>
              </div>
            </div>
          </div>

          <div className="skill-item right">
            <div className="skill-card">
              <span className="skill-name">Unity</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{"--progress": "65%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Syllabus Manager</h3>
            <p className="project-description">
              Team project for managing university courses and classrooms. Active role in all stages, from specification to deployment.
            </p>
            <p className="tech-stack">
              Tech Stack: JavaFX, Java, Maven IDE, GitHub
            </p>
          </div>

          <div className="project-card">
            <h3>Misti</h3>
            <p className="project-description">
              Developed complex algorithms for an advanced version of the Pisti card game.
            </p>
            <p className="tech-stack">
              Tech Stack: Java, Eclipse IDE, GitHub
            </p>
          </div>

          <div className="project-card">
            <h3>Flappy Bird</h3>
            <p className="project-description">
              Created a simple replica game. Improved my skills in JavaFX and game development principles.
            </p>
            <p className="tech-stack">
              Tech Stack: JavaFX, Java, Maven IDE, GitHub
            </p>
          </div>

          <div className="project-card">
            <h3>StockCheckerBot</h3>
            <p className="project-description">
              Developed a simple bot using Python's Selenium library to monitor product availability.
            </p>
            <p className="tech-stack">
              Tech Stack: Python, Selenium, GitHub
            </p>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">
          <div className="experience-card">
            <h3>Software Engineering Club</h3>
            <p className="experience-role">Member of Management Board</p>
            <p className="experience-date">Oct 2023 - Oct 2024</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-links">
          <a href="https://github.com/Ilaydabuzbuz" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ilayda-buzbuz-286089270/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span>LinkedIn</span>
          </a>
          <a href="mailto:ilaydabuzbuz@gmail.com" className="contact-link">
            <span>Email</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
