import React from "react";
import Timeline from "../components/timeline";

const timelineItems = [
    {
        title: "The Beginning",
        description: "Our journey started with an idea and a dream.",
        date: "2020",
        content: (
            <div className="bg-white p-4 rounded-lg shadow-md">
                <p>The CAM journey began with a vision to bridge pure mathematics with real-world applications.</p>
            </div>
        ),
    },
    {
        title: "First Milestone",
        description: "We achieved our first major success.",
        date: "2021",
        image: "https://via.placeholder.com/100",
    },
    {
        title: "Expansion",
        description: "Growing our team and reaching new heights.",
        date: "2022",
        image: "https://via.placeholder.com/100",
    },
    {
        title: "Future Goals",
        description: "Looking ahead to innovate and inspire.",
        date: "2023",
        image: "https://via.placeholder.com/100",
    },
];

const TimelineDemo = () => {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <Timeline data={timelineItems} />
        </div>
    );
};

export default TimelineDemo;
