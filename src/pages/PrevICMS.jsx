import React from 'react';
import { Link } from 'react-router-dom';
import TitleText from '../components/TitleText';
import dummyCards from '../data/prevICMS';

const PrevICMS = () => {
  return (
    <div className='flex flex-col items-start pt-10 pb-16' id="previous-icms-links">
      <TitleText text="Previous ICMS" />
      <div className="container mx-auto mt-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {dummyCards.map(card => (
            <div key={card.id} className="bg-white shadow-lg rounded-lg p-8 text-left w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-3 text-primary-500">{card.title}</h2>
              <p className="text-gray-600 mb-4 text-lg">{card.year}</p>
              <div className="flex justify-end mt-6">
                {card.isExternal ? (
                  <a
                    href={card.link}
                    className="text-primary-500 hover:text-primary-700 font-medium flex items-center transition-all duration-300 hover:translate-x-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    to={card.link}
                    className="text-primary-500 hover:text-primary-700 font-medium flex items-center transition-all duration-300 hover:translate-x-1"
                  >
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrevICMS;
