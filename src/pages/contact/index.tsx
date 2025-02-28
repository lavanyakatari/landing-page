import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_1oylkfn', // EmailJS service ID
        'template_s2b2fvt', // EmailJS template ID
        e.target as HTMLFormElement, // The form element
        'JNrb0w2xoure8cDNU' // Your EmailJS user ID
      )
      .then(
        (result: { text: string; status: number }) => {
          console.log(result.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error: { text: string; status: number }) => {
          console.log(error.text);
          setStatus('Failed to send message.');
        }
      );
      
  };

  return (
    <div className="min-h-screen bg-blue-900  flex justify-center items-center bg-gray-50 p-6">
      <div className="w-full max-w-md p-8 bg-gray-300 bg-opacity-40 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">Contact Me For Any Requriment</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-200 font-medium mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-2">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;



