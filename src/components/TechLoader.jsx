import React from 'react';
import { motion } from 'framer-motion';

const TechLoader = () => {
    return (
        <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-tech-dark">
            <div className="relative w-24 h-24">
                {/* Outer spinning ring */}
                <motion.div
                    className="absolute inset-0 border-b-2 border-tech-blue rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner spinning ring */}
                <motion.div
                    className="absolute inset-2 border-t-2 border-tech-cyan/50 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                {/* Center dot */}
                <div className="absolute inset-[45%] bg-tech-blue rounded-full shadow-[0_0_15px_#3b82f6]" />
            </div>

            <motion.div
                className="mt-8 font-sora text-sm font-light tracking-[0.5em] text-white/60 uppercase"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Initializing Systems
            </motion.div>
        </div>
    );
};

export default TechLoader;
