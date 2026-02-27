import React from 'react';
import { motion } from 'framer-motion';

const NeonDivider = ({ color = "#00ffff" }) => {
    return (
        <div className="relative w-full h-8 flex items-center justify-center overflow-hidden my-8">
            <div
                className="absolute w-full h-px"
                style={{
                    background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                    boxShadow: `0 0 10px ${color}`
                }}
            />
            <motion.div
                className="z-10 bg-marvel-dark px-4 flex gap-2 text-xs font-orbitron tracking-widest uppercase"
                style={{ color }}
            >
                <span className="opacity-50">Sector</span>
                <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Analysis
                </motion.span>
            </motion.div>
        </div>
    );
};

export default NeonDivider;
