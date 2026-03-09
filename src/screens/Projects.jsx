import { useState } from 'react';
import '../styles/style.css'
import projectsData from '../projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
    const [projectsRef, isProjectsVisible] = useScrollAnimation(0.1);
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAllProjects, setShowAllProjects] = useState(false);
    const filters = ['All', 'Java', 'Js', 'Node.js','React Native' ,'HTML & CSS' ,'Scratch', 'Group project'];
    const INITIAL_PROJECTS_COUNT = 6;

    const filteredProjects = activeFilter === 'All' ? projectsData : projectsData.filter(p => p.category.includes(activeFilter));
    const displayedProjects = activeFilter === 'All' && !showAllProjects
        ? filteredProjects.slice(0, INITIAL_PROJECTS_COUNT)
        : filteredProjects;
    const shouldShowLoadMore = activeFilter === 'All' && !showAllProjects && filteredProjects.length > INITIAL_PROJECTS_COUNT;

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        if (filter !== 'All') {
            setShowAllProjects(false);
        }
    };

    const handleCardClick = (url, githubUrl) => {
        const link = url || githubUrl;
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div id="projects" className="screen-container" ref={projectsRef}>
            <h2 className={`screen-header fade-in-up ${isProjectsVisible ? 'animate' : ''}`}>Projects</h2>

            <div className="projects-section">
                <div className={`project-filters fade-in ${isProjectsVisible ? 'animate' : ''}`}>
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => handleFilterChange(filter)}
                        >
                            {filter == 'Js' ? 'JS' : filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {displayedProjects.map((item, index) => (
                        <div
                            key={`main-${item.id || item.title}`}
                            className={`project-card fade-in-up ${isProjectsVisible ? 'animate' : ''}`}
                            onClick={() => handleCardClick(item.url, item.githubUrl)}
                            style={{ animationDelay: isProjectsVisible ? `${index * 0.3}s` : '0s' }}
                        >
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

                {shouldShowLoadMore && (
                    <div className="load-more-container">
                        <button className="load-more-btn" onClick={() => setShowAllProjects(true)}>
                            Load more
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
