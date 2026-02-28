import Galaxy from '@/components/Galaxy'
import React, { useEffect, useState } from 'react'
import './../App.css'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import thor1 from './../assets/e_thor_1.png'
import thor2 from './../assets/a_thor.png'
import lightning_img1 from './../assets/simple_thunder.png'
import ShinyText from './ShinyText'
import { useParams, useNavigate } from 'react-router-dom'
import { eventsData } from '../data/eventsData'
import { Clock, Users, Layout, Wrench, AlertCircle, ShieldAlert, FileUp, PhoneCall, X } from 'lucide-react'

const float = keyframes`
  0% { transform: translateY(-15px); }
  50% { transform: translate(-25px, -25px); }
  100% { transform: translateY(-15px); }
`

const Image1 = styled.div`
  width: 15%;
  position: fixed;
  bottom: 0;
  left: 0;
  transition: all .7s ease-in-out;
  z-index: 10;
  @media screen and (max-width: 768px) { width: 30%; }

`

const Image2 = styled.div`
  width: 25%;
  position: fixed;
  top: 8%;
  right: 0;
  transition: all .7s ease-in-out;
  z-index: 2;
  animation: ${float} 4s ease infinite;
  @media screen and (max-width: 768px) { width: 40%; }
`

const Lightning = styled.div`
  width: 100%;
  position: fixed;
  top: 20%;
  right: -24%;
  transition: all .7s ease-in-out;
  z-index: 1;
  transform: rotate(-270deg);
  @media screen and (max-width: 868px) and (orientation: landscape) {
    width: 50%;
    top: -15%;
    right: -5%;
  }
`

const UseLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(orientation: landscape)");
    const handler = () => setIsLandscape(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isLandscape;
};

const SingleEvent = () => {
  const { eventname } = useParams();
  const navigate = useNavigate();
  const isLandscape = UseLandscape();

  const eventKey = Object.keys(eventsData).find(k =>
    k.toLowerCase().replace(/[\s-]/g, '') === eventname.toLowerCase().replace(/[\s-]/g, '')
  );
  const event = eventsData[eventKey] || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventname]);

  if (!event) {
    return (
      <div className="min-h-screen bg-tech-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-aviano text-white mb-4">EVENT NOT FOUND</h1>
          <button onClick={() => navigate('/events')} className="text-tech-blue hover:underline">Return to Events</button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='relative min-h-screen about bg-tech-dark'
    >
      <div className="fixed inset-0 z-0">
        <Galaxy
          starSpeed={0.4}
          density={0.6}
          hueShift={110}
          speed={1.25}
          glowIntensity={0.25}
          saturation={0}
          twinkleIntensity={0.5}
          rotationSpeed={0.2}
          transparent
        />
      </div>

      <div className="w-full relative z-20 flex justify-center items-start py-20 px-4 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-tech-dark/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative"
        >
          {/* Close Button */}
          <button
            onClick={() => navigate('/events')}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2"
          >
            <X size={24} />
          </button>

          {/* Tag */}
          <div className="mb-6">
            <span className="bg-tech-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {event.type}
            </span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-black font-aviano text-white mb-2 uppercase tracking-tight">
              {event.name}
            </h1>
            <h2 className="text-tech-blue text-sm md:text-base font-bold font-sora tracking-widest uppercase mb-4">
              {event.subHeader}
            </h2>
            <div className="h-[2px] w-20 bg-tech-blue mb-6" />
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-inter">
              {event.description}
            </p>
          </div>

          {/* 2x2 Grid Details */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {event.details?.time && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-2 text-white/40">
                  <Clock size={16} className="text-tech-red" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Time</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-white/90">{event.details.time}</span>
              </div>
            )}
            {event.details?.teamSize && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-2 text-white/40">
                  <Users size={16} className="text-tech-blue" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Team Size</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-white/90">{event.details.teamSize}</span>
              </div>
            )}
            {event.details?.format && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-2 text-white/40">
                  <Layout size={16} className="text-tech-red" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Format</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-white/90">{event.details.format}</span>
              </div>
            )}
            {event.details?.tools && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-2 text-white/40">
                  <Wrench size={16} className="text-tech-blue" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Tools</span>
                </div>
                <span className="text-xs md:text-sm font-semibold text-white/90">{event.details.tools}</span>
              </div>
            )}
          </div>

          {/* Sections Container */}
          <div className="space-y-6 mb-10">
            {/* Prerequisites */}
            {event.prerequisites && (
              <div className="bg-tech-blue/5 border border-tech-blue/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-tech-blue mb-4">
                  <AlertCircle size={20} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Prerequisites</h3>
                </div>
                <ul className="space-y-3">
                  {event.prerequisites.map((item, idx) => (
                    <li key={idx} className="text-sm text-white/60 flex gap-3">
                      <span className="text-tech-blue flex-shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rules */}
            {event.rules && event.rules.length > 0 && (
              <div className="bg-tech-red/5 border border-tech-red/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-tech-red mb-4">
                  <ShieldAlert size={20} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Rules</h3>
                </div>
                <ul className="space-y-3">
                  {event.rules.map((rule, idx) => (
                    <li key={idx} className="text-sm text-white/60 flex gap-3">
                      <span className="text-tech-red flex-shrink-0">•</span> {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Submission */}
            {event.submission && (
              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-green-500 mb-4">
                  <FileUp size={20} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Submission</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {event.submission}
                </p>
              </div>
            )}

            {/* Contact */}
            {event.contact && (
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-orange-500 mb-4">
                  <PhoneCall size={20} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Contact</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-white">{event.contact.name}</p>
                  <p className="text-sm text-white/50">Phone: {event.contact.phone}</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="sticky bottom-0 bg-gradient-to-t from-tech-dark pt-4 pb-2">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:scale-[1.01] active:scale-95 text-sm uppercase tracking-widest mb-4"
            >
              Return To Home To Register
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <Image1>
        <motion.img
          src={event.img1}
          className={`w-full md:block hidden ${event.flip1 ? "scale-x-[-1]" : ""}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
      </Image1>
      <Image2>
        <motion.img
          src={event.img2}
          className={`w-full md:block hidden  ${event.flip2 ? "scale-x-[-1]" : ""}`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
      </Image2>
      <Lightning>
        <motion.img
          src={lightning_img1}
          className={`animate-pulse brightness-200 hue-rotate-180 opacity-20 `}
        />
      </Lightning>
    </motion.div>
  );
}

export default SingleEvent;
