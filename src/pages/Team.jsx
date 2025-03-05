import { useState } from "react";
import TitleText from "../components/TitleText";

const categories = ["Faculty", "PHD Students", "Developers"];
const profiles = {
  Faculty: [
    {
      name: "Dr. Ramakrishna Bandi",
      department: "Department of Mathematics",
      image: "/team/ramakrishna_bandi.jpg",
    },
    {
      name: "Dr. Suresh Kumar",
      department: "Department of Computer Science",
      image: "/team/suresh_kumar.jpg",
    },
    {
      name: "Dr. Priya Sharma",
      department: "Department of Electronics",
      image: "/team/priya_sharma.jpg",
    },
  ],
  "PHD Students": [
    {
      name: "Amit Verma",
      researchArea: "Artificial Intelligence",
      image: "/team/amit_verma.jpg",
    },
    {
      name: "Neha Gupta",
      researchArea: "Quantum Computing",
      image: "/team/neha_gupta.jpg",
    },
    {
      name: "Rajesh Kumar",
      researchArea: "Cybersecurity",
      image: "/team/rajesh_kumar.jpg",
    },
  ],
  Developers: [
    {
      name: "Atharva Suresh Bedekar",
      role: "Developer",
      image: "/team/rahul_sen.jpg",
    },
    {
      name: "Manas Chaudhary",
      role: "Developer",
      image: "/team/pooja_mehta.jpg",
    },
  ],
};

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
                selectedCategory === category
                    ? "bg-white shadow-md"
                    : "text-gray-600"
                }`}
                onClick={() => setSelectedCategory(category)}
            >
                {category}
            </div>
            ))}
        </div>
        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {profiles[selectedCategory].map((person, index) => (
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