import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: "What is Altronix'26?",
        answer: "ALTRONIX’26 is a National Level Technical Symposium organized by the Department of Computer Science and Engineering. It serves as a platform for students to showcase their talents, exchange innovative ideas, and compete in technical and non-technical events."
    },
    {
        question: "Who can participate in this symposium?",
        answer: "Students from any engineering college or university can participate. Both undergraduate and postgraduate students are welcome to register for various events."
    },
    {
        question: "How do I register for events?",
        answer: "You can register by clicking the 'Register Now' button on our navigation bar or visiting the registration page directly. Select the events you wish to participate in and complete the form."
    },
    {
        question: "Is there any registration fee?",
        answer: "Please check the registration page or individual event details for any applicable fees. Some events might be free, while others could have a nominal entry fee."
    },
    {
        question: "Will accommodation be provided?",
        answer: "Limited accommodation may be provided for outstation participants on a prior request basis. Please reach out through our contact page for more details."
    },
    {
        question: "Will participants receive certificates?",
        answer: "Yes, all active participants will receive a participation certificate. Winners and runners-up will be awarded merit certificates and exciting prizes."
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-tech-dark text-white relative overflow-hidden pt-24 pb-12">
            {/* Background Tech Lines and Floating Blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full hud-grid opacity-10" />
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, 50, 0], opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-tech-blue/20 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-tech-red/10 blur-[120px] rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* HERO SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 relative"
                >
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-tech-red/10 blur-[100px] rounded-full z-0" />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-2xl bg-tech-blue/10 flex items-center justify-center mb-6 border border-tech-blue/20 backdrop-blur-xl">
                            <HelpCircle className="text-tech-blue w-10 h-10 drop-shadow-[0_0_15px_rgba(0,130,255,0.5)]" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-aviano mb-4 tracking-tighter">
                            Asked <span className="text-tech-blue drop-shadow-[0_0_15px_rgba(0,130,255,0.4)]">Questions</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-sora font-light tracking-wide max-w-2xl mx-auto uppercase">
                            Everything you need to know
                        </p>
                        <div className="w-40 h-1 bg-gradient-to-r from-transparent via-tech-red to-transparent mx-auto mt-8 rounded-full" />
                    </div>
                </motion.section>

                {/* FAQ ACCORDION SECTION */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="max-w-4xl mx-auto mb-24"
                >
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`glass rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-tech-blue/50 shadow-[0_0_20px_rgba(0,130,255,0.15)]' : 'border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <h3 className="text-lg font-bold font-sora text-white pr-8">{faq.question}</h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-tech-blue/20 rotate-180' : 'bg-white/5'}`}>
                                        <ChevronDown className={openIndex === index ? 'text-tech-blue' : 'text-gray-400'} size={20} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-gray-300 font-inter leading-relaxed">
                                                <div className="w-full h-px bg-white/10 mb-4" />
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default FAQPage;
