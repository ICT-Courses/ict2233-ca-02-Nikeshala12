// src/components/ContactForm.jsx
import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! I will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Name *</label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
          // Dark Mode Classes: bg-gray-100 dark:bg-gray-700
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3" 
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Email *</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          // Dark Mode Classes: bg-gray-100 dark:bg-gray-700
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3" 
        />
      </div>

      {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Subject *</label>
        <input 
          type="text" 
          name="subject" 
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          // Dark Mode Classes: bg-gray-100 dark:bg-gray-700
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3" 
        />
      </div>

      {/* Message Input */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Message *</label>
        <textarea 
          name="message" 
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or just say hello!"
          required
          // Dark Mode Classes: bg-gray-100 dark:bg-gray-700
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-3 resize-y"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button 
          type="submit" 
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;