// src/pages/KeynoteSpeakers.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel, Card } from "../components/apple-cards-carousel";
import TitleText from "../components/TitleText";
import data from "../data/keynoteSpeakers.json";

// Enhanced Card component specific for keynote speakers
const SpeakerCard = ({ card, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card card={card} index={index} />

      {/* Speaker info overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-left">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/80 text-white rounded-full mb-2 backdrop-blur-sm">
          {card.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
        <p className="text-sm text-white/90 mb-1">{card.position}</p>
        <p className="text-sm text-white/80 mb-3">{card.affiliation}</p>

        {card.expertise && (
          <div className="flex items-center mb-4">
            <span className="text-xs font-medium text-white/70 bg-white/20 px-2 py-1 rounded backdrop-blur-sm">
              {card.expertise}
            </span>
          </div>
        )}

        {card.profileLink && (
          <div className="mt-auto">
            <Link
              to={card.profileLink}
              className="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded backdrop-blur-sm transition-colors duration-300"
            >
              View Profile
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function KeynoteSpeakers() {
  const cards = data.map((card, index) => (
    <SpeakerCard key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-12 pb-16" id="keynote-speakers">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TitleText text="Keynote Speakers" />
        <p className="max-w-2xl mx-auto text-gray-600 mt-4 mb-10">
          Join us to hear from distinguished experts in the field of applied mathematics
          who will share their insights and latest research findings.
        </p>
      </motion.div>

      <Carousel items={cards} />

      <div className="mt-12 text-center">
        <Link
          to="/keynote-speakers"
          className="inline-block bg-primary-100 text-primary-700 border border-primary-200 px-6 py-2 rounded-md hover:bg-primary-200 transition-colors"
        >
          View All Speakers
        </Link>
      </div>
    </div>
  );
}
