import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '@/components/Galaxy';

const Contact = () => {
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
          hueShift={300} // Tech purple/pink range
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full"
        >
          <div className="mb-12 text-center">
            <h2 className="text-tech-purple text-xs font-bold tracking-[0.4em] uppercase mb-4 font-sora">
              Get in Touch
            </h2>
            <h1 className="text-4xl md:text-5xl font-black font-aviano tracking-tight text-white">
              Communication <span className="gradient-text">Hub</span>
            </h1>
          </div>

          <div className="tech-card bg-white/5 border-white/10 backdrop-blur-2xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tech-purple/10 blur-[64px] rounded-full" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group/item hover:border-tech-purple/50 transition-all">
                  <span className="text-tech-purple text-[10px] font-bold tracking-[0.2em] uppercase font-sora">Location</span>
                  <span className="text-white font-inter text-lg">Main Campus, Coimbatore, TN</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group/item hover:border-tech-purple/50 transition-all">
                  <span className="text-tech-purple text-[10px] font-bold tracking-[0.2em] uppercase font-sora">Email Portal</span>
                  <span className="text-white font-inter text-lg">infoquest@gct.ac.in</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group/item hover:border-tech-purple/50 transition-all">
                  <span className="text-tech-purple text-[10px] font-bold tracking-[0.2em] uppercase font-sora">Direct Comms</span>
                  <span className="text-white font-inter text-lg">+91 93630 76162</span>
                </div>
              </div>

              <motion.div
                className="pt-8 text-center text-[10px] text-white/30 font-sora tracking-[0.3em] border-t border-white/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SECURE UPLINK ESTABLISHED // SYMPOSIUM PROTOCOL v2.6
              </motion.div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="btn-outline px-12 py-4 hover:bg-tech-purple/10 transition-all group">
              <span className="group-hover:text-tech-purple transition-colors">Locate On Maps</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-purple/5 blur-[128px] rounded-full pointer-events-none -ml-32 -mb-32" />
    </motion.div>
  );
};

export default Contact;