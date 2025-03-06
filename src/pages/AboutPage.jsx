import React, { useEffect } from 'react';
import TitleText from '../components/TitleText';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <TitleText text="About CAM" />
                <div className="mt-8 max-w-4xl mx-auto text-left">
                    <p className="text-lg mb-6">
                        The Center for Applied Mathematics (CAM) at IIIT-NR is dedicated to advancing mathematical research
                        and education with practical applications to solve real-world problems.
                    </p>
                    <p className="text-lg mb-6">
                        Our mission is to bridge the gap between theoretical mathematics and practical applications,
                        fostering interdisciplinary collaboration and innovation.
                    </p>
                    {/* Add more content as needed */}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
