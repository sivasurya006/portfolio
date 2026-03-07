import { useState } from 'react';
import '../styles/style.css'
import projectsData from '../projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Java', 'HTML & CSS', 'React Native', 'Js', 'Node.js', 'Scratch', 'Group project'];

    const displayedProjects = activeFilter === 'All' ? projectsData : projectsData.filter(p => p.category.includes(activeFilter));

    const handleCardClick = (url, githubUrl) => {
        const link = url || githubUrl;
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div id="projects" className="screen-container">
            <h2 className="screen-header">Projects</h2>

            <div className="projects-section">
                <div className="project-filters">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {displayedProjects.map((item) => (
                        <div key={`main-${item.id || item.title}`} className="project-card" onClick={() => handleCardClick(item.url, item.githubUrl)}>
                            <div className="project-image-placeholder">
                                <img src={item.imgUrl} height={'100%'} width={'100%'} style={{ objectFit: 'cover' }} />
                            </div>
                            <div className="project-info">
                                <div className="project-header">
                                    <h4>{item.title}</h4>
                                </div>
                                <p>{item.desc}</p>
                                <div className="project-bottom">
                                    <div className="project-tags">
                                        {
                                            item.lang.map((lang, i) => (
                                                <span key={(item.id || item.title) + lang + i} className="language-tag small-tag">{lang}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="project-links">
                                        {(
                                            <>
                                                <a href={item.githubUrl || '#'} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.stopPropagation(); if (!item.githubUrl) e.preventDefault(); }} title="GitHub Repository">
                                                    {
                                                        item.githubUrl && (
                                                            <FaGithub size={20} />
                                                        )
                                                    }
                                                </a>
                                                <a href={item.url || '#'} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.stopPropagation(); if (!item.url) e.preventDefault(); }} title="View Site">
                                                    {
                                                        item.url && (
                                                            <FaExternalLinkAlt size={18} />
                                                        )
                                                    }
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
