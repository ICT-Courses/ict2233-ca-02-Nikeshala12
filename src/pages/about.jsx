import React from 'react';
import Header from '../components/header';


function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors min-h-screen pt-16">
        <section className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4">My Story</h2>
            <p className="text-lg leading-relaxed">
               I am an enthusiastic and dedicated undergraduate , passionate about both software and web development. My journey began with C# and .NET Framework, where i built my first desktop applications, and later expanded into modern web technologies like React.js and Tailwind CSS. Ilove creating solutions that are not only functional but also user-friendly and visually engaging.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-3xl font-semibold mb-4">Education</h2>
            <p className="text-lg leading-relaxed font-bold">University of Sri Jayewardenepura</p>
            <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400">B.Sc. (Hons) in Information and Commiunication Technology</p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-500">2024-present</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl text-blue-500 dark:text-blue-400">
                  <i className="fab fa-react"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">React.js</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-cyan-500 dark:text-cyan-400">
                  <i className="fas fa-wind"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-yellow-500 dark:text-yellow-400">
                  <i className="fab fa-js-square"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-purple-600 dark-text-purple-400">
                  <i className="fas fa-cogs"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">C#</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-green-500 dark-text-green-400">
                  <i className="fab fa-node-js"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-yellow-600 dark-text-yellow-400">
                  <i className="fab fa-python"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">Python</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-teal-600 dark-text-teal-400">
                  <i className="fas fa-terminal"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">.NET</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-orange-600 dark-text-orange-400">
                  <i className="fab fa-html5"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-blue-700 dark-text-blue-500">
                  <i className="fab fa-css3"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-indigo-700 dark-text-indigo-500">
                  <i className="fab fa-bootstrap"></i>
                </span>
                <p className="mt-2 text-lg font-semibold">Bootstrap</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
}

export default AboutPage;