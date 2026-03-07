import '../styles/style.css'

export default function About() {

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
        <div id="about" className="screen-container">
            <h2 className="screen-header">About Me</h2>

            <div className="about-content">
                <p>
                    Hello! I'm <b>Siva Surya</b>, a student with an interest in
                    <b> Full Stack Development</b>. I have experience working with
                    technologies like Java, JavaScript, HTML, CSS, and React.js for
                    building user interfaces.
                </p>
                <p>
                    I have also worked with backend technologies such as Struts 2,
                    Node.js, and Express.js, along with MySQL for database
                    management. I am currently learning and improving my skills by
                    building web and mobile applications using React Native and Expo.
                </p>
            </div>
            <div className="languages-section">
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