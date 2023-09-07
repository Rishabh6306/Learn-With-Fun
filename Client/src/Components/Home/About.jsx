import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen overflow-hidden flex justify-center items-center">
            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600">Our mission is to make learning an enjoyable and interactive experience for everyone, creating a platform that embodies the fun side of education. Join us in our quest for delightful education!</p>
            </div>

            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-600">We are a Independent creators and passionate developers shaping websites. Our dedication empowers learners of all ages, nurturing a love for knowledge, growth, innovation, and excellence. </p>
            </div>

            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
                <p className="text-gray-600">Learn with Fun is not just a website it's a hub for knowledge seekers. We offer a wide range of features, from interactive Documentation Quiz, Notes, Games to a virtual Library.</p>
            </div>

            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600">Our vision is to create an online community where knowledge is easily accessible and enjoyable to acquire. We aim to continuously improve and expand our platform to cater to diverse learning needs.</p>
            </div>

            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-600">We value your feedback and suggestions. If you have any questions, concerns, or ideas you'd like to share with us, please don't hesitate to reach out to me. let's make learning better <Link to="/contact" className='text-orange-400'>Contact</Link></p>
            </div>

            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
                <p className="text-gray-600">Interested in contributing to our mission? We're always on the lookout for talented individuals who share our passion for education.For shaping the future of learning <Link to="https://www.linkedin.com/in/rishabh6306/" className='text-orange-400' target='blank'> Join Us</Link></p>
            </div>

            {/* New Boxes */}
            <div className="flex flex-col items-center rounded-full border-2 border-gray-300 bg-white p-10 w-3/12 h-80">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Goals</h2>
                <p className="text-gray-600">Learn about the goals and objectives that drive us forward in our mission to provide enjoyable, interactive learning experiences, fostering a love for knowledge and growth.</p>
            </div>
        </div>
    );
};

export default About;