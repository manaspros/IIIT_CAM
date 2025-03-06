import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
    const letters = ['C', 'A', 'M'];

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 z-50">
            <div className="relative">
                {/* Background circle for the logo */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-blue-100 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: 1.5,
                        opacity: 0.3,
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                />

                <div className="flex space-x-3">
                    {letters.map((letter, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {/* Letter shadow */}
                            <motion.div
                                className="absolute text-7xl font-black text-[#4671AF]/20"
                                style={{
                                    fontFamily: "Libre Franklin, sans-serif",
                                    top: '3px',
                                    left: '3px',
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.15 + 0.3 }}
                            >
                                {letter}
                            </motion.div>

                            {/* Main letter */}
                            <motion.div
                                className="text-7xl font-black text-[#4671AF]"
                                style={{ fontFamily: "Libre Franklin, sans-serif" }}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: index * 0.15
                                }}
                            >
                                {letter}
                            </motion.div>

                            {/* Pulsing dot effect under letter */}
                            <motion.div
                                className="absolute w-2 h-2 rounded-full bg-[#4671AF] left-1/2 -translate-x-1/2 bottom-0"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1, 1.5, 1],
                                    opacity: [0, 1, 0.8, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    delay: index * 0.3
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Center for Applied Mathematics text */}
            <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <p className="text-[#4671AF] tracking-widest text-lg font-medium">CENTER FOR APPLIED MATHEMATICS</p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
                className="absolute bottom-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="flex space-x-2 items-center">
                    <p className="text-gray-500 text-sm">Loading</p>
                    <motion.div
                        className="flex space-x-1"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {[0, 1, 2].map((dot) => (
                            <motion.div
                                key={dot}
                                className="w-1.5 h-1.5 rounded-full bg-gray-400"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: [0.8, 1.2, 0.8] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: dot * 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoadingAnimation;
