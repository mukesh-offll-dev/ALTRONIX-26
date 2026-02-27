import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '@/components/Galaxy';
import SplitText from '@/components/SplitText';
import about_bg from '../assets/about_bg.png';
import vision from '../assets/a_vision.png';
import strange from '../assets/a_strange.png';
import mask from '../assets/mask.png';

const AboutPage = () => {
  const message = `ALTRONIX 2026 is a premium National Level Technical Symposium that brings together the brightest minds in engineering and technology. Our mission is to foster innovation, encourage collaboration, and provide a platform for students to showcase their technical prowess through a series of high-impact events and workshops. 

Join us as we explore the future of tech, from AI and Robotics to Sustainable Engineering and beyond. With a rich history of excellence, ALTRONIX continues to be the benchmark for technical festivals, attracting thousands of participants from across the nation for an unforgettable experience of learning and competition.`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-tech-dark pt-32 pb-20 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Galaxy
          density={0.4}
          glowIntensity={0.2}
          speed={0.5}
          hueShift={210} // Tech blue/cyan range
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-tech-cyan mb-4 font-sora">
              The Mission
            </h2>
            <h1 className="text-4xl md:text-6xl font-black font-sora tracking-tight">
              Executing the <span className="gradient-text"><span className="text-tech-red">A</span>ltronix</span> <br /> Protocol.
            </h1>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="tech-card bg-white/5 border-white/10 backdrop-blur-xl p-8 md:p-12 leading-relaxed">
                <SplitText
                  text={message}
                  className="text-lg md:text-xl text-white/70 font-inter font-light"
                  delay={30}
                  duration={0.05}
                  ease="power2.out"
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 tech-card p-6 text-center">
                  <div className="text-2xl font-bold text-white mb-1">Elite</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Experience</div>
                </div>
                <div className="flex-1 tech-card p-6 text-center">
                  <div className="text-2xl font-bold text-white mb-1">Pro</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Mentorship</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-tech-red/20 to-tech-blue/20 mix-blend-overlay" />
              {/* Main Mission Visual */}
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: `url(${about_bg})` }}
              />

              {/* Overlay elements */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-white/20 flex items-center justify-center mb-6 arctic-glow">
                    <div className="w-4 h-4 bg-tech-blue rounded-full animate-ping" />
                  </div>
                  <div className="font-sora text-xs tracking-widest uppercase text-white/50">System Initialized</div>
                </div>
              </div>

              {/* Stats badges */}
              <div className="absolute bottom-6 right-6 flex gap-3">
                <div className="px-3 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-tighter text-white/60">
                  SEC-A
                </div>
                <div className="px-3 py-1 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-tighter text-white/60">
                  GCT-INF
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decor & Characters */}
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={vision}
        className="absolute -right-20 bottom-0 w-[400px] md:w-[600px] pointer-events-none grayscale brightness-50"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={mask}
        className="absolute top-20 -left-20 w-[300px] md:w-[500px] pointer-events-none rotate-12"
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tech-blue/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tech-purple/5 rounded-full blur-[120px] -ml-64 -mb-64" />
    </motion.div>
  );
};

export default AboutPage;