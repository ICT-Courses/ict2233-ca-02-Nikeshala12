import React from "react";
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.jpeg'

function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors min-h-screen pt-16 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 text-center md:text-left">

      
      {/* Text Content */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hello, my name is <br />
          <span className="text-blue-600 dark:text-blue-400">Nikeshala Kavindi</span>
        </h2>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400">
          I'm an Undergraduate Frontend Developer
        </h3>
        <p className="mt-6 text-lg md:text-xl font-light">
          An enthusiastic ICT Undergraduate with hands-on experience in building applications using C# and .NET Freamework, currently exploring web technologies like React.js and Tailwind CSS to create engaging and user-friendly solutions.
        </p>
        <Link
          to="/projects" // මෙතන projects page එකේ path එක දෙන්න
          className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          View My Work
        </Link>
      </div>
        

      {/* Profile Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="rounded-full border-4 border-white shadow-2xl w-full max-w-sm"
        />
      </div>

    </div>
  );
}

export default HomePage;
