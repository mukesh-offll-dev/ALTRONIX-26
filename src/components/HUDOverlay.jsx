import React from 'react';
import { motion } from 'framer-motion';

const HUDOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-marvel-cyan/30" />
            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-marvel-cyan/30" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-marvel-cyan/30" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-marvel-cyan/30" />

            {/* Scanning Line */}
            <motion.div
                className="absolute left-0 w-full h-px bg-marvel-blue/10 shadow-[0_0_10px_rgba(0,247,255,0.2)]"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Side HUD Elements */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-40">
                {[1, 2, 3, 4, 5].map(i => (
                    <motion.div
                        key={i}
                        className="w-1 h-8 bg-marvel-cyan/40"
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    />
                ))}
            </div>

            <div className="absolute right-8 top-20 text-[10px] font-orbitron text-marvel-cyan/40 vertical-text tracking-widest uppercase">
                System Status: Nominal // Signal Link: 98% // 0xAF42B-9
            </div>

            <style jsx>{`
        .vertical-text {
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }
      `}</style>
        </div>
    );
};

export default HUDOverlay;
