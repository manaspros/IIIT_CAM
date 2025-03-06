import React from 'react';
import HeroSection from './HeroSection';
import Overview from './Overview';
import PrevICMS from './PrevICMS';
// Import other page sections as needed

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <div className="container mx-auto px-4 py-10">
                <Overview />
                {/* Add other sections here */}
                <PrevICMS />
            </div>
        </div>
    );
};

export default Home;
