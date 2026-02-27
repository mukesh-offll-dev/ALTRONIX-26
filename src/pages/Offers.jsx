import React from 'react';
import { motion } from 'framer-motion';
import { Users, Ticket, IdCard, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
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

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          <div className="mb-6 md:mb-8 text-center pt-8 md:pt-0">
            <h2 className="text-tech-cyan text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 md:mb-4 font-sora">
              Exclusive Benefits
            </h2>
            <h1 className="text-3xl md:text-5xl font-black font-sora tracking-tight text-white">
              Symposium <span className="gradient-text">Offers</span>
            </h1>
          </div>

          {/* Main Offer Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-tech-red to-tech-blue rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative tech-card bg-[#0b0f19]/80 border-white/10 backdrop-blur-3xl p-5 md:p-12 overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                
              </div>

              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-5 md:space-y-6">
                  {/* Title Section */}
                  <div className="space-y-2 w-full">
                    <h3 className="text-tech-cyan font-bold tracking-widest uppercase text-[10px] md:text-sm font-orbitron">
                      Group Registration Special Offer
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight font-sora">
                      Register 5 Students & <br className="hidden sm:block" />
                      <span className="text-tech-red">1 Student Gets </span> <br className="sm:hidden" />
                      <span className="bg-tech-blue px-3 py-0.5 md:px-4 md:py-1 rounded-sm skew-x-[-10deg] inline-block mt-1 md:mt-2">FREE</span>
                      <span className="text-tech-red"> Entry!</span>
                    </h2>
                  </div>

                  <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-tech-red to-tech-blue rounded-full"></div>

                  {/* Icon Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 w-full py-4 md:py-6">
                    <div className="flex flex-row sm:flex-col items-center sm:justify-center gap-4 sm:gap-3 p-3 md:p-4 rounded-xl bg-white/5 sm:bg-transparent hover:bg-white/5 transition-colors border border-white/5 sm:border-transparent hover:border-white/5">
                      <div className="p-2.5 md:p-3 rounded-full bg-tech-blue/10 text-tech-blue flex-shrink-0">
                        <Users size={22} className="md:w-7 md:h-7" />
                      </div>
                      <p className="text-xs md:text-sm font-medium text-white/80">Group of 5 students</p>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:justify-center gap-4 sm:gap-3 p-3 md:p-4 rounded-xl bg-white/5 sm:bg-transparent hover:bg-white/5 transition-colors border border-white/5 sm:border-transparent hover:border-white/5">
                      <div className="p-2.5 md:p-3 rounded-full bg-tech-red/10 text-tech-red flex-shrink-0">
                        <Ticket size={22} className="md:w-7 md:h-7" />
                      </div>
                      <p className="text-xs md:text-sm font-medium text-white/80">1 Free ticket</p>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:justify-center gap-4 sm:gap-3 p-3 md:p-4 rounded-xl bg-white/5 sm:bg-transparent hover:bg-white/5 transition-colors border border-white/5 sm:border-transparent hover:border-white/5">
                      <div className="p-2.5 md:p-3 rounded-full bg-tech-cyan/10 text-tech-cyan flex-shrink-0">
                        <IdCard size={22} className="md:w-7 md:h-7" />
                      </div>
                      <p className="text-xs md:text-sm font-medium text-white/80">College ID required</p>
                    </div>
                  </div>

                  {/* Details List */}
                  <div className="w-full text-left space-y-3 bg-white/5 p-5 md:p-8 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
                      Offer Rules
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm text-white/60">
                      <li className="flex gap-3">
                        <span className="text-tech-blue mt-1">•</span>
                        <span>If 5 students from the same college register together, 1 additional student can participate for free.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-tech-blue mt-1">•</span>
                        <span>Total allowed: 5 Paid + 1 Free student. All 6 must be from the same college.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-tech-blue mt-1">•</span>
                        <span>Confirmation will be done during on-spot verification. Original ID card is mandatory.</span>
                      </li>
                      <li className="flex gap-3 text-tech-cyan font-medium">
                        <Sparkles size={14} className="mt-0.5 md:mt-1 flex-shrink-0" />
                        <span>Offer valid only after successful payment confirmation of 5 students.</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link to="/register" className="w-full">
                    <button className="group relative w-full overflow-hidden rounded-xl bg-slate-950 px-6 py-3.5 md:px-8 md:py-4 font-bold text-white transition-all duration-300">
                      <span className="absolute inset-0 bg-gradient-to-r from-tech-red to-tech-blue opacity-80 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center justify-center gap-2 tracking-widest uppercase text-xs md:text-sm">
                        Register Now
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </span>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-40 blur-xl bg-white transition-opacity duration-300"></div>
                    </button>
                  </Link>

                  <p className="text-[8px] md:text-[10px] text-white/30 font-inter tracking-[0.2em] uppercase text-center">
                    Offer applicable only for ALTRONIX’26 participants.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Glows */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-tech-red/20 blur-[100px] rounded-full group-hover:bg-tech-red/30 transition-colors" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-tech-blue/20 blur-[100px] rounded-full group-hover:bg-tech-blue/30 transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-red/5 blur-[120px] rounded-full pointer-events-none -z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-blue/5 blur-[120px] rounded-full pointer-events-none -z-1" />
    </motion.div>
  );
};

export default Offers;