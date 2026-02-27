import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Bus, Mail } from 'lucide-react';

const Contact = () => {
  const coordinators = [
    {
      name: "Mukesh S",
      phone: "6383493022",
    },
    {
      name: "SaravanaKumar M",
      phone: "8610100739",
    }
  ];

  const busTimings = [
    {
      title: "From Panjapur to Sethurappatti",
      timings: ["7:30 AM", "7:50 AM", "8:15 AM", "8:20 AM", "9:00 AM"]
    },
    {
      title: "From Central Bus Stand to Sethurappatti",
      timings: ["7:00 AM", "7:30 AM", "8:00 AM"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-tech-dark text-white relative overflow-hidden pt-24 pb-12">
      {/* Background Tech Lines and Floating Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full hud-grid opacity-10" />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-red/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tech-blue/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION 1: PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 py-1 px-4 rounded-full border border-tech-red/30 bg-tech-red/5 backdrop-blur-sm">
            <span className="text-tech-red font-bold tracking-widest text-xs uppercase">Get in touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-aviano mb-4 tracking-tighter">
            Contact <span className="text-tech-red drop-shadow-[0_0_15px_rgba(241,26,34,0.5)]">Us</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            Get in touch with us for event details and queries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-red to-tech-blue mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(0,130,255,0.5)]" />
        </motion.div>

        {/* SECTION 2: COLLEGE ADDRESS CARD */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass p-8 md:p-12 rounded-3xl max-w-3xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl relative group overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-tech-red/5 to-tech-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-20 h-20 rounded-2xl bg-tech-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-tech-red/20 transition-colors">
              <MapPin className="text-tech-red w-10 h-10 drop-shadow-[0_0_8px_rgba(241,26,34,0.3)]" />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold font-sora mb-4 text-white">Location</h2>
              <div className="space-y-2 text-gray-300 text-lg leading-relaxed">
                <p className="font-semibold text-white">Government College of Engineering - Srirangam</p>
                <p>Trichy - Madurai Highway</p>
                <p>Sethurappatti Road</p>
                <p>Trichy - 620012</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 3: EVENT COORDINATORS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {coordinators.map((coord, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-tech-red/30 transition-all duration-300 relative group"
            >
              {/* Profile Placeholder with Red Border Glow */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-tech-red shadow-[0_0_20px_rgba(241,26,34,0.4)] mb-6 overflow-hidden bg-tech-dark flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-tr from-tech-dark to-tech-red/20 flex items-center justify-center">
                    <span className="text-tech-red text-2xl font-black">{coord.name.charAt(0)}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-sora mb-2 text-white">{coord.name}</h3>

                <div className="flex items-center gap-2 mb-6 text-gray-400">
                  <Phone className="w-4 h-4 text-tech-red" />
                  <span className="font-bold text-white tracking-widest">{coord.phone}</span>
                </div>

                <a
                  href={`tel:${coord.phone}`}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-tech-blue/80 to-tech-blue border border-tech-blue/30 text-white font-bold text-center hover:shadow-[0_0_20px_rgba(0,130,255,0.4)] transition-all flex items-center justify-center gap-3 group/btn"
                >
                  <Phone className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  CLICK TO CALL
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECTION 4: BUS TIMINGS */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10 justify-center">
            <Bus className="text-tech-blue w-10 h-10" />
            <h2 className="text-4xl font-black font-sora">Bus Timings to Venue</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {busTimings.map((route, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                className="bg-tech-blue/5 backdrop-blur-md border border-tech-blue/10 rounded-3xl overflow-hidden relative"
              >
                {/* Red Highlight Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-tech-red" />

                <div className="p-8">
                  <h3 className="text-xl font-bold font-sora mb-6 text-tech-blue flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-tech-red" />
                    {route.title}
                  </h3>

                  <div className="grid grid-cols-3 gap-3">
                    {route.timings.map((time, tIdx) => (
                      <div
                        key={tIdx}
                        className="bg-white/5 border border-white/5 rounded-xl py-3 px-2 text-center text-sm font-bold text-gray-300 hover:border-tech-red/20 hover:text-white transition-colors"
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 5: GOOGLE MAP EMBED */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black font-sora mb-8 text-center uppercase tracking-tighter">Location Map</h2>

          <motion.div
            whileHover={{ scale: 1.005 }}
            className="rounded-[25px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 p-2 bg-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.04526370059904!2d78.59974606766221!3d10.678501187132131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa63d82dd6a5e3%3A0x38be13a41bef7d48!2sGovernment%20College%20of%20Engineering%20-!5e0!3m2!1sen!2sin!4v1772182510675!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* FOOTER */}
        <footer className="text-center pt-8 border-t border-white/5 text-gray-500 text-sm">
          <p>© 2026 Government College of Engineering - Srirangam | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
