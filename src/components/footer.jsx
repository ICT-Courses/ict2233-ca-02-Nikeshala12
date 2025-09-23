import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;