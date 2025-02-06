import React from 'react';
import resumeData from '../data/resumeDtata.json';
import heroImage from "@/assets/Yash.jpeg";
import Image from 'next/image';

// Interfaces
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website: string;
  summary: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Language {
  language: string;
  proficiency: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}


const Header: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => (
  <header className="mb-2 flex flex-col md:flex-row items-center p-6 border-b-2 border-gray-200 dark:border-gray-700">
    <div className="md:mr-8 mb-4 md:mb-0">
      <div className="w-40 h-40 relative">
        <Image
          src={heroImage || "/default-profile.jpg"}
          alt={personalInfo.name}
          layout="fill"
          className="rounded-full border-4 border-gray-300 dark:border-gray-600 object-cover"
        />
      </div>
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">{personalInfo.name}</h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-4">{personalInfo.title}</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          {personalInfo.email}
        </a>
        <a href={personalInfo.linkedin} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5Zm-11 19h-3v-10h3v10Zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75Zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.28c.58-.94 1.64-1.28 2.5-1.28 2.21 0 4 1.79 4 4v6Z"/>
        </svg>
          {personalInfo.linkedin}
        </a>
        <a href={personalInfo.github} className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.216.68-.48 0-.237-.01-.865-.014-1.698-2.782.604-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.46-1.11-1.46-.906-.62.07-.608.07-.608 1.002.07 1.53 1.032 1.53 1.032.89 1.522 2.34 1.083 2.91.828.09-.646.35-1.083.636-1.332-2.22-.252-4.555-1.112-4.555-4.945 0-1.092.39-1.984 1.03-2.682-.104-.252-.448-1.268.098-2.64 0 0 .84-.268 2.75 1.024A9.57 9.57 0 0112 6.84c.85.004 1.71.112 2.51.33 1.91-1.292 2.75-1.024 2.75-1.024.546 1.372.202 2.388.098 2.64.64.698 1.03 1.59 1.03 2.682 0 3.84-2.34 4.69-4.57 4.936.36.31.68.92.68 1.856 0 1.34-.012 2.42-.012 2.75 0 .268.18.576.688.48A10.015 10.015 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
          {personalInfo.github}
        </a>
      </div>
    </div>
  </header>
);
// Experience Component
const Experience: React.FC<{ experience: ExperienceItem[] }> = ({ experience }) => (
  <section className="mb-2 p-6 border-b-2 border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4 pb-2 text-gray-900 dark:text-gray-100">Experience</h2>
    {experience.map((item, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.position}</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">{item.company}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.startDate} - {item.endDate}</p>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    ))}
  </section>
);

// Education Component
const Education: React.FC<{ education: EducationItem[] }> = ({ education }) => (
  <section className="mb-2 p-6 border-b-2 border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4 pb-2 text-gray-900 dark:text-gray-100">Education</h2>
    {education.map((item, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.degree}</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">{item.institution}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.startDate} - {item.endDate}</p>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    ))}
  </section>
);

// Skills Component
const Skills: React.FC<{ skills: string[] }> = ({ skills }) => (
  <section className="mb-2 p-6 border-b-2 border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4 pb-2 text-gray-900 dark:text-gray-100">Skills</h2>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <span key={index} className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-md font-medium">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

// Languages Component
const Languages: React.FC<{ languages: Language[] }> = ({ languages }) => (
  <section className="mb-2 p-6 border-b-2 border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4 pb-2 text-gray-900 dark:text-gray-100">Languages</h2>
    <ul className="space-y-2">
      {languages.map((lang, index) => (
        <li key={index} className="flex items-center justify-between">
          <span className="font-medium text-gray-800 dark:text-gray-200">{lang.language}</span>
          <span className="text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-1 rounded-full text-sm">
            {lang.proficiency}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

// Projects Component
const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section className="mb-2 p-6 border-b-2 border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-4 pb-2 text-gray-900 dark:text-gray-100">Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-semibold">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
            {project.name}
          </a>
        </h3>
        <p className="mb-2 text-gray-700 dark:text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </section>
);

// Interests Component
const Interests: React.FC<{ interests: string[] }> = ({ interests }) => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4 pb-2 text-gray-900 dark:text-gray-100">Interests</h2>
    <ul className="grid grid-cols-2 gap-2">
      {interests.map((interest, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">{interest}</span>
        </li>
      ))}
    </ul>
  </section>
);

// Main Resume Component
const Resume: React.FC = () => {
  return (
    <div id="resume" className="mx-auto my-10 p-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 print:bg-white print:text-black">
      <Header personalInfo={resumeData.personalInfo} />
      
      <section className="mb-2 print:mb-4 p-6 border-b-2 border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 pb-2 print:text-xl text-gray-900 dark:text-gray-100">Summary</h2>
        <p className="print:text-gray-800 text-gray-700 dark:text-gray-300">{resumeData.personalInfo.summary}</p>
      </section>

      <Experience experience={resumeData.experience} />
      <Education education={resumeData.education} />
      <Projects projects={resumeData.projects} />
      
      <div className="grid md:grid-cols-2 gap-8 print:gap-4">
        <Skills skills={resumeData.skills} />
        <div>
          <Languages languages={resumeData.languages} />
          <Interests interests={resumeData.interests} />
        </div>
      </div>
    </div>
  );
};

export default Resume;