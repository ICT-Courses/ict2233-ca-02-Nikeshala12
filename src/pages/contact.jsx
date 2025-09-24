
import React from 'react';
import ContactForm from '../components/contactform'; 

function ContactPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen pt-16 pb-12"> 
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> 
          
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Send me a message</h2>
            <ContactForm />
          </div>

         
          <div className="space-y-8"> 
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                If you'd like to chat about ideas , work together on something , or just say hi, fell free to reach out. I usually reply pretty quickly.
              </p>
              
              <div className="space-y-4">
               
                <div className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <span className="text-3xl text-blue-600 dark:text-blue-400 mr-4"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a href="nikeshalakavindi2003@gmiil.com" className="text-gray-600 dark:text-gray-400 hover:underline">nikeshalakavindi2003@gmiil.com</a>
                  </div>
                </div>
               
                <div className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <span className="text-3xl text-blue-600 dark:text-blue-400 mr-4">
                    <i className="fab fa-linkedin"></i> 
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/nikeshala-kavindi-39419032a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:underline">https://www.linkedin.com/in/nikeshala-kavindi-39419032a/</a>
                  </div>
                </div>
                
                <div className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <span className="text-3xl text-gray-800 dark:text-gray-200 mr-4">
                    <i className="fab fa-github"></i> 
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                    <a href="https://github.com/Nikeshala12" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:underline">https://github.com/Nikeshala12</a>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-4">
                <a href="nikeshalakavindi2003@gmail.com" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="mr-2"></span> Email Me
                </a>
                <a href="https://www.linkedin.com/in/nikeshala-kavindi-39419032a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="mr-2 fab fa-linkedin"></span> LinkedIn
                </a>
                <a href="https://github.com/Nikeshala12" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  <span className="mr-2 fab fa-github"></span> GitHub
                </a>
              </div>
            </div>

            
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 shadow-lg border-l-4 border-blue-600 dark:border-blue-400">
              <div className="flex items-center">
                <span className="text-green-500 text-xl mr-3"></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Available for Work</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    I'm currently available for freelance projects and full-time opportunities. Let's discuss your next project!
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;