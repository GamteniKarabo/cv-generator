import type { CVData } from '../types';

export const sampleData: CVData = {
    personalInfo: {
        fullName: 'Gamteni Karabo',
        title: 'Full-Stack Software Developer',
        email: 'karabo.gamteni@email.com',
        phone: '+27 (0) 123-4567',
        location: 'Johannesburg, South Africa',
        linkedin: 'linkedin.com/in/gamtenikarabo',
        website: 'gamtenikarabo.dev',
        summary: 'Innovative and results-driven Full-Stack Developer with expertise in building scalable web applications. Passionate about creating elegant solutions to complex problems and delivering exceptional user experiences. Proficient in modern technologies with a strong foundation in both frontend and backend development.'
    },
    experience: [
        {
            id: '1',
            position: 'Senior Full-Stack Developer',
            company: 'Tech Innovations Ltd',
            location: 'Johannesburg, SA',
            startDate: '2022-03',
            endDate: '',
            current: true,
            description: [
                'Architected and developed enterprise-level web applications serving 500K+ users monthly',
                'Led a team of 4 developers in implementing microservices architecture using Node.js and React',
                'Improved application performance by 55% through code optimization and caching strategies',
                'Implemented CI/CD pipelines reducing deployment time from hours to minutes',
                'Mentored junior developers and conducted regular code reviews to maintain high code quality'
            ]
        },
        {
            id: '2',
            position: 'Full-Stack Developer',
            company: 'Digital Solutions Africa',
            location: 'Pretoria, SA',
            startDate: '2020-01',
            endDate: '2022-02',
            current: false,
            description: [
                'Built and maintained 20+ client-facing web applications using React, TypeScript, and Node.js',
                'Designed and implemented RESTful APIs and database schemas for various business domains',
                'Collaborated with cross-functional teams including designers, product managers, and QA',
                'Reduced bug reports by 40% through implementation of comprehensive testing strategies',
                'Integrated third-party services including payment gateways and analytics platforms'
            ]
        },
        {
            id: '3',
            position: 'Junior Developer',
            company: 'StartUp Hub SA',
            location: 'Cape Town, SA',
            startDate: '2018-06',
            endDate: '2019-12',
            current: false,
            description: [
                'Developed responsive frontend components using React and modern CSS frameworks',
                'Assisted in backend development with Node.js and Express.js',
                'Participated in agile development processes including daily standups and sprint planning',
                'Contributed to documentation and knowledge base articles for the development team'
            ]
        }
    ],
    education: [
        {
            id: '1',
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Johannesburg',
            location: 'Johannesburg, SA',
            startDate: '2015-02',
            endDate: '2018-11',
            gpa: '3.7'
        },
        {
            id: '2',
            degree: 'National Diploma in Information Technology',
            institution: 'Tshwane University of Technology',
            location: 'Pretoria, SA',
            startDate: '2013-01',
            endDate: '2014-12',
            gpa: '3.5'
        }
    ],
    skills: [
        {
            category: 'Frontend',
            items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Material-UI']
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs']
        },
        {
            category: 'DevOps & Tools',
            items: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Jenkins', 'Linux', 'Nginx']
        },
        {
            category: 'Other',
            items: ['Agile/Scrum', 'Test-Driven Development', 'Microservices', 'System Design', 'UI/UX Principles']
        }
    ],
    projects: [
        {
            id: '1',
            name: 'E-Commerce Platform - ShopSA',
            description: 'Built a comprehensive e-commerce platform with real-time inventory management, payment processing via PayFast, and advanced analytics dashboard. Handled 10K+ daily transactions.',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'AWS'],
            date: '2023-08'
        },
        {
            id: '2',
            name: 'Real-Time Analytics Dashboard',
            description: 'Developed an enterprise-grade analytics platform with real-time data visualization, customizable reports, and automated insights. Served data to 5K+ concurrent users.',
            technologies: ['Next.js', 'TypeScript', 'D3.js', 'MongoDB', 'WebSockets', 'Chart.js'],
            date: '2023-03'
        },
        {
            id: '3',
            name: 'Resume Builder Application',
            description: 'Created a modern, professional resume builder with ATS optimization, multiple export formats, and real-time preview. Features intuitive UI and responsive design.',
            technologies: ['React', 'TypeScript', 'Vite', 'CSS3', 'html2canvas', 'jsPDF'],
            date: '2024-11'
        }
    ]
};