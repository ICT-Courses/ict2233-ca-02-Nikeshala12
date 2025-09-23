import React from 'react';
import { Link } from 'react-router-dom';
import DarkToggle from './darktoggle';

function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Nikeshala</h1>
        <ul className="flex items-center space-x-6 text-gray-700 dark:text-gray-200">
          <li><Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">Contact</Link></li>
          <li><DarkToggle /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;