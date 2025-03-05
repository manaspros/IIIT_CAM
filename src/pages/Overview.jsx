import React from 'react';
import TitleText from '../components/TitleText';

const Overview = () => {
    return (
        <div className='flex flex-col items-start' id="overview">
            <TitleText text="Overview" />
            <p className='text-left'>The Center for Applied Mathematics at IIIT-NR combines education and research opportunities in the application of Mathematics to engineering and societal problems. It promotes research and outreach activities in Mathematics and its application to various interdisciplinary areas such as Mathematical Modelling and Numerical Analysis, Financial Mathematics and Stochastic Calculus, Algebraic Coding Theory and Number Theory, etc., under the direction of national and international experts. The Center for Applied Mathematics strives to be recognized for excellence among academic institutions in India and abroad. The Center also aim to motivate and help the students to find relevant research and career opportunities in India and abroad.</p>
        </div>
    );
};

export default Overview;