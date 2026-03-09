import { useState } from 'react';
import '../styles/style.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {

    const [aboutRef, isAboutVisible] = useScrollAnimation(0.3);
    const [activeCategory, setActiveCategory] = useState('overall');

    const devicons = {
        "Java": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="24" height="24" alt="Java logo" />,
        "JavaScript": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="24" height="24" alt="JavaScript logo" />,
        "React.js": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="24" height="24" alt="React logo" />,
        "React Native": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="24" height="24" alt="React Native logo" />,
        "HTML": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="24" height="24" alt="HTML5 logo" />,
        "CSS": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="24" height="24" alt="CSS3 logo" />,
        "MySQL": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="24" height="24" alt="MySQL logo" />,
        "Node.js": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="24" height="24" alt="Node.js logo" />,
        "Express.js": <img src="https://cdn.simpleicons.org/express/ffffff" width="24" height="24" alt="Express.js logo" />,
        "Struts 2": <img src="/portfolio/assets/project_thumbnail/struts.png" width="24" height="24" alt="Struts 2 logo" />,
        "Expo": <img src="https://cdn.simpleicons.org/expo/ffffff" width="24" height="24" alt="Expo logo" />,
        "VS Code": <img src="/portfolio/assets/logos/vscode.png" width="24" height="24" alt="VS Code logo" />,
        "IntelliJ IDEA": <img src="/portfolio/assets/logos/intellij-idea.png" width="24" height="24" alt="IntelliJ IDEA logo" />,
        "Eclipse": <img src="/portfolio/assets/logos/eclipse.png" width="24" height="24" alt="Eclipse logo" />,
        "Antigravity": <img src="/portfolio/assets/logos/antigravity.png" width="24" height="24" alt="Antigravity logo" />,
        "Selenium": <img src="/portfolio/assets/logos/selenium.png" width="24" height="24" alt="Selenium logo" />,
        "GitHub": <img src="/portfolio/assets/logos/github.png" width="24" height="24" alt="GitHub logo" />,
        "npm": <img src="https://cdn.simpleicons.org/npm/CB3837" width="24" height="24" alt="npm logo" />,
        "Postman": <img src="/portfolio/assets/logos/postman.png" width="24" height="24" alt="Postman logo" />,
        "Render": <img src="/portfolio/assets/logos/render.png" width="24" height="24" alt="Render logo" />,
        "Gemini": <img src="/portfolio/assets/logos/gemini.png" width="24" height="24" alt="Gemini logo" />,
        "Claude": <img src="https://cdn.simpleicons.org/anthropic/000000" width="24" height="24" alt="Claude logo" />,
        "ChatGPT": <img src="/portfolio/assets/logos/chatgpt.png" width="24" height="24" alt="ChatGPT logo" />,
        "Qwen": <img src="/portfolio/assets/logos/qwen.png" width="24" height="24" alt="Qwen logo" />,
        "Zoho Code": <img src="/portfolio/assets/logos/zoho-code.png" width="24" height="24" alt="Zoho Code logo" />,
        "Perplexity": <img src="https://cdn.simpleicons.org/perplexity/1FB8CD" width="24" height="24" alt="Perplexity logo" />,
        "Copilot": <img src="https://cdn.simpleicons.org/githubcopilot/000000" width="24" height="24" alt="Copilot logo" />
    };

    const skills = {
        languages: ["Java", "JavaScript"],
        frontend: ["HTML", "CSS", 'React.js'],
        backend: ["Struts 2", "Node.js", "Express.js"],
        mobile: ["React Native", "Expo"],
        database: ["MySQL"],
tools: [
  "Zoho Code",
  "VS Code",
  "IntelliJ IDEA",
  "Eclipse",
  "GitHub",
  "Postman",
  "npm",
  "Selenium",
  "Render",
  "Antigravity",
  "Copilot",
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "Qwen"
]
    };
    const categoryLabels = {
        overall: "Core Skills",
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        database: "Database",
        tools: "Tools"
    };

    const nonToolCategories = Object.keys(skills).filter((category) => category !== 'tools');
    const overallSkills = Array.from(
        new Set(nonToolCategories.flatMap((category) => skills[category]))
    );
    const categoryOrder = ['overall', ...Object.keys(skills)];
    const selectedSkills = activeCategory === 'overall' ? overallSkills : (skills[activeCategory] || []);

    return (
        <div id="about" className="screen-container" ref={aboutRef}>
            <h2 className={`screen-header fade-in-up ${isAboutVisible ? 'animate' : ''}`}>About Me</h2>

            <div className={`about-layout fade-in ${isAboutVisible ? 'animate' : ''}`}>
                <div className="about-content-card">
                    <div className="about-content">
                        <p>
                           A software development enthusiast with a strong interest in building practical and efficient applications. I work with technologies like Java, JavaScript, HTML, CSS, and React.js to create responsive and user-friendly interfaces.
                        </p>

                        <p>
                            On the backend, I have experience with Node.js, Express.js and Struts 2 along with MySQL for database management.
                        </p>

                        <p>
                            Currently, I’m expanding my skills in mobile app development using React Native and Expo, continuously learning and building projects that improve my development skills.
                        </p>

                        <p>
                           I enjoy constantly learning, brainstorming ideas, and exploring new technologies to improve skills and build better solutions.
                        </p>
                    </div>
                </div>

                <div className={`languages-section fade-in-up ${isAboutVisible ? 'animate' : ''}`}>
                    <h3 className="languages-title">Languages, Technologies & Tools</h3>
                    <div className="skill-filter-row">
                        {categoryOrder.map((category) => (
                            <button
                                key={category}
                                className={`skill-filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {categoryLabels[category] || category}
                            </button>
                        ))}
                    </div>
                    <div className="skill-category">
                        <h4 className="skill-category-title">{categoryLabels[activeCategory] || activeCategory}</h4>
                        <div className="languages-container">
                            {selectedSkills.map((skill) => (
                                <span key={skill} className="language-tag">
                                    {devicons[skill] && <span className="language-icon">{devicons[skill]}</span>}
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
