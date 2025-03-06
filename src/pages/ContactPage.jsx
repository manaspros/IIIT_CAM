import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleText from '../components/TitleText';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission
        console.log('Form submitted:', formData);

        // Show success message and redirect
        alert('Message sent successfully! We will get back to you soon.');
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <TitleText text="Contact Us" />
                <div className="mt-8 max-w-4xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="text-left">
                                <h3 className="text-xl font-semibold mb-4 text-primary-500">Get in Touch</h3>
                                <p className="mb-4">Have questions about CAM or our programs? Feel free to reach out.</p>
                                <p className="mb-2"><strong>Email:</strong> cam@iiitnr.ac.in</p>
                                <p className="mb-2"><strong>Phone:</strong> +91-XXX-XXX-XXXX</p>
                                <p><strong>Address:</strong> IIIT-NR Campus, Naya Raipur, Chhattisgarh, India</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-left text-primary-500">Contact Form</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-primary-100 text-primary-700 border border-primary-200 px-6 py-2 rounded-md font-medium hover:bg-primary-200 hover:text-primary-800 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactPage;
