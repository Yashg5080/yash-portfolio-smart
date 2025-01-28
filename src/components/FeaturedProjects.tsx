import React from 'react';
import ProjectCard from './ProjectCard';

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  stars: number;
  forks: number;
  lastUpdated: string;
}

const projects: Omit<ProjectCardProps, 'stars' | 'forks' | 'lastUpdated'>[] = [

  {
    title: "Portfolio (College Project)",
    description: "A responsive personal website built to showcase my portfolio, featuring interactive design and optimized for seamless navigation across devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Yashg5080/Yash-Gupta",
    liveLink: "https://yashg5080.github.io/Yash-Gupta"
  },
  {
    title: "Flappy Bird Game",
    description: "A recreation of the classic Flappy Bird game using Python and Pygame. Features include player movement, obstacle creation, collision detection, and a scoring mechanism for an engaging user experience.",
    technologies: ["Python", "Pygame"],
    githubLink: "https://github.com/Yashg5080/Flappy-Bird-Game",
    liveLink: ""
  },
];

const ProjectsDisplay: React.FC = () => {
  return (
    <div className="rounded-lg shadow-md md:col-span-2 lg:col-span-3">
      <div className="p-4">
        <h2 className="text-xl font-bold">Featured Projects</h2>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project} 
            stars={0} 
            forks={0} 
            lastUpdated={new Date().toISOString()}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsDisplay;