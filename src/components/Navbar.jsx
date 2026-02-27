import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Timeline', path: '/timeline' },
        { name: 'Contact', path: '/contact' },
        { name: 'Offers', path: '/offers' },
        { name: 'FAQ', path: '/faq' },
    ];

    const handleNavigate = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? 'py-4 glass border-b' : 'py-6 bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div
                    className="text-xl font-bold font-sora cursor-pointer tracking-tighter flex items-center gap-2"
                    onClick={() => handleNavigate('/')}
                >
                    <div className="w-8 h-8 rounded-lg bg-tech-red flex items-center justify-center shadow-lg shadow-tech-red/20">
                        <span className="text-white text-lg font-black">A</span>
                    </div>
                    <span className="gradient-text font-extrabold uppercase">Altronix'26</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavigate(link.path)}
                            className="font-inter text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-blue transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavigate('/register')}
                        className="btn-primary text-sm px-5 py-2"
                    >
                        Register Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavigate(link.path)}
                                    className="font-sora text-lg font-bold text-white/80 hover:text-tech-blue text-left transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => handleNavigate('/register')}
                                className="btn-primary w-full text-center py-4 text-base mt-2"
                            >
                                Register Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
