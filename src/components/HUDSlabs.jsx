import React from 'react';
import { motion } from 'framer-motion';

const StatCircle = ({ label, value, color }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
                <circle
                    cx="32" cy="32" r="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white/10"
                />
                <motion.circle
                    cx="32" cy="32" r="28"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeDasharray="176"
                    initial={{ strokeDashoffset: 176 }}
                    animate={{ strokeDashoffset: 176 - (176 * value) / 100 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 5px ${color})` }}
                />
            </svg>
            <span className="absolute text-[10px] font-orbitron">{value}%</span>
        </div>
        <span className="text-[10px] font-rajdhani text-white/50 uppercase tracking-widest">{label}</span>
    </div>
);

const HUDSlabs = () => {
    return (
        <div className="flex gap-12 p-6 glass rounded-xl border-l-4 border-l-marvel-cyan">
            <StatCircle label="Sync Status" value={92} color="#00ffff" />
            <StatCircle label="Energy Level" value={78} color="#ff0033" />
            <StatCircle label="Data Flux" value={85} color="#b300ff" />
        </div>
    );
};

export default HUDSlabs;
