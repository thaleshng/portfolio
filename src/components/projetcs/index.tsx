import { useEffect, useState } from "react"
import { fetchProjects } from "../../services/projects"
import styled from "styled-components"

interface Project {
    number: string,
    name: string,
    description: string,
    pageLink: string,
    githubLink:string,
    src: string
}

export const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { projects } = await fetchProjects()
            setProjects(projects)
        }

        fetchData()
    }, [])

    console.log(projects);
    

    return (
        <ProjectsSection className="projects section" id="projects">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>Meus Projetos</h2>
                </div>
            </div>

            <div className="projects-container container">
                {projects.map((project: Project, index) => (
                    <div className="project" key={index}>
                        <div className="grid">
                            {(index % 2 === 0) ? (
                                <>
                                    <a href={project.pageLink} target="_blank" className="page">
                                        <img src={project.src} alt={project.name} />
                                        <div className="page-view">
                                            <p>Ver página completa</p>
                                        </div>
                                    </a>
                                    <div className="project-infos">
                                        <h3>{project.number}</h3>
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                        <a href={project.githubLink} target="_blank">🔗 Ver no GitHub</a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="project-infos">
                                        <h3>{project.number}</h3>
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                        <a href={project.githubLink} target="_blank">🔗 Ver no GitHub</a>
                                    </div>
                                    <a href={project.pageLink} target="_blank" className="page">
                                        <img src={project.src} alt={project.name} />
                                        <div className="page-view">
                                            <p>Ver página completa</p>
                                        </div>
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                ))}
                <a
                    href="https://github.com/thaleshng?tab=repositories"
                    target="_blank"
                    className="see-more"
                ><span className="btn-transition box-shadow"></span>Ver mais</a>
            </div>
        </div>
    </ProjectsSection>
    )
}

const ProjectsSection = styled.section`
    .project {
    margin-bottom: 40px;
    }

    .project .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .project .grid .page{
        position: relative;
        z-index: 9;
        height: 100%;
        width: 100%;
        background: none;
        transition: opacity 0.5;
    }

    .project .grid .page .page-view {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        top: 0;
        background: none;
        transition: opacity 0.5;
        -webkit-transition: background-color 0.5s linear;
        -ms-transition: background-color 0.5s linear;
        transition: background-color 0.5s linear;
    }

    .project .grid .page:hover .page-view {
        background-color: rgba(0, 0, 0, 0.7);
        -webkit-transition: background-color 0.2s linear;
        -ms-transition: background-color 0.2s linear;
        transition: background-color 0.2s linear;
    }

    .project .grid .page .page-view p {
        color: white;
        font-weight: 700;
        position: absolute;
        text-align: center;
        width: 100%;
        top: 50%;
        opacity: 0;
        -webkit-transition: opacity 0.3s linear;
        -ms-transition: opacity 0.3s linear;
        transition: opacity 0.3s linear;
    }

    .project .grid .page:hover .page-view p {
        opacity: 1;
        transition: opacity 0.2s linear;
        -webkit-transition: opacity 0.2s linear;
        -moz-transition: opacity 0.2s linear;
        -o-transition: opacity 0.2s linear;
    }

    .projects-container {
        display: flex;
        flex-direction: column;
    }

    .projects-container .project img {
        border-radius: 5px;
        gap: 20px;
        height: 100%;
        border: 1px solid var(--primary-color);
    }

    .projects-container .project .project-infos {
        padding: 20px;
    }

    .projects-container .project h3 {
        padding: 10px 0 10px 0;
        font-weight: 300;
        font-size: 2.5rem;
        color: var(--primary-color);
        text-transform: uppercase;
    }

    .projects-container .project h4 {
        font-family: var(--third-font); 
        font-size: 2.2rem;
        margin-bottom: 20px;
    }

    .projects-container .project .project-infos p:nth-child(3) {
        margin: 10px 0 20px 0;
        font-weight: 300;
        font-size: 1.4rem;
    }

    .projects-container .project .project-infos a {
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .projects-container .project .project-infos a:hover {
        color: var(--primary-color);
    }

    .projects-container .see-more {
        text-transform: uppercase;
        padding: 5px 20px;
        background: linear-gradient(to right, var(--gradient-color),var(--primary-color));
        align-self: center;
        border-radius: 50px; 
        border: 1px solid var(--primary-color);
        display: inline-block;
        z-index: 9;
        position: relative;
    }

    .projects-container .see-more:hover .btn-transition {
        opacity: 1;
    }

    @media (max-width: 1280px) {
        .projects-container {
            padding: 0 var(--mobile-padding);
        }
    }

    @media (max-width: 425px) {
        .project .grid {
            grid-template-columns: 1fr;
        }

        .project:nth-child(2) .grid,
        .project:nth-child(4) .grid {
            display: flex;
            flex-direction: column-reverse;
        }
    }
`