import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
                HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
                MINUTES: Math.floor((difference / 1000 / 60) % 60),
                SECONDS: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { DAYS: 0, HOURS: 0, MINUTES: 0, SECONDS: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full"
            >
                {Object.entries(timeLeft).map(([unit, value], idx) => (
                    <motion.div
                        key={unit}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx, duration: 0.5 }}
                        className="relative group h-32 md:h-40 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-tech-blue/40 transition-all duration-500 shadow-2xl hover:shadow-tech-blue/10"
                    >
                        {/* Glow background */}
                        <div className="absolute inset-0 bg-linear-to-tr from-tech-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Value */}
                        <span className="relative text-4xl md:text-5xl font-black font-sora text-white tracking-tighter mb-1 select-none">
                            {String(value).padStart(2, '0')}
                        </span>

                        {/* Label */}
                        <span className="relative text-[10px] md:text-xs text-tech-cyan/60 font-bold uppercase tracking-[0.3em] font-inter">
                            {unit}
                        </span>

                        {/* Animated accent */}
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-tech-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Launch Status */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5"
            >
                <div className="w-2 h-2 rounded-full bg-tech-cyan animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">Systems Ready for March 13</span>
            </motion.div>
        </div>
    );
};

export default Countdown;
