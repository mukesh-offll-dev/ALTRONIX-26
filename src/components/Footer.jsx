import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/sympo-logo.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-tech-dark border-t border-white/5 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-2 mb-8 group cursor-pointer">
                        <div className="w-8 h-8 rounded overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src={logo} alt="Altronix Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-aviano font-extrabold text-sm tracking-tighter text-white/80 group-hover:text-white transition-colors">
                            ALTRONIX <span className="text-tech-blue">'26</span>
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-8 mb-8">
                        {['Instagram', 'Twitter', 'LinkedIn', 'GitHub'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-tech-blue transition-colors font-bold"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-[10px] text-white/20 font-inter uppercase tracking-widest">
                        © {currentYear} Altronix  • All Rights Reserved
                    </div>

                    <div className="mt-4 text-[8px] text-white/10 font-inter uppercase tracking-[0.5em]">
                        Designed for the future of tech
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
