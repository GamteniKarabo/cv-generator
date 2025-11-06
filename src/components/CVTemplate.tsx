import React from 'react';
import type { CVData } from '../types';
import './CVTemplate.css';

interface CVTemplateProps {
    data: CVData;
}

export const CVTemplate: React.FC<CVTemplateProps> = ({ data }) => {
    const formatDate = (date: string) => {
        if (!date) return 'Present';
        const [year, month] = date.split('-');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    return (
        <div className="cv-container" id="cv-template" >
            {/* Header Section */}
            < header className="cv-header" >
                <h1 className="cv-name" > {data.personalInfo.fullName} </h1>
                < p className="cv-title" > {data.personalInfo.title} </p>
                < div className="cv-contact" >
                    <span>{data.personalInfo.email} </span>
                    < span className="separator" >•</span>
                    < span > {data.personalInfo.phone} </span>
                    < span className="separator" >•</span>
                    < span > {data.personalInfo.location} </span>
                    {
                        data.personalInfo.linkedin && (
                            <>
                                <span className="separator" >•</span>
                                < span > {data.personalInfo.linkedin} </span>
                            </>
                        )}
                    {
                        data.personalInfo.website && (
                            <>
                                <span className="separator" >•</span>
                                < span > {data.personalInfo.website} </span>
                            </>
                        )
                    }
                </div>
            </header>

            {/* Summary Section */}
            <section className="cv-section" >
                <h2 className="section-title" > Professional Summary </h2>
                < p className="summary-text" > {data.personalInfo.summary} </p>
            </section>

            {/* Experience Section */}
            <section className="cv-section" >
                <h2 className="section-title" > Professional Experience </h2>
                {
                    data.experience.map((exp) => (
                        <div key={exp.id} className="experience-item" >
                            <div className="exp-header" >
                                <div className="exp-left" >
                                    <h3 className="exp-position" > {exp.position} </h3>
                                    < p className="exp-company" > {exp.company} • {exp.location} </p>
                                </div>
                                < div className="exp-right" >
                                    <p className="exp-date" >
                                        {formatDate(exp.startDate)
                                        } - {exp.current ? 'Present' : formatDate(exp.endDate)}
                                    </p>
                                </div>
                            </div>
                            < ul className="exp-description" >
                                {
                                    exp.description.map((item, index) => (
                                        <li key={index} > {item} </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
            </section>

            {/* Education Section */}
            <section className="cv-section" >
                <h2 className="section-title" > Education </h2>
                {
                    data.education.map((edu) => (
                        <div key={edu.id} className="education-item" >
                            <div className="edu-header" >
                                <div className="edu-left" >
                                    <h3 className="edu-degree" > {edu.degree} </h3>
                                    < p className="edu-institution" > {edu.institution} • {edu.location} </p>
                                </div>
                                < div className="edu-right" >
                                    <p className="edu-date" >
                                        {formatDate(edu.startDate)
                                        } - {formatDate(edu.endDate)}
                                    </p>
                                    {edu.gpa && <p className="edu-gpa" > GPA: {edu.gpa} </p>}
                                </div>
                            </div>
                        </div>
                    ))}
            </section>

            {/* Skills Section */}
            <section className="cv-section" >
                <h2 className="section-title" > Technical Skills </h2>
                < div className="skills-container" >
                    {
                        data.skills.map((skillGroup, index) => (
                            <div key={index} className="skill-group" >
                                <span className="skill-category" > {skillGroup.category}: </span>
                                < span className="skill-items" > {skillGroup.items.join(' • ')} </span>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Projects Section */}
            {
                data.projects.length > 0 && (
                    <section className="cv-section" >
                        <h2 className="section-title" > Notable Projects </h2>
                        {
                            data.projects.map((project) => (
                                <div key={project.id} className="project-item" >
                                    <div className="project-header" >
                                        <h3 className="project-name" > {project.name} </h3>
                                        < p className="project-date" > {formatDate(project.date)
                                        } </p>
                                    </div>
                                    < p className="project-description" > {project.description} </p>
                                    < p className="project-tech" >
                                        <span className="tech-label" > Technologies: </span> {project.technologies.join(', ')}
                                    </p>
                                </div>
                            ))
                        }
                    </section>
                )}
        </div>
    );
};