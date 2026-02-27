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

const HomePage = () => {
  const navigate = useNavigate();

  // --- Logic Preservation ---
  const [participant, setParticipant] = useState({
    name: "",
    college: "",
    email: "",
    contact: "",
    food: ""
  })

  const [isAlldataentered, setIsAlldataentered] = useState(false);

  useEffect(() => {
    if (participant.name && participant.college && participant.email && participant.contact && participant.food) {
      setIsAlldataentered(true);
    } else {
      setIsAlldataentered(false);
    }
  }, [participant]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    var options = {
      key: import.meta.env.VITE_KEY,
      key_secret: import.meta.env.VITE_KEY_SECRET,
      amount: 20000,
      currency: "INR",
      name: "Sympo 2024",
      description: "Test Transaction",
      image: round,
      handler: function (response) {

        fetch(import.meta.env.VITE_APPURL, {
          method: "POST",
          body: JSON.stringify({
            name: participant.name,
            email: participant.email,
            college: participant.college,
            payment_id: response.razorpay_payment_id,
            contact: participant.contact,
            food: participant.food,
            amount: 200
          })
        })
          .then(res => res.json())
          .then(data => {
            return emailjs.send(
              "service_ra38cer",
              "template_otki01o",
              {
                name: participant.name,
                email: participant.email,
              },
              "0rGRpnE7N0ygcnPTj"
            )
              .then(() => {
                alert("Registration Successful! \n \n Registration Details have been sent to your email. \n\n Please check your spam folder as well. ");
                location.reload();
              })
              .catch(err => {
                console.log(err);
                alert("Registration Successful! \n\n However, we were unable to send a confirmation email. \n\n Please contact us if you have any questions.");
                location.reload();
              })
          })
          .catch((err) => {
            console.log(err)
            alert("Saved payment, but sheet update failed \n\n If you face this issue place take screenshot this alert message and contact us.");
            location.reload();
          });
      },
      prefill: {
        name: participant.name,
        email: participant.email,
        contact: participant.contact
      },
      method: {
        netbanking: false,
        card: false,
        upi: true,
        wallet: false
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }

  // const sendwhatsapp = () => {
  //   const message = `*Registration Success* %0A Name: ${participant.name} %0A College: ${participant.college} %0A Email: ${participant.email} %0A Contact: ${participant.contact} %0A Food: ${participant.food}`;
  //   const url = `https://wa.me/919363076162?text=${message}`;
  //   window.open(url, '_blank').focus();

  //   emailjs.send(
  //     "service_ra38cer",
  //     "template_otki01o",
  //     {
  //       name: participant.name,
  //       email: participant.email,
  //       college: participant.college,
  //       contact: participant.contact,
  //       food: participant.food
  //     },
  //     "0rGRpnE7N0ygcnPTj"
  //   ).then((res) => {
  //     console.log("Email sent successfully", res);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }

  // const storeDataToGoogle = () => {
  //   const scriptURL = import.meta.env.VITE_APPURL;

  //   // Using URLSearchParams for better compatibility with Apps Script
  //   const params = new URLSearchParams();
  //   params.append("Name", participant.name);
  //   params.append("College", participant.college);
  //   params.append("Email", participant.email);
  //   params.append("Contact", participant.contact);
  //   params.append("Food", participant.food);

  //   fetch(scriptURL, {
  //     method: "POST",
  //     body: params,
  //     mode: "no-cors"
  //   })
  //     .then(() => console.log("Data sync initiated"))
  //     .catch((err) => console.error("Sync error:", err));
  // }

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
    <div className="relative min-h-screen bg-tech-dark overflow-hidden font-inter">
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
        <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/40 via-tech-dark/90 to-tech-dark" />
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
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="bg-tech-red hover:bg-tech-red/90 text-white min-w-[200px] text-base py-4 rounded-lg font-bold shadow-lg shadow-tech-red/20 hover:scale-105 active:scale-95 transition-all">
                  Register Now
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-tech-dark/95 border-white/10 text-white backdrop-blur-xl max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-sora text-2xl font-bold">Registration Portal</AlertDialogTitle>
                  <AlertDialogDescription className="text-white/60 font-inter">
                    Enter your coordinates to initialize the protocol.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex flex-col gap-5 py-6">
                  {[
                    { label: "Full Name", key: "name" },
                    { label: "College Name", key: "college" },
                    { label: "Email Address", key: "email" },
                    { label: "Contact Number", key: "contact" }
                  ].map((field) => (
                    <TextField
                      key={field.key}
                      fullWidth
                      label={field.label}
                      variant="outlined"
                      onChange={(e) => setParticipant({ ...participant, [field.key]: e.target.value })}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          color: "white",
                          "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                          "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                          "&.Mui-focused fieldset": { borderColor: "var(--color-tech-blue)" },
                        },
                        "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)", fontFamily: "Inter" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "var(--color-tech-blue)" },
                      }}
                    />
                  ))}
                  <TextField
                    select
                    fullWidth
                    label="Food Preference"
                    value={participant.food}
                    onChange={(e) => setParticipant({ ...participant, food: e.target.value })}
                    SelectProps={{
                      MenuProps: {
                        disablePortal: true, // Crucial for Radix dialog compatibility
                        disableAutoFocus: true,
                        disableEnforceFocus: true,
                        PaperProps: {
                          sx: {
                            bgcolor: '#121212',
                            color: 'white',
                            zIndex: 10000,
                            '& .MuiMenuItem-root': {
                              fontFamily: 'Inter',
                              '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                              },
                              '&.Mui-selected': {
                                bgcolor: 'rgba(59, 130, 246, 0.2)',
                                '&:hover': {
                                  bgcolor: 'rgba(59, 130, 246, 0.3)',
                                },
                              },
                            },
                          },
                        },
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "white",
                        "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                        "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                        "&.Mui-focused fieldset": { borderColor: "var(--color-tech-blue)" },
                      },
                      "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.4)", fontFamily: "Inter" },
                      "& .MuiInputLabel-root.Mui-focused": { color: "var(--color-tech-blue)" },
                      "& .MuiSelect-icon": { color: "white" },
                    }}
                  >
                    <MenuItem value="Veg">Veg</MenuItem>
                    <MenuItem value="Non-Veg">Non-Veg</MenuItem>
                  </TextField>
                </div>
                <AlertDialogFooter className="sm:justify-between">
                  <AlertDialogCancel className="bg-white/5 border-white/10 text-white hover:bg-white/10 font-inter">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    disabled={!isAlldataentered}
                    className="bg-tech-blue hover:bg-tech-blue/90 text-white font-sora py-2 px-6"
                    onClick={async (e) => {
                      await lockPortrait();
                      handlePayment(e);
                    }}
                  >
                    Proceed to Payment
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <button
              onClick={() => navigate('/events')}
              className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue/10 min-w-[200px] text-base py-4 rounded-lg font-bold transition-all"
            >
              View All Events
            </button>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24"
        >
          {[
            { label: "Events", value: "20+" },
            { label: "Participants", value: "500+" },
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

      Broadway font

      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-tech-blue/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-tech-purple/10 rounded-full blur-[128px] pointer-events-none" />


    </div>
  )
}

export default HomePage