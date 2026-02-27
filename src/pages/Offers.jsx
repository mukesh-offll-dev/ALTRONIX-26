import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '@/components/Galaxy';

const Offers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-tech-dark pt-32 pb-20 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Galaxy
          density={0.4}
          glowIntensity={0.1}
          speed={0.4}
          hueShift={180} // Cyber blue
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full"
        >
          <div className="mb-12 text-center">
            <h2 className="text-tech-cyan text-xs font-bold tracking-[0.4em] uppercase mb-4 font-sora">
              Exclusive Benefits
            </h2>
            <h1 className="text-4xl md:text-5xl font-black font-sora tracking-tight text-white">
              Privilege <span className="gradient-text">Access</span>
            </h1>
          </div>

          <div className="tech-card bg-white/5 border-white/10 backdrop-blur-2xl p-10 md:p-12 text-center relative overflow-hidden group">
            {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-tech-blue/20 blur-[80px] rounded-full group-hover:bg-tech-blue/30 transition-colors" />

            <div className="relative z-10">
              <div className="space-y-10">
                <div className="transition-transform duration-500 group-hover:scale-105">
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 font-sora">30% OFF</div>
                  <div className="text-tech-cyan text-xs font-bold tracking-[0.2em] font-inter uppercase opacity-60">Early Bird Registration</div>
                </div>

                <div className="h-px bg-white/5 w-full mx-auto max-w-[100px]" />

                <div className="transition-transform duration-500 group-hover:scale-105 delay-75">
                  <div className="text-5xl md:text-6xl font-black text-white mb-2 font-sora">FREE</div>
                  <div className="text-tech-cyan text-xs font-bold tracking-[0.2em] font-inter uppercase opacity-60">Technical Workshops</div>
                </div>
              </div>

              <button className="btn-primary w-full mt-12 py-4 text-sm tracking-widest uppercase font-bold hover:scale-[1.02] transition-all">
                Claim Registration Reward
              </button>

              <p className="mt-6 text-[10px] text-white/30 font-inter tracking-widest uppercase">
                *Valid for first 100 registrations only
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-tech-blue/5 blur-[120px] rounded-full pointer-events-none -z-1" />
    </motion.div>
  );
};

export default Offers;