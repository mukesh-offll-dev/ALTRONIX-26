import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Coffee, Trophy, Mic2, Code2, Database, Camera, Brain, Swords, Search, Key, Flag } from 'lucide-react';
import { motion } from 'framer-motion'

const timelineData = [
    {
        time: "Coming Soon",
        title: "Inauguration",
        venue: "Main Seminar Hall",
        icon: <Mic2 className="w-5 h-5" />,
        type: "special"
    },
    {
        time: "Coming Soon",
        title: "Morning Sessions",
        events: [
            { name: "STARK EXPO", venue: "GND Seminar Hall", icon: <Mic2 className="w-4 h-4" /> },
            { name: "AI WEBSPY", venue: "Project Lab", icon: <Code2 className="w-4 h-4" /> },
            { name: "SHIELD SQL", venue: "Linux Lab", icon: <Database className="w-4 h-4" />, note: "Coming Soon" },
            { name: "VISION HUNTING", venue: "Final Year CLS", icon: <Brain className="w-4 h-4" /> },
        ],
        type: "group"
    },
    {
        time: "Coming Soon",
        title: "Lunch Break",
        venue: "Dining Hall",
        icon: <Coffee className="w-5 h-5" />,
        type: "special"
    },
    {
        time: "Coming Soon",
        title: "Afternoon Sessions",
        events: [
            { name: "STONE HUNT", venue: "Open Ground", icon: <Search className="w-4 h-4" />, note: "Coming Soon" },
            { name: "MEMORY MATRIX", venue: "Blue Lab", icon: <Key className="w-4 h-4" />, note: "Coming Soon" },
            { name: "LOKI RELAY", venue: "2nd, 3rd & Elective CLS", icon: <Swords className="w-4 h-4" /> },
            { name: "LIGHTING IMAGE GENERATION", venue: "Orange Lab", icon: <Camera className="w-4 h-4" /> },
        ],
        type: "group"
    },
    {
        time: "Coming Soon",
        title: "Valedictory",
        venue: "Main Seminar Hall",
        icon: <Trophy className="w-5 h-5" />,
        type: "special"
    }
];

