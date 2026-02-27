import React from 'react';
import { motion } from 'framer-motion';
import TimelineSection from '../components/TimelineSection';

const TimelinePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-tech-dark pt-24"
        >
            <div className="container mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-black font-aviano text-white mb-4">
                        EVENT <span className="text-tech-blue">SCHEDULE</span>
                    </h1>
                    <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Don't miss a single moment of ALTRONIX '26. Explore the complete timeline of technical and non-technical events.
                    </p>
                </motion.div>
            </div>

            <TimelineSection />

            {/* Background elements to match the theme */}
            <div className="fixed top-1/4 -left-64 w-96 h-96 bg-tech-blue/5 rounded-full blur-[128px] pointer-events-none -z-10" />
            <div className="fixed bottom-1/4 -right-64 w-96 h-96 bg-tech-purple/5 rounded-full blur-[128px] pointer-events-none -z-10" />
        </motion.div>
    );
};

export default TimelinePage;
