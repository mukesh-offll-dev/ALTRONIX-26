import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Galaxy from '@/components/Galaxy';
import ironman from '../assets/a_ironman.png';
import captain from '../assets/a_captain.png';

const Events = () => {
    const navigate = useNavigate();
const technicalEvents = [
    {
        id: 'stark-expo',
        name: 'STARK EXPO',
        desc: 'Present your research ideas, technical innovations, and futuristic concepts to a panel of experts.'
    },
    {
        id: 'ai-spy-stack',
        name: 'AI SPY STACK',
        desc: 'Design and develop innovative digital solutions using modern web technologies.'
    },
    {
        id: 'shield-sql',
        name: 'SHIELD SQL',
        desc: 'Test your SQL knowledge, logical thinking, and database problem-solving skills under time pressure.'
    },
    {
        id: 'vision-washing',
        name: 'VISION WASHING',
        desc: 'AI Psychological Extraction Challenge — strategically extract the hidden secret key using prompt engineering.'
    }
];

const nonTechnicalEvents = [
    {
        id: 'stone-hunt',
        name: 'STONE HUNT',
        desc: 'A creative photography challenge that captures moments with precision and storytelling.'
    },
    {
        id: 'memory-matrix',
        name: 'MEMORY MATRIX',
        desc: 'An intense cognitive retention challenge testing focus, visual memory, and recall accuracy.'
    },
    {
        id: 'loki-relay',
        name: 'LOKI RELAY',
        desc: 'An interactive fandom battle filled with rapid-fire pop culture and general awareness questions.'
    },
    {
        id: 'neural-infinity-war',
        name: 'NEURAL INFINITY WAR',
        desc: 'The ultimate AI image recreation challenge — replicate reference visuals using pure prompt precision.'
    }
];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen bg-tech-dark pt-32 pb-20 overflow-hidden"
        >
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <Galaxy
                    density={0.5}
                    glowIntensity={0.1}
                    speed={0.3}
                    hueShift={280} // Subtle purple/blue
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="mb-16 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-tech-blue text-xs font-bold tracking-[0.3em] uppercase mb-4 font-sora"
                        >
                            The Competitions
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black font-aviano tracking-tight text-white mb-4"
                        >
                            Unleash Your <span className="gradient-text">Genius.</span>
                        </motion.h1>
                    </div>

                    {/* Technical Events Grid */}
                    <div className="mb-20 relative">
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold font-sora text-white/80 mb-8 flex items-center gap-4">
                                    Technical Events
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-tech-red/30 to-transparent" />
                                </h3>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {technicalEvents.map((event) => (
                                        <motion.div
                                            key={event.id}
                                            variants={cardVariants}
                                            onClick={() => navigate(`/events/${event.id}`)}
                                            className="tech-card tech-card-red group cursor-pointer border-tech-red/5 hover:border-tech-red/30"
                                        >
                                            <div className="text-tech-red mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-12 h-12 rounded-xl bg-tech-red/10 border border-tech-red/20 flex items-center justify-center">
                                                    <span className="text-xl font-bold">T</span>
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 font-sora group-hover:text-tech-red transition-colors">
                                                {event.name}
                                            </h4>
                                            <p className="text-sm text-white/40 leading-relaxed font-inter">
                                                {event.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 0.4, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-72 h-48 lg:h-72 lg:sticky lg:top-40 grayscale hover:grayscale-0 transition-all duration-700 flex flex-col items-center justify-center order-first lg:order-last"
                            >
                                <img src={ironman} alt="Technical" className="w-40 lg:w-full h-40 lg:h-full object-contain" />
                                <div className="mt-2 lg:mt-4 text-[8px] lg:text-[10px] text-tech-red font-bold uppercase tracking-[0.4em] text-center opacity-50">Stark Protocol</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Non-Technical Events Grid */}
                    <div className="mb-20 relative">
                        <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold font-sora text-white/80 mb-8 flex items-center gap-4">
                                    Non-Technical Events
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-tech-blue/30 to-transparent" />
                                </h3>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                >
                                    {nonTechnicalEvents.map((event) => (
                                        <motion.div
                                            key={event.id}
                                            variants={cardVariants}
                                            onClick={() => navigate(`/events/${event.id}`)}
                                            className="tech-card tech-card-blue group cursor-pointer border-tech-blue/5 hover:border-tech-blue/30"
                                        >
                                            <div className="text-tech-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <div className="w-12 h-12 rounded-xl bg-tech-blue/10 border border-tech-blue/20 flex items-center justify-center">
                                                    <span className="text-xl font-bold">N</span>
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 font-sora group-hover:text-tech-blue transition-colors">
                                                {event.name}
                                            </h4>
                                            <p className="text-sm text-white/40 leading-relaxed font-inter">
                                                {event.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 0.4, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-72 h-48 lg:h-72 lg:sticky lg:top-40 grayscale hover:grayscale-0 transition-all duration-700 flex flex-col items-center justify-center order-first lg:order-last"
                            >
                                <img src={captain} alt="Non-Technical" className="w-40 lg:w-full h-40 lg:h-full object-contain" />
                                <div className="mt-2 lg:mt-4 text-[8px] lg:text-[10px] text-tech-blue font-bold uppercase tracking-[0.4em] text-center opacity-50">Shield Initiative</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Events;