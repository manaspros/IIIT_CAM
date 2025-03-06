import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import TitleText from '../components/TitleText';
import publicationsData from '../data/publications.json';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('year-desc');

  // Process publications data
  const years = [...new Set(publicationsData.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [...new Set(publicationsData.map(pub => pub.type))];

  // Filter and sort publications
  const filteredPublications = publicationsData
    .filter(pub => {
      const searchMatch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.conference?.toLowerCase().includes(searchTerm.toLowerCase());

      const filterMatch = filter === 'all' || pub.type === filter || pub.year.toString() === filter;

      return searchMatch && filterMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div id="conference-publications" className="w-full py-10">
      <TitleText text="Conference Publications" />

      <motion.div
        className="max-w-6xl mx-auto mt-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search publications..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length > 0 ? (
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id || index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                        {publication.title}
                      </h3>
                      <p className="text-primary-600 text-left mb-2">
                        {publication.authors}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center text-sm text-gray-600 mb-3">
                        {publication.journal && (
                          <span className="inline-flex items-center">
                            <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            {publication.journal}
                          </span>
                        )}
                        {publication.conference && (
                          <span className="inline-flex items-center">
                            <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {publication.conference}
                          </span>
                        )}
                        {publication.volume && (
                          <span>Vol. {publication.volume}</span>
                        )}
                        {publication.pages && (
                          <span>pp. {publication.pages}</span>
                        )}
                        {publication.doi && (
                          <span className="inline-flex items-center">
                            <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                            </svg>
                            DOI: {publication.doi}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex space-x-2 mb-2">
                        <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                          {publication.type}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {publication.year}
                        </span>
                      </div>

                      {publication.url && (
                        <a
                          href={publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center transition-colors"
                        >
                          View Publication
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {publication.abstract && (
                    <div className="mt-4 text-left">
                      <button
                        className="text-sm text-gray-500 hover:text-primary-600 flex items-center"
                        onClick={() => {
                          // Toggle abstract visibility
                          // This would require state management for each publication
                          // For simplicity, we're just showing the behavior
                          alert("This would expand/collapse the abstract");
                        }}
                      >
                        Abstract
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Hidden by default, would be toggled */}
                      <div className="hidden mt-2 text-sm text-gray-600">
                        {publication.abstract}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No publications match your search criteria.</p>
          </div>
        )}

        {/* Pagination - would be implemented with actual pagination logic */}
        {filteredPublications.length > 10 && (
          <div className="flex justify-center mt-10">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-primary-600 text-white">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                3
              </button>
              <span className="px-3 py-1">...</span>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Next
              </button>
            </nav>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Publications;