const Mjolnir = ({ progress }) => {
    return (
        <div className="relative w-16 h-16 -translate-x-1/2 pointer-events-none">
            {/* Mjolnir Base */}
            <motion.div
                animate={{
                    x: [-1, 1, -1],
                    y: [-1, 1, -1],
                    rotate: [-2, 2, -2]
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="relative w-full h-full"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,186,255,0.6)]">
                    <defs>
                        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#E2E8F0" />
                            <stop offset="50%" stopColor="#94A3B8" />
                            <stop offset="100%" stopColor="#475569" />
                        </linearGradient>
                    </defs>
                    {/* Handle */}
                    <rect x="45" y="40" width="10" height="50" rx="2" fill="#78350F" />
                    <rect x="43" y="45" width="14" height="4" rx="1" fill="#4B240B" />
                    <rect x="43" y="55" width="14" height="4" rx="1" fill="#4B240B" />
                    <rect x="43" y="65" width="14" height="4" rx="1" fill="#4B240B" />
                    {/* Head */}
                    <path
                        d="M25,15 L75,15 L80,20 L80,45 L75,50 L25,50 L20,45 L20,20 Z"
                        fill="url(#metalGrad)"
                        stroke="#1E293B"
                        strokeWidth="1.5"
                    />
                    {/* Deco */}
                    <rect x="25" y="15" width="50" height="2" fill="rgba(255,255,255,0.3)" />
                    <circle cx="50" cy="32.5" r="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                </svg>

                {/* Lightning Arcs */}
                <motion.div
                    animate={{ opacity: [0, 1, 0, 0.8, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-full h-full bg-tech-blue/20 blur-xl rounded-full" />
                </motion.div>
            </motion.div>
        </div>
    );
};

const TimelineSection = () => {
    const navigate = useNavigate();

    // Flatten data to show each event separately
    const flattenedData = timelineData.flatMap(item => {
        if (item.type === 'special') {
            return {
                time: item.time,
                title: item.title,
                venue: item.venue,
                icon: item.icon,
                type: 'single'
            };
        } else {
            return item.events.map(event => ({
                time: event.note || item.time, // Use specific note if available, else group time
                title: event.name,
                venue: event.venue,
                icon: event.icon,
                type: 'single'
            }));
        }
    });

    const getProgress = () => {
        const now = new Date();
        const start = new Date("2026-03-13T09:30:00");
        const end = new Date("2026-03-13T15:30:00");

        if (now < start) return 0;
        if (now > end) return 100;

        const total = end - start;
        const elapsed = now - start;
        return (elapsed / total) * 100;
    };

    const progress = getProgress();

    const handleEventClick = (title) => {
        const slug = title.toLowerCase().replace(/[\s-]/g, '');
        if (["inauguration", "valedictory", "lunchbreak"].includes(slug)) return;
        navigate(`/events/${slug}`);
    };


    return (
        <section className="relative py-24 bg-tech-dark overflow-hidden font-inter">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-tech-cyan" />
                        <span className="text-tech-cyan text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-sora">
                            Schedule
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-aviano text-white mb-6 tracking-tight">
                        TIMELINE <span className="text-tech-blue">&</span> VENUE
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Plan your day at ALTRONIX '26. Catch all the action across different venues.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Base Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />

                    {/* Lightning Progress Line */}
                    <div
                        className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-linear-to-b from-tech-blue via-tech-cyan to-white md:-translate-x-1/2 shadow-[0_0_15px_rgba(0,186,255,0.8)] transition-all duration-1000 ease-out"
                        style={{ height: `${progress}%` }}
                    >
                        {/* Lightning sparks overlay */}
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.1, repeat: Infinity }}
                            className="absolute inset-0 bg-white shadow-[0_0_20px_white]"
                        />
                    </div>

                    {/* Progress Indicator - Mjolnir */}
                    <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-8 md:left-1/2 z-30 pointer-events-none"
                    >
                        <Mjolnir progress={progress} />
                    </motion.div>


                    <div className="space-y-12">
                        {flattenedData.map((item, index) => {
                            // Check if next item has same time to add extra space
                            const hasSameTimeAsNext = flattenedData[index + 1]?.time === item.time;
                            const isClickable = !["Inauguration", "Valedictory", "Lunch Break"].includes(item.title);

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        } ${hasSameTimeAsNext ? 'mb-16' : ''}`} // Added extra space if same time
                                >
                                    {/* Timeline Point */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-tech-blue border-4 border-tech-dark shadow-[0_0_15px_rgba(0,186,255,0.5)] md:-translate-x-1/2 z-20" />

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                        <div
                                            onClick={() => isClickable && handleEventClick(item.title)}
                                            className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 group ${isClickable ? 'cursor-pointer hover:border-tech-blue/30 hover:bg-white/10 shadow-lg hover:shadow-tech-blue/10' : ''
                                                }`}
                                        >
                                            <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                                }`}>
                                                <div className="p-2 rounded-lg bg-tech-blue/10 text-tech-blue group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                                                    {item.icon}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-tech-cyan text-[10px] font-bold tracking-widest uppercase mb-1">
                                                        {item.time}
                                                    </span>
                                                    <h3 className="text-xl font-bold text-white font-sora lowercase first-letter:uppercase">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className={`flex items-start gap-2 text-white/40 text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                                }`}>
                                                <MapPin className="w-4 h-4 shrink-0 text-tech-blue/60" />
                                                <span className="font-medium">{item.venue}</span>
                                            </div>

                                            {isClickable && (
                                                <div className={`mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-300 flex items-center gap-2 text-[10px] text-tech-blue font-bold uppercase tracking-widest ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                                    }`}>
                                                    <span>View Details</span>
                                                    <div className="w-4 h-px bg-tech-blue" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
