import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import TitleText from '../components/TitleText';
import Timeline from '../components/timeline';

// Sample special session data with different years
const allSessions = {
    "2023": [
        {
            id: 1,
            title: "Numerical Methods for Differential Equations",
            date: "2023-12-15",
            time: "10:00 - 12:30",
            organizers: "Dr. Rajesh Kumar & Dr. Sunita Sharma",
            description: "This session focuses on advanced numerical techniques for solving partial differential equations with applications in computational fluid dynamics and climate modeling.",
            venue: "Lecture Hall 1",
            speakers: [
                "Prof. Amit Verma, IIT Delhi",
                "Dr. Priya Gupta, IISC Bangalore",
                "Prof. Michael Chen, MIT (Virtual)"
            ]
        },
        {
            id: 2,
            title: "Machine Learning for Mathematical Optimization",
            date: "2023-12-15",
            time: "14:00 - 16:30",
            organizers: "Dr. Neha Patil & Dr. Rajiv Mishra",
            description: "Exploring the intersection of machine learning algorithms and mathematical optimization techniques with applications in data science and operations research.",
            venue: "Seminar Hall 3",
            speakers: [
                "Dr. Anand Kulkarni, Microsoft Research",
                "Prof. Lisa Zhang, University of Toronto",
                "Dr. Sanjay Mehrotra, Northwestern University"
            ]
        },
        {
            id: 3,
            title: "Algebraic Coding Theory and Cryptography",
            date: "2023-12-16",
            time: "09:30 - 12:00",
            organizers: "Prof. Ravi Shankar & Dr. Meena Agarwal",
            description: "This session covers recent advances in algebraic coding theory and its applications in modern cryptographic systems, including post-quantum cryptography.",
            venue: "Conference Hall A",
            speakers: [
                "Prof. Sanjeev Kumar, IIT Bombay",
                "Dr. Anjali Singh, ISI Kolkata",
                "Prof. Richard Thompson, ETH Zurich"
            ]
        },
        {
            id: 4,
            title: "Financial Mathematics and Risk Analysis",
            date: "2023-12-16",
            time: "14:30 - 17:00",
            organizers: "Dr. Vikram Nair & Dr. Priya Deshmukh",
            description: "Exploring mathematical models for financial markets, risk assessment, and portfolio optimization in the context of modern economic challenges.",
            venue: "Lecture Hall 2",
            speakers: [
                "Prof. Ramesh Jha, Indian School of Business",
                "Dr. Sarah Chen, London School of Economics",
                "Prof. Rahul Varma, NYU Stern"
            ]
        }
    ],
    "2024": [
        {
            id: 5,
            title: "Quantum Computing and Algorithms",
            date: "2024-11-10",
            time: "09:30 - 12:00",
            organizers: "Dr. Lakshmi Narayan & Dr. Alex Wong",
            description: "Exploring quantum algorithms and their applications in solving complex mathematical problems that are intractable with classical computers.",
            venue: "Quantum Computing Lab",
            speakers: [
                "Dr. Rakesh Sharma, Microsoft Quantum",
                "Prof. Jane Chen, University of California",
                "Dr. David Clark, IBM Research"
            ]
        },
        {
            id: 6,
            title: "Topological Data Analysis",
            date: "2024-11-10",
            time: "14:00 - 16:30",
            organizers: "Prof. Ananya Roy & Dr. William Johnson",
            description: "Applications of algebraic topology to extract insights from complex high-dimensional data sets across various domains.",
            venue: "Data Science Center",
            speakers: [
                "Prof. Sanjay Mukherjee, Stanford University",
                "Dr. Emily Zhang, Google Research",
                "Prof. Robert Patel, University of Michigan"
            ]
        }
    ],
    "2025": [
        {
            id: 7,
            title: "Mathematical Biology and Epidemiology",
            date: "2025-10-05",
            time: "11:00 - 13:30",
            organizers: "Prof. Nikhil Mehta & Dr. Sarah Thompson",
            description: "Mathematical modeling of biological systems and disease spread, with focus on predictive models for epidemic control.",
            venue: "Bioscience Auditorium",
            speakers: [
                "Dr. Meera Joshi, WHO Research Division",
                "Prof. Thomas Wilson, Cambridge University",
                "Dr. Anita Desai, National Institute of Epidemiology"
            ]
        },
        {
            id: 8,
            title: "AI and Mathematical Reasoning",
            date: "2025-10-06",
            time: "10:00 - 12:30",
            organizers: "Dr. Vikram Singh & Prof. Lisa Wong",
            description: "Exploring the intersection of artificial intelligence and mathematical reasoning, including automated theorem proving and AI-assisted mathematics.",
            venue: "AI Research Center",
            speakers: [
                "Prof. Rajiv Malhotra, DeepMind",
                "Dr. Jennifer Lee, MIT CSAIL",
                "Prof. Alan Turner, Oxford University"
            ]
        }
    ]
};

