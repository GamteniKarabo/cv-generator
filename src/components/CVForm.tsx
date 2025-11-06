import React, { useState } from 'react';
import type { CVData } from '../types';
import './CVForm.css';

interface CVFormProps {
    data: CVData;
    onChange: (data: CVData) => void;
}

export const CVForm: React.FC<CVFormProps> = ({ data, onChange }) => {
    const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'education' | 'skills' | 'projects'>('personal');

    const updatePersonalInfo = (field: string, value: string) => {
        onChange({
            ...data,
            personalInfo: { ...data.personalInfo, [field]: value }
        });
    };
    interface Experience {
        id: string;
        position: string;
        company: string;
        Location: string;
        startDate: string;
        endDate: string;
        current: boolean;
        description: string[];

    }

    const addExperience = () => {
        const newExp = {
            id: Date.now().toString(),
            position: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: ['']
        };
        onChange({ ...data, experience: [...data.experience, newExp] });
    };

    const updateExperience = (id: string, field: string, value: Experience[keyof Experience]) => {
        onChange({
            ...data,
            experience: data.experience.map(exp =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        });
    };

    const deleteExperience = (id: string) => {
        onChange({
            ...data,
            experience: data.experience.filter(exp => exp.id !== id)
        });
    };

    const addEducation = () => {
        const newEdu = {
            id: Date.now().toString(),
            degree: '',
            institution: '',
            location: '',
            startDate: '',
            endDate: '',
            gpa: ''
        };
        onChange({ ...data, education: [...data.education, newEdu] });
    };

    const updateEducation = (id: string, field: string, value: string) => {
        onChange({
            ...data,
            education: data.education.map(edu =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        });
    };

    const deleteEducation = (id: string) => {
        onChange({
            ...data,
            education: data.education.filter(edu => edu.id !== id)
        });
    };

    const addSkillCategory = () => {
        onChange({
            ...data,
            skills: [...data.skills, { category: '', items: [] }]
        });
    };

    const updateSkillCategory = (index: number, field: 'category' | 'items', value: string | string[]) => {
        const newSkills = [...data.skills];
        if (field === 'items' && typeof value === 'string') {
            newSkills[index].items = value.split(',').map(s => s.trim()).filter(s => s);
        } else if (field === 'category' && typeof value === 'string') {
            newSkills[index].category = value;
        }
        else if (field === 'items' && Array.isArray(value)) {
            newSkills[index].items = value;
        }

        onChange({ ...data, skills: newSkills });
    };

    const deleteSkillCategory = (index: number) => {
        onChange({
            ...data,
            skills: data.skills.filter((_, i) => i !== index)
        });
    };

    const addProject = () => {
        const newProject = {
            id: Date.now().toString(),
            name: '',
            description: '',
            technologies: [],
            date: ''
        };
        onChange({ ...data, projects: [...data.projects, newProject] });
    };

    const updateProject = (id: string, field: string, value: string | string[]) => {
        onChange({
            ...data,
            projects: data.projects.map(proj => {
                if (proj.id === id) {
                    if (field === 'technologies' && typeof value === 'string') {
                        return { ...proj, technologies: value.split(',').map(s => s.trim()).filter(s => s) };
                    }
                    return { ...proj, [field]: value };
                }
                return proj;
            })
        });
    };

    const deleteProject = (id: string) => {
        onChange({
            ...data,
            projects: data.projects.filter(proj => proj.id !== id)
        });
    };

    return (
        <div className="cv-form">
            <div className="form-tabs">
                <button
                    className={activeTab === 'personal' ? 'active' : ''}
                    onClick={() => setActiveTab('personal')}
                >
                    Personal Info
                </button>
                <button
                    className={activeTab === 'experience' ? 'active' : ''}
                    onClick={() => setActiveTab('experience')}
                >
                    Experience
                </button>
                <button
                    className={activeTab === 'education' ? 'active' : ''}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </button>
                <button
                    className={activeTab === 'skills' ? 'active' : ''}
                    onClick={() => setActiveTab('skills')}
                >
                    Skills
                </button>
                <button
                    className={activeTab === 'projects' ? 'active' : ''}
                    onClick={() => setActiveTab('projects')}
                >
                    Projects
                </button>
            </div>

            <div className="form-content">
                {activeTab === 'personal' && (
                    <div className="form-section">
                        <h3>Personal Information</h3>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={data.personalInfo.fullName}
                            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Professional Title"
                            value={data.personalInfo.title}
                            onChange={(e) => updatePersonalInfo('title', e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={data.personalInfo.email}
                            onChange={(e) => updatePersonalInfo('email', e.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={data.personalInfo.phone}
                            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={data.personalInfo.location}
                            onChange={(e) => updatePersonalInfo('location', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="LinkedIn (optional)"
                            value={data.personalInfo.linkedin || ''}
                            onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Website (optional)"
                            value={data.personalInfo.website || ''}
                            onChange={(e) => updatePersonalInfo('website', e.target.value)}
                        />
                        <textarea
                            placeholder="Professional Summary"
                            rows={4}
                            value={data.personalInfo.summary}
                            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                        />
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>Professional Experience</h3>
                            <button className="add-btn" onClick={addExperience}>+ Add Experience</button>
                        </div>
                        {data.experience.map((exp, index) => (
                            <div key={exp.id} className="form-item">
                                <div className="item-header">
                                    <h4>Experience {index + 1}</h4>
                                    <button className="delete-btn" onClick={() => deleteExperience(exp.id)}>Delete</button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Position"
                                    value={exp.position}
                                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={exp.location}
                                    onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                                />
                                <div className="date-row">
                                    <input
                                        type="month"
                                        placeholder="Start Date"
                                        value={exp.startDate}
                                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                    />
                                    <input
                                        type="month"
                                        placeholder="End Date"
                                        value={exp.endDate}
                                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                        disabled={exp.current}
                                    />
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={exp.current}
                                            onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                                        />
                                        Current
                                    </label>
                                </div>
                                <textarea
                                    placeholder="Description (one bullet point per line)"
                                    rows={4}
                                    value={exp.description.join('\n')}
                                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value.split('\n'))}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'education' && (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>Education</h3>
                            <button className="add-btn" onClick={addEducation}>+ Add Education</button>
                        </div>
                        {data.education.map((edu, index) => (
                            <div key={edu.id} className="form-item">
                                <div className="item-header">
                                    <h4>Education {index + 1}</h4>
                                    <button className="delete-btn" onClick={() => deleteEducation(edu.id)}>Delete</button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Degree"
                                    value={edu.degree}
                                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Institution"
                                    value={edu.institution}
                                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    value={edu.location}
                                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                                />
                                <div className="date-row">
                                    <input
                                        type="month"
                                        placeholder="Start Date"
                                        value={edu.startDate}
                                        onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                                    />
                                    <input
                                        type="month"
                                        placeholder="End Date"
                                        value={edu.endDate}
                                        onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="GPA (optional)"
                                    value={edu.gpa || ''}
                                    onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'skills' && (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>Technical Skills</h3>
                            <button className="add-btn" onClick={addSkillCategory}>+ Add Category</button>
                        </div>
                        {data.skills.map((skill, index) => (
                            <div key={index} className="form-item">
                                <div className="item-header">
                                    <h4>Skill Category {index + 1}</h4>
                                    <button className="delete-btn" onClick={() => deleteSkillCategory(index)}>Delete</button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Category (e.g., Frontend, Backend)"
                                    value={skill.category}
                                    onChange={(e) => updateSkillCategory(index, 'category', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Skills (comma-separated)"
                                    value={skill.items.join(', ')}
                                    onChange={(e) => updateSkillCategory(index, 'items', e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'projects' && (
                    <div className="form-section">
                        <div className="section-header">
                            <h3>Notable Projects</h3>
                            <button className="add-btn" onClick={addProject}>+ Add Project</button>
                        </div>
                        {data.projects.map((project, index) => (
                            <div key={project.id} className="form-item">
                                <div className="item-header">
                                    <h4>Project {index + 1}</h4>
                                    <button className="delete-btn" onClick={() => deleteProject(project.id)}>Delete</button>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    value={project.name}
                                    onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                                />
                                <textarea
                                    placeholder="Description"
                                    rows={3}
                                    value={project.description}
                                    onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Technologies (comma-separated)"
                                    value={project.technologies.join(', ')}
                                    onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                                />
                                <input
                                    type="month"
                                    placeholder="Date"
                                    value={project.date}
                                    onChange={(e) => updateProject(project.id, 'date', e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};