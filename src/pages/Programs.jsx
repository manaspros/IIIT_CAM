import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TitleText from "../components/TitleText";
import events from "../data/programs";

export default function Programs() {
  return (
    <div className="flex flex-col items-start py-8" id="program">
      <TitleText text="Programs" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              {/* Image with overlay */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                    {event.category || "Event"}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 flex flex-col items-start">
              <div className="flex items-center mb-3">
                <svg className="w-4 h-4 text-primary-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <p className="text-sm text-gray-600 font-medium">{event.date}</p>
              </div>

              <h2 className="text-xl font-bold text-gray-800 text-left line-clamp-2 h-auto mb-2 hover:text-primary-600 transition-colors">
                {event.title}
              </h2>

              <p className="text-gray-600 text-left line-clamp-3 mb-4 flex-grow">
                {event.description}
              </p>

              <div className="w-full flex justify-between items-center pt-3 border-t border-gray-100">
                {event.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                )}

                <Link
                  to={event.link || `/program/${event.id}`}
                  className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors flex items-center"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-10">
        <Link
          to="/special-sessions"
          className="btn-3d bg-primary-100 text-primary-700 border border-primary-200 px-6 py-2 rounded-md font-medium hover:bg-primary-200 transition-colors inline-flex items-center"
        >
          View All Programs
          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}