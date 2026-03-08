import '../styles/style.css'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {

    const [aboutRef, isAboutVisible] = useScrollAnimation(0.3);

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
        "Expo": <img src="https://cdn.simpleicons.org/expo/ffffff" width="24" height="24" alt="Expo logo" />
    };

    const skills = {
        languages: ["Java", "JavaScript"],
        frontend: ["HTML", "CSS", 'React.js'],
        backend: ["Struts 2", "Node.js", "Express.js"],
        mobile: ["React Native", "Expo"],
        database: ["MySQL"],
    };

    return (
        <div id="about" className="screen-container" ref={aboutRef}>
            <h2 className={`screen-header fade-in-up ${isAboutVisible ? 'animate' : ''}`}>About Me</h2>

            <div className={`about-content fade-in ${isAboutVisible ? 'animate' : ''}`}>
                <p>
                    Hi! I'm <b>Siva Surya</b>, a passionate <b>Full Stack Developer</b> who enjoys building modern <b>web and mobile applications</b>. I work with technologies like <b>Java</b>, <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, and <b>React.js</b> to create <b>responsive</b> and <b>user-friendly interfaces</b>.
                </p>

                <p>
                    On the backend, I have experience with <b>Node.js</b>, <b>Express.js</b>, and <b>Struts 2</b>, along with <b>MySQL</b> for <b>database management</b>.
                </p>

                <p>
                    Currently, I’m expanding my skills in <b>mobile app development</b> using <b>React Native</b> and <b>Expo</b>, continuously learning and building <b>projects</b> that improve my <b>development skills</b>.
                </p>

                <p>
                    I’m always excited to <b>explore new technologies</b> and turn <b>ideas into real-world applications</b>.
                </p>
            </div>
            <div className={`languages-section fade-in-up ${isAboutVisible ? 'animate' : ''}`}>
                <h3 className="languages-title">Languages & Technologies I Know</h3>
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                        <h4 className="skill-category-title">{category}</h4>
                        <div className="languages-container">
                            {items.map((skill) => (
                                <span key={skill} className="language-tag">
                                    {devicons[skill] && <span className="language-icon">{devicons[skill]}</span>}
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}