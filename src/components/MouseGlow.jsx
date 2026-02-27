import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseGlow = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                backgroundColor: 'rgba(59, 130, 246, 0.03)',
                filter: 'blur(120px)',
                pointerEvents: 'none',
                zIndex: 9999,
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        />
    );
};

export default MouseGlow;
