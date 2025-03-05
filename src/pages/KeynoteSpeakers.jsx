// src/pages/KeynoteSpeakers.jsx
import React from "react";
import { Carousel, Card } from "../components/apple-cards-carousel";
import TitleText from "../components/TitleText";
import data from "../data/keynoteSpeakers";

export default function KeynoteSpeakers() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-8">
      <TitleText text="Keynote Speakers" />
      <Carousel items={cards} />
    </div>
  );
}
