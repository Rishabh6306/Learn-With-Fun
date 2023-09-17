import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

function ContactForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to track if the video is loaded successfully
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to your Node.js backend
      const response = await axios.post('http://localhost:3001/api/contact', formData);
      // Display a success toast message
      toast.success("Form submitted successfully. We'll contact you soon.");
      console.log(response.data);
      // Clear the form data after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      // Display an error toast message if there's an issue with submission
      toast.error('Error submitting form');
    }
  };

  // Use useEffect to check if the video loads successfully
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('canplaythrough', () => {
        setVideoLoaded(true);
      });
    }
  }, []);

  return (
    <div className={`flex max-w-screen-xl font-[Courgette] mx-auto mt-8 p-4 relative justify-around ${!videoLoaded ? 'bg-blue-500' : ''}`}>
      {/* Video background */}
      <video autoPlay muted loop className="fixed top-0 left-0 min-w-full min-h-[100vh] z-[-1] object-cover">
        <source src="./src/Components/Contact/assests/bg-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ToastContainer />
      {/* Contact information section */}
      <div className='text-white mt-8 hidden md:block w-1/2'>
        <h1 className="font-[Courgette] text-5xl my-5 mt text-[aqua] font-bold text-center">Get In Touch</h1>
        <p className='leading-tighter text-xl'>We are eager to discuss your needs and answer any questions you may have. Enter your details, and we'll get back to you shortly.</p>
        <p className='text-center my-5 text-xl'>Hope everyone feels delighted!</p>
        <div className='flex space-x-4 text-3xl my-5 justify-center'>
          {/* Social media icons */}
          <Link to="https://www.linkedin.com/in/rishabh6306/" target='blank' className='text-blue-600'><FaLinkedin /></Link>
          <Link to="https://github.com/Rishabh6306/" target='blank' className=''><FaGithub /></Link>
          <Link to="https://www.instagram.com/rishabhsrivastava723/" target='blank' className='text-red-600'><FaInstagram /></Link>
          <Link to="https://www.facebook.com/profile.php?id=100092759361139" target='blank' className='text-blue-700'><FaFacebook /></Link>
        </div>
      </div>
      {/* Contact form */}
      <form className="relative z-10 w-96 bg-[url('./src/Components/Contact/assests/imge-bg.jpg')] bg-cover rounded-xl p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <h1 className="font-[Courgette] text-5xl my-5 block md:hidden mt text-[aqua] font-bold text-center">Get In Touch</h1>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete='name'
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Email input */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Subject input */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete='subject'
            value={formData.subject}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* Message input */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;