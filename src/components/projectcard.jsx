// src/components/projectcard.jsx
import React from 'react';

// Props වලට 'image', 'liveLink', සහ 'githubLink' එකතු කරන්න
function ProjectCard({ title, description, tech, liveLink, githubLink, image }) {
  return (
    // Card එකේ layout එක: Large screens වලදී image එකයි text එකයි දෙපැත්තට එන විදිහට හදලා තියෙනවා
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      {/* 1. Project Image (වම් පැත්ත) */}
      {image && ( // image prop එකක් තිබේ නම් පමණක් image එක පෙන්වන්න
        <div className="md:w-1/3 w-full h-48 md:h-auto"> 
          <img
            src={image} // මේකෙන් තමයි image එක පෙන්වන්නේ
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 2. Content (දකුණු පැත්ත) */}
      <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-4">{description}</p>
        </div>
        
        {/* Tech Stack සහ Links */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((tag, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Live Demo Link (View Project button එක) */}
            {liveLink && ( // liveLink එකක් තිබේ නම් පමණක් button එක පෙන්වන්න
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Live Demo
              </a>
            )}
            
            {/* GitHub Link */}
            {githubLink && ( // githubLink එකක් තිබේ නම් පමණක් button එක පෙන්වන්න
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;