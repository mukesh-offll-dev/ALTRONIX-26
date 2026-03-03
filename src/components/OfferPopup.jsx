import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OfferPopup = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
                navigate('/register');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, navigate, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-tech-dark/80 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.4 } }}
                        className="relative max-w-md w-full glass p-8 rounded-[2rem] border-2 border-transparent bg-clip-padding"
                        style={{
                            background: 'linear-gradient(var(--color-tech-dark), var(--color-tech-dark)) padding-box, linear-gradient(135deg, var(--color-tech-red), var(--color-tech-blue)) border-box',
                            boxShadow: '0 0 30px rgba(241, 26, 34, 0.3), 0 0 60px rgba(0, 130, 255, 0.2)'
                        }}
                    >
                        {/* Internal Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-tech-red/5 to-tech-blue/5 rounded-[2rem] pointer-events-none" />

                        <div className="relative z-10 text-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="inline-block mb-4"
                            >
                                <span className="text-tech-red font-black tracking-[0.3em] uppercase text-[10px] md:text-sm">🔥 Special Offer 🔥</span>
                            </motion.div>

                            <h2 className="text-2xl md:text-3xl font-black font-aviano mb-4 leading-tight">
                                <span className="text-white">ALTRONIX Special Combo</span><br />
                                <span className="gradient-text">Register 4 & Get 1 FREE!</span>
                            </h2>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                                <p className="text-tech-blue font-bold text-lg md:text-xl mb-1">4+1 Combo Offer</p>
                                <p className="text-3xl md:text-4xl font-black text-white">₹800 <span className="text-sm text-white/40 line-through">₹1000</span></p>
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <div className="w-2 h-2 bg-tech-red rounded-full animate-bounce" />
                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Redirecting to Form...</p>
                            </div>
                        </div>

                        {/* Decorative Glow Particles */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-tech-red/20 blur-2xl rounded-full" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tech-blue/20 blur-2xl rounded-full" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OfferPopup;
