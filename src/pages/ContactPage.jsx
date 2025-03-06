import React, { useEffect } from 'react';
import TitleText from '../components/TitleText';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <TitleText text="Contact Us" />
                <div className="mt-8 max-w-4xl mx-auto">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="text-left">
                                <h3 className="text-xl font-semibold mb-4 text-[#4671AF]">Get in Touch</h3>
                                <p className="mb-4">Have questions about CAM or our programs? Feel free to reach out.</p>
                                <p className="mb-2"><strong>Email:</strong> cam@iiitnr.ac.in</p>
                                <p className="mb-2"><strong>Phone:</strong> +91-XXX-XXX-XXXX</p>
                                <p><strong>Address:</strong> IIIT-NR Campus, Naya Raipur, Chhattisgarh, India</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-left text-[#4671AF]">Contact Form</h3>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded"></textarea>
                                    </div>
                                    <button type="submit" className="bg-[#4671AF] text-white px-6 py-2 rounded hover:bg-[#365c8d] transition-colors">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
