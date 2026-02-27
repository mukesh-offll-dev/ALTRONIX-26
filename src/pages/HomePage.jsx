import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import emailjs from "@emailjs/browser";
import strange_video from './../assets/drstrange.mp4'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { TextField, MenuItem } from '@mui/material'
import Footer from '../components/Footer'
import ironman from '../assets/a_ironman.png'
import captain from '../assets/a_captain.png'
import strange from '../assets/a_strange.png'
import spiderman from '../assets/a_spider.png'
import thor from '../assets/a_thor.png'
import widow from '../assets/a_widow.png'
import round from '../assets/shield.png'


import Countdown from '../components/Countdown'

const HomePage = () => {
  const navigate = useNavigate();
  const symposiumDate = "2026-03-13T09:30:00";

  const lockPortrait = async () => {
    if (screen.orientation && screen.orientation.lock) {
      try {
        await screen.orientation.lock("portrait");
      } catch (err) {
        console.error("Orientation lock failed:", err);
      }
    }
  };
  // --- End Logic Preservation ---

  return (
    <div className="relative h-screen bg-tech-dark overflow-x-hidden sm:overflow-hidden font-inter">
      {/* Background Video with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-10 grayscale brightness-50"
        >
          <source src={strange_video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-tech-dark/40 via-tech-dark/90 to-tech-dark" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-tech-cyan animate-pulse" />
            <span className="text-tech-cyan text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-sora">
              National Level Technical Symposium
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-8xl font-black font-aviano mb-8 leading-[1.1] tracking-tight flex flex-wrap justify-center items-center gap-x-4">
            <span className="gradient-text">ALTRONIX</span><span className="text-white">'26</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 font-inter mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Innovate, Collaborate, and Elevate. Embark on a journey through the next frontier of technology where engineering meets imagination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => navigate('/register')}
              className="bg-tech-red hover:bg-tech-red/90 text-white min-w-[200px] text-base py-4 rounded-lg font-bold shadow-lg shadow-tech-red/20 hover:scale-105 active:scale-95 transition-all"
            >
              Register Now
            </button>

            <button
              onClick={() => navigate('/events')}
              className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue/10 min-w-[200px] text-base py-4 rounded-lg font-bold transition-all"
            >
              View All Events
            </button>
          </div>

          <Countdown targetDate={symposiumDate} />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24"
        >
          {[
            { label: "Events", value: "9" },
            { label: "Participants", value: "100+" },
            { label: "Prize Pool", value: "10K+" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-black font-sora text-white mb-2 group-hover:text-tech-blue transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-white/30 font-inter uppercase tracking-[0.3em] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Decorative Characters */}
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        src={ironman}
        className="absolute -left-1 top-40 w-[280px] md:w-[420px] pointer-events-none grayscale hover:grayscale-0 transition-all duration-700 md:block hidden z-0"
      />
      <motion.img
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        src={captain}
        className="absolute right-6 top-48 w-[250px] md:w-[380px] pointer-events-none grayscale hover:grayscale-0 transition-all duration-700 md:block hidden z-0"
      />




      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-tech-blue/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-tech-purple/10 rounded-full blur-[128px] pointer-events-none" />


    </div>
  )
}

export default HomePage