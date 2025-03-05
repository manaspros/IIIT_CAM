import React from 'react';
import TitleText from '../components/TitleText';

const dummyCards = [
  { id: 1, title: "ICMS Project One", year: 2021, link: "/view-more/1" },
  { id: 2, title: "ICMS Project Two", year: 2022, link: "/view-more/2" },
  { id: 3, title: "ICMS Project Three", year: 2023, link: "/view-more/3" },
];

const PrevICMS = () => {
  return (
    <div className='flex flex-col items-start' id="overview">
        <TitleText text="Previous ICMS" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {dummyCards.map(card => (
            <div key={card.id} className="bg-white shadow-md rounded-lg p-6 text-left w-full md:max-w-lg">
            <h2 className="text-xl font-bold mb-1">{card.title}</h2>
            <p className="text-gray-600 mb-2">{card.year}</p>
            <div className="flex justify-end">
              <a href={card.link} className="text-blue-500 hover:underline">
                View More &rarr;
              </a>
            </div>
          </div>
          
            ))}
        </div>
    </div>
  );
};

export default PrevICMS;
