
import React from 'react';
import Header from '../components/header';

import ProjectCard from '../components/projectcard';

import Footwear from '../assets/S_Sfootwear.png'; 
import StudyPlanner from '../assets/studyplanner.png';
import BookShelf from '../assets/bookshelf.png';

function ProjectsPage() {
  const projects = [
    {
      title: "Study Planner App",
      description: "A personalized atudy planner built with .NET Framework, featuring study scheduling, task managing and focus timing to support effective learning",
      tech: ["C#", "WinForms", ".NET Framework", "SQL"],
      liveLink: "https://www.youtube.com/watch?v=-RLZRdZslF4",
      githubLink: "https://github.com/ICT-Courses/application-development-ca1-Nikeshala12.git",
      image: StudyPlanner 
    },
    {
      title: "S&S Footwear Website",
      description: "A modern showcase website for a footwear brand, highlighting product with a responsive design and Firebase integration",
      tech: ["HTML", "CSS", "JavaScript", "Firebase", ],
      liveLink: "https://ss-footwear-promo-website.vercel.app/",
      githubLink: "https://github.com/Hansi-Umayangani/S-S-Footwear-Promo-Website.git",
      image: Footwear
    },
    {
      title: "",
      description: "An interactive bookshelf platform to search books with a simple and user-friendly interface",
      tech: ["React", "Node.js", "Bootstrap", "HTML", "CSS", "JS"],
      
      githubLink: "https://github.com/ICT-Courses/ict2233-ca-01-Nikeshala12.git",
      image: BookShelf
    },
    
  ];

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors min-h-screen pt-16">
        <section className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
          <div className="grid grid-cols-1 gap-8"> 
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                tech={project.tech} 
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                image={project.image}
              />
            ))}
          </div>
        </section>
      </div>
     
    </>
  );
}

export default ProjectsPage;