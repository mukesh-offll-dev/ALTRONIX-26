import React from 'react';
import { motion } from 'framer-motion';

const ArcReactorLoader = () => {
    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-marvel-dark">
            <div className="relative w-48 h-48">
                {/* Outer Ring */}
                <motion.div
                    className="absolute inset-0 border-4 border-marvel-blue/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Pulsing Core */}
                <motion.div
                    className="absolute inset-4 border-2 border-marvel-cyan rounded-full shadow-[0_0_30px_rgba(0,255,255,0.6)]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* HUD Elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-8 h-1 bg-marvel-cyan/50"
                        style={{
                            transformOrigin: '-20px',
                            rotate: `${i * 45}deg`,
                        }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                    />
                ))}

                <div className="absolute inset-16 bg-marvel-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <motion.span
                        className="text-marvel-cyan font-orbitron text-xs font-bold"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        ACTIVE
                    </motion.span>
                </div>
            </div>
        </div>
    );
};

export default ArcReactorLoader;
