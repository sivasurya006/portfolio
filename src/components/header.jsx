import { useState, useEffect } from 'react';
import '../styles/style.css'
import ThemeToggle from './ThemeToggle';

export default function Header() {

  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.name;
          }
        }
      }

    
      const isBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 200;
      if (isBottom) {
        currentSection = 'Contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName, sectionId) => {
    setActiveSection(sectionName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
      <h1 className='header-name'><a href='#home' style={{textDecoration:'none'}}>Portfolio</a></h1>
      <div className='header-right'>
        <ul className='header-sections'>
          {
            sections.map(s => (
              <li
                key={s.name}
                className={activeSection === s.name ? 'active' : ''}
                onClick={() => scrollToSection(s.name, s.id)}
              >
                {s.name}
              </li>
            ))
          }
        </ul>
        <ThemeToggle />
      </div>
    </div>
  )
}
