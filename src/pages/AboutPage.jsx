import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from '@/components/Galaxy';
import SplitText from '@/components/SplitText';
import about_bg from '../assets/about_bgimg.png';
import vision from '../assets/a_vision.png';
import strange from '../assets/a_strange.png';
import mask from '../assets/mask.png';
import { Cpu, Users, Award, BookOpen, GraduationCap, Star, Zap } from 'lucide-react';

const AboutPage = () => {
  const facultyData = {
    hod: {
      name: "Dr. L. Rasikannan",
      role: "Associate Professor & Head of the Department",
      highlight: true
    },
    associateProfessors: [
      { name: "Dr. R. Bhavani", role: "Associate Professor (Event Organizer)" },
      { name: "Dr. S. Nagarajan", role: "Associate Professor (CAS)" }
    ],
    assistantProfessors: [
      { name: "Prof. P. Vanitha Muthu", role: "Senior Grade" },
      { name: "Prof. J. Kalidass", role: "Senior Grade" },
      { name: "Dr. S. Annie Joice", role: "Assistant Professor" },
      { name: "Mrs. P. Saranya", role: "Assistant Professor" }
    ],
    adhocProfessors: [
      { name: "Mrs. P. Bhuvaneswari", role: "Assistant Professor (Adhoc)" },
      { name: "Mrs. S. Sasikala", role: "Assistant Professor (Adhoc)" },
      { name: "Mrs. S. Poonguzhali", role: "Assistant Professor (Adhoc)" },
      { name: "Mr. M. Mathivanan", role: "Assistant Professor (Adhoc)" }
    ]
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const FacultyCard = ({ name, role, highlight = false }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`glass p-6 rounded-2xl flex flex-col items-center text-center relative group overflow-hidden ${highlight ? 'border-tech-red/50 shadow-[0_0_20px_rgba(241,26,34,0.2)]' : 'border-white/10'
        }`}
    >
      {highlight && <div className="absolute inset-0 bg-tech-red/5 pointer-events-none" />}
      <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center border-2 ${highlight ? 'border-tech-red glow-red' : 'border-tech-blue/30'
        } bg-tech-dark overflow-hidden`}>
        <div className="w-full h-full bg-gradient-to-tr from-tech-dark to-white/5 flex items-center justify-center">
          <GraduationCap className={highlight ? 'text-tech-red' : 'text-tech-blue'} size={32} />
        </div>
      </div>
      <h3 className="text-lg font-bold font-sora text-white mb-1">{name}</h3>
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{role}</p>
      <div className={`w-12 h-0.5 mt-4 rounded-full ${highlight ? 'bg-tech-red' : 'bg-tech-blue/30'}`} />
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-tech-dark text-white relative overflow-hidden pt-24 pb-12">
      {/* Background Tech Lines and Floating Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full hud-grid opacity-10" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 50, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-tech-blue/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-tech-red/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* SECTION 1: HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 relative"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-tech-red/10 blur-[100px] rounded-full z-0" />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black font-aviano mb-6 tracking-tighter">
              About the <span className="text-tech-blue drop-shadow-[0_0_15px_rgba(0,130,255,0.4)]">Department</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-sora font-light tracking-wide max-w-2xl mx-auto">
              Excellence in Innovation, Research and Technology
            </p>
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-tech-red to-transparent mx-auto mt-8 rounded-full" />
          </div>
        </motion.section>

        {/* SECTION 2: DEPARTMENT OVERVIEW */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mb-32"
        >
          <div className="glass p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tech-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-3xl bg-tech-blue/10 flex items-center justify-center relative z-10 border border-tech-blue/20 backdrop-blur-xl">
                    <Cpu className="text-tech-blue w-24 h-24 drop-shadow-[0_0_20px_rgba(0,130,255,0.5)]" />
                  </div>
                  <div className="absolute -inset-4 bg-tech-blue/5 blur-2xl rounded-full animate-pulse" />
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-inter">
                  <p>
                    The Department of Computer Science and Engineering at Government College of Engineering – Srirangam, established in 2013, is dedicated to academic excellence, innovation, and industry-oriented learning. The department aims to produce highly skilled engineers equipped with strong theoretical foundations and practical expertise to meet the evolving demands of the digital era.
                  </p>
                  <p>
                    With modern laboratories and advanced computing facilities, the department provides a dynamic learning environment that encourages creativity, research, and technological exploration. Core focus areas include Artificial Intelligence, Data Science, Cyber Security, Web Technologies, Software Development, and emerging technologies shaping the future.
                  </p>
                  <p>
                    The department strongly emphasizes practical exposure, industry collaboration, placement readiness, and leadership development, ensuring students are not only technically proficient but also professionally competent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 3: FACULTY TEAM */}
        <section className="mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-sora mb-4 uppercase tracking-tighter">Faculty Team</h2>
            <p className="text-tech-red font-bold tracking-[0.3em] uppercase text-sm">Dedicated Mentors Driving Innovation</p>
            <div className="w-24 h-1 bg-tech-red/50 mx-auto mt-6" />
          </motion.div>

          {/* HOD */}
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-sm">
              <h3 className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.4em] mb-6">Head of Department</h3>
              <FacultyCard {...facultyData.hod} />
            </div>
          </div>

          {/* Associate Professors */}
          <div className="mb-16">
            <h3 className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.4em] mb-8">Associate Professors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {facultyData.associateProfessors.map((f, i) => (
                <FacultyCard key={i} {...f} />
              ))}
            </div>
          </div>

          {/* Assistant Professors */}
          <div className="mb-16">
            <h3 className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.4em] mb-8">Assistant Professors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyData.assistantProfessors.map((f, i) => (
                <FacultyCard key={i} {...f} />
              ))}
            </div>
          </div>

          {/* Adhoc Assistant Professors */}
          <div>
            <h3 className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.4em] mb-8">Assistant Professors (Adhoc)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyData.adhocProfessors.map((f, i) => (
                <FacultyCard key={i} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: ABOUT ALTRONIX’26 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mb-24"
        >
          <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-tech-red via-tech-red/80 to-tech-blue p-1 shadow-2xl">
            <div className="bg-tech-dark p-8 md:p-16 rounded-[39px] relative overflow-hidden">
              {/* Particle like dots in background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-5xl md:text-7xl font-black font-aviano mb-4 tracking-tighter">
                    <span className="text-white">About </span>
                    <span className="text-tech-red animate-pulse drop-shadow-[0_0_20px_rgba(241,26,34,0.6)]">ALTRONIX’26</span>
                  </h2>
                  <p className="text-tech-blue font-bold tracking-[0.3em] uppercase text-sm">Igniting Innovation. Empowering Engineers.</p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    className="h-1 bg-tech-red mx-auto mt-6 rounded-full"
                  />
                </div>

                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-300 leading-relaxed text-center font-inter">
                  <p>
                    ALTRONIX’26 is a National Level Technical Symposium organized by the Department of Computer Science and Engineering. The event serves as a platform for students across institutions to showcase their talents, exchange innovative ideas, and compete in cutting-edge technical and non-technical events.
                  </p>
                  <p>
                    This symposium reflects the department’s commitment to nurturing innovation, creativity, and technical excellence among future engineers.
                  </p>
                  <div className="py-8 bg-white/5 border-y border-white/10 px-6 backdrop-blur-sm">
                    <p className="text-white font-medium">
                      ALTRONIX’26 is proudly organized under the guidance of <br />
                      <span className="text-tech-red font-bold text-xl">Dr. R. Bhavani</span>, Associate Professor, Department of CSE, <br />
                      who serves as the Event Coordinator, ensuring the academic quality and grand execution of the event.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="text-center pt-8 border-t border-white/5 text-gray-400">
          <p className="text-sm font-sora tracking-widest uppercase">© 2026 Department of CSE | Government College of Engineering – Srirangam</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