// Format the special sessions data to match Timeline component requirements
const formatTimelineData = (sessions) => {
    return sessions.map(session => ({
        title: session.title,
        description: session.description,
        date: `${new Date(session.date).toLocaleDateString()} | ${session.time}`,
        content: (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-1"><strong>Organizers:</strong> {session.organizers}</p>
                        <p className="text-sm text-gray-600"><strong>Location:</strong> {session.venue}</p>
                    </div>
                    <div className="bg-blue-50 px-4 py-2 rounded-md inline-block">
                        <p className="text-sm text-blue-800 font-medium">{session.time}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Speakers:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {session.speakers.map((speaker, i) => (
                            <li key={i} className="pl-2">{speaker}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 text-right">
                    <button className="text-[#21272f] hover:text-blue-800 font-medium flex items-center text-sm ml-auto transition-all">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        ),
    }));
};

const SpecialSessionsPage = () => {
    // State for selected year
    const [selectedYear, setSelectedYear] = useState("2023");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const years = Object.keys(allSessions).sort().reverse(); // Sort years in descending order

    // Format the sessions data for the selected year
    const timelineData = formatTimelineData(allSessions[selectedYear] || []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header section with background */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('/patterns/circuit-board.svg')]"></div>
                <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Sessions</h1>
                        <p className="text-xl max-w-3xl mx-auto opacity-90">
                            Focused discussions on emerging topics in applied mathematics led by experts in the field
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-12"
                    >
                        <TitleText text="Overview" />
                        <p className="text-left text-lg mt-6">
                            Our special sessions bring together researchers, academicians, and industry experts to discuss
                            and explore specialized topics in mathematical sciences. These sessions offer unique opportunities
                            for in-depth exploration of emerging trends, methodologies, and applications of mathematics
                            in various fields. Each session features invited talks, panel discussions, and interactive
                            Q&A segments designed to foster collaboration and knowledge exchange.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                            <TitleText text="Schedule" />

                            {/* Year selector dropdown with lighter colors */}
                            <div className="relative">
                                <div className="text-left ml-auto">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center justify-between w-40 px-4 py-2 bg-white-50/70 border border-blue-100 rounded-md shadow-sm text-[#ffffff] hover:bg-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                                    >
                                        <span className="font-medium">Year: {selectedYear}</span>
                                        <ChevronDown size={16} className={`transition-transform text-blue-400 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                                    </button>
                                </div>

                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-1 w-40 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-md shadow-lg z-20">
                                        {years.map((year) => (
                                            <button
                                                key={year}
                                                onClick={() => {
                                                    setSelectedYear(year);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`block w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors ${selectedYear === year
                                                    ? 'bg-blue-100/70 text-[#000000] font-medium'
                                                    : 'text-gray-700'
                                                    }`}
                                            >
                                                {year}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl overflow-hidden">
                            {timelineData.length > 0 ? (
                                <Timeline data={timelineData} />
                            ) : (
                                <div className="p-12 text-center">
                                    <p className="text-lg text-gray-500">No sessions available for {selectedYear}.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-16"
                    >
                        <TitleText text="Call for Proposals" />
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mt-6 text-left">
                            <h3 className="text-xl font-bold text-[#4671AF] mb-4">Submit Your Special Session Proposal</h3>
                            <p className="mb-4">
                                We invite proposals for special sessions related to any aspect of applied mathematics.
                                If you are interested in organizing a special session, please submit a proposal that includes:
                            </p>
                            <ul className="list-disc list-inside mb-6 space-y-2">
                                <li>Title and brief description of the session (250 words max)</li>
                                <li>Names and affiliations of organizers</li>
                                <li>List of potential speakers (with confirmations if available)</li>
                                <li>Estimated duration and format of the session</li>
                            </ul>
                            <p className="mb-6">
                                Proposals for {parseInt(selectedYear) + 1} should be submitted by <strong>October 15, {selectedYear}</strong>. Decisions will be
                                communicated by <strong>November 30, {selectedYear}</strong>.
                            </p>
                            <button className="btn-3d bg-[#4671AF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#365c8d] transition-colors">
                                Submit Proposal
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default SpecialSessionsPage;
