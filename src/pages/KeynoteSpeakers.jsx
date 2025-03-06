// src/pages/KeynoteSpeakers.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card } from "../components/apple-cards-carousel";
import TitleText from "../components/TitleText";
import data from "../data/keynoteSpeakers";

// Enhance the Card component with Link if needed
const EnhancedCard = ({ card, index }) => {
  return (
    <div className="relative">
      <Card card={card} index={index} />
      {card.profileLink && (
        <div className="absolute bottom-4 right-4">
          <Link
            to={card.profileLink}
            className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm hover:bg-primary-50 transition-colors"
          >
            Full Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default function KeynoteSpeakers() {
  const cards = data.map((card, index) => (
    <EnhancedCard key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-8" id="keynote-speakers">
      <TitleText text="Keynote Speakers" />
      <Carousel items={cards} />
      <div className="mt-8 text-center">
        <Link
          to="/keynote-speakers"
          className="inline-block bg-primary-100 text-primary-700 px-6 py-2 rounded-md hover:bg-primary-200 transition-colors"
        >
          View All Speakers
        </Link>
      </div>
    </div>
  );
}
