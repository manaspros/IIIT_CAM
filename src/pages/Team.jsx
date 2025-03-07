import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleText from "../components/TitleText";
import profiles from "../data/team.json";

const categories = ["Faculty", "PHD Students", "Developers"];

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState("Faculty");

  return (
    <div className="flex flex-col items-start mt-8 py-10" id="team">
      <TitleText text="Team" />

      <motion.div
        className="flex flex-col items-center w-full mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-full p-2 space-x-2">
          {categories.map((category) => (
            <motion.div
              key={category}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${selectedCategory === category
                ? "bg-white text-primary-600 shadow-md"
                : "text-gray-600 hover:bg-gray-200/50"
                }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.div>
          ))}
        </div>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-10 w-full px-4">
          {profiles[
            selectedCategory.toLowerCase().replace(" ", "-")
          ].map((person, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-60 overflow-hidden">
                {/* Profile image */}
                <img
                  src={person.image || "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop"}
                  alt={person.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {person.social && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                      {person.social.linkedin && (
                        <a
                          href={person.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {person.social?.github && (
                        <a
                          href={person.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{person.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">
                  {person.role || person.department || person.researchArea}
                </p>

                {person.bio && (
                  <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                    {person.bio}
                  </p>
                )}

                {/* Tags/Expertise */}
                {person.expertise && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {person.expertise.slice(0, 2).map((tag, i) => (
                      <span key={i} className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {person.expertise.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{person.expertise.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {profiles[selectedCategory.toLowerCase().replace(" ", "-")].length === 0 && (
          <div className="w-full py-12 text-center">
            <p className="text-gray-500">No team members found in this category.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}