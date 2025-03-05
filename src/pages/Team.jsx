import { useState } from "react";
import TitleText from "../components/TitleText";
import profiles from "../data/team.json";

const categories = ["Faculty", "PHD Students", "Developers"];

export default function Profiles() {
  const [selectedCategory, setSelectedCategory] = useState("Faculty");

  return (
    <div className="flex flex-col items-start mt-8">
      <TitleText text="Team" />
      <div className="flex flex-col items-center mx-auto mt-5">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-full p-2 space-x-4">
          {categories.map((category) => (
            <div
              key={category}
              className={`sm:px-6 py-3 w-24 sm:w-64 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category ? "bg-white shadow-md" : "text-gray-600"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        {/* Profile Cards */}
        <div className="flex flex-wrap gap-6 mt-12 justify-center">
          {profiles[
            selectedCategory.toLocaleLowerCase().replace(" ", "-")
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden p-4 text-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-600 text-sm">
                {person.department || person.researchArea || person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}