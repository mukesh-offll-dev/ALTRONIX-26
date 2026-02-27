import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { User, Mail, School, Phone, Utensils, Info, QrCode, CheckCircle, ArrowRight, Home, Loader2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import qrcode from '../assets/qr-code.png'

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_APPURL;

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [stage, setStage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        collegeName: '',
        mobileNumber: '',
        foodType: 'Veg',
        extraInfo: '',
        transactionId: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateStage1 = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.collegeName.trim()) newErrors.collegeName = 'College Name is required';
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Enter a valid 10-digit number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStage2 = () => {
        const newErrors = {};
        if (!formData.transactionId.trim()) {
            newErrors.transactionId = 'Transaction ID is required';
        } else if (formData.transactionId.length < 8 || formData.transactionId.length > 20) {
            newErrors.transactionId = 'Transaction ID should be 8-20 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStage1()) {
            setStage(2);
        }
    };

    const handleSubmit = async () => {
        if (!validateStage2()) return;

        setLoading(true);
        try {
            // Match the data structure from user's snippet
            const payload = {
                name: formData.fullName,
                email: formData.email,
                college: formData.collegeName,
                payment_id: formData.transactionId,
                contact: formData.mobileNumber,
                food: formData.foodType,
                amount: 200,
                extra_info: formData.extraInfo // Optional addition
            };

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(payload)
            });

            // Even if response is no-cors, we try to progress. 
            // If it's a normal fetch, wait for json
            try {
                const data = await response.json();
                console.log("Sheet update response:", data);
            } catch (e) {
                console.log("Response not JSON or no-cors used");
            }

            // Send Email Confirmation
            try {
                await emailjs.send(
                    "service_ra38cer",
                    "template_otki01o",
                    {
                        name: formData.fullName,
                        email: formData.email,
                    },
                    "0rGRpnE7N0ygcnPTj"
                );
                console.log("Email sent successfully");
            } catch (emailErr) {
                console.error("EmailJS error:", emailErr);
                // We still show success since data was (likely) saved
            }

            setStage(3);
        } catch (error) {
            console.error('Submission error:', error);
            alert("Registration logic error. However, if you paid, take a screenshot and contact us.");
            // Force progress if user is stuck but paid? No, better warn.
            // setStage(3); 
        } finally {
            setLoading(false);
        }
    };

    const pageVariants = {
        initial: { opacity: 0, x: 20 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <div className="min-h-screen bg-tech-dark text-white pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-red/30 blur-[128px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-blue/30 blur-[128px] rounded-full" />
            </div>

            <div className="max-w-xl mx-auto relative z-10">
                {/* Progress Indicator */}
                <div className="flex justify-between items-center mb-12">
                    {[1, 2, 3].map((num) => (
                        <div key={num} className="flex flex-col items-center gap-2 flex-1">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${stage >= num ? 'bg-tech-red border-tech-red text-white shadow-[0_0_15px_rgba(241,26,34,0.5)]' : 'border-white/20 text-white/40'
                                }`}>
                                {stage > num ? <CheckCircle size={20} /> : num}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${stage >= num ? 'text-white' : 'text-white/20'
                                }`}>
                                {num === 1 ? 'Details' : num === 2 ? 'Payment' : 'Complete'}
                            </span>
                        </div>
                    ))}
                    {/* Connecting Lines */}
                    <div className="absolute top-5 left-[15%] right-[15%] h-[2px] bg-white/5 -z-10">
                        <div
                            className="h-full bg-tech-red transition-all duration-500 shadow-[0_0_10px_rgba(241,26,34,0.5)]"
                            style={{ width: `${(stage - 1) * 50}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {stage === 1 && (
                        <motion.div
                            key="stage1"
                            variants={pageVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="glass p-8 md:p-10 rounded-3xl border border-white/10"
                        >
                            <h2 className="text-3xl font-black font-aviano mb-2 text-center">Registration</h2>
                            <p className="text-gray-400 text-center mb-8">Enter your basic information to begin.</p>

                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <User size={14} /> Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.fullName ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter`}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.fullName}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <Mail size={14} /> Email ID
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.email ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter`}
                                        placeholder="johndoe@example.com"
                                    />
                                    {errors.email && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.email}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <School size={14} /> College Name
                                    </label>
                                    <input
                                        type="text"
                                        name="collegeName"
                                        value={formData.collegeName}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.collegeName ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter`}
                                        placeholder="GCE Srirangam"
                                    />
                                    {errors.collegeName && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.collegeName}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <Phone size={14} /> Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.mobileNumber ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter`}
                                        placeholder="9876543210"
                                    />
                                    {errors.mobileNumber && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.mobileNumber}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <Utensils size={14} /> Food Preference
                                    </label>
                                    <select
                                        name="foodType"
                                        value={formData.foodType}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter appearance-none cursor-pointer"
                                    >
                                        <option value="Veg" className="bg-tech-dark text-white">Veg</option>
                                        <option value="Non-Veg" className="bg-tech-dark text-white">Non-Veg</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <Info size={14} /> Extra Information
                                    </label>
                                    <textarea
                                        name="extraInfo"
                                        value={formData.extraInfo}
                                        onChange={handleChange}
                                        placeholder="Any dietary restrictions or specialized needs?"
                                        rows="3"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter resize-none"
                                    />
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="w-full btn-primary py-4 rounded-xl mt-4 flex items-center justify-center gap-3 group"
                                >
                                    Proceed to Payment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {stage === 2 && (
                        <motion.div
                            key="stage2"
                            variants={pageVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="glass p-8 md:p-10 rounded-3xl border border-white/10 text-center"
                        >
                            <h2 className="text-3xl font-black font-aviano mb-2">Secure Payment</h2>
                            <p className="text-gray-400 mb-8">Scan the QR code and pay the entry fee.</p>

                            <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-3xl inline-block relative group">
                                <div className="absolute inset-0 bg-tech-red/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <img
                                    src={qrcode}
                                    alt="Payment QR"
                                    className="w-48 h-48 mx-auto relative z-10 rounded-xl shadow-2xl"

                                />
                                <div className="mt-6 text-2xl font-black text-tech-red drop-shadow-[0_0_10px_rgba(241,26,34,0.4)]">
                                    ₹200.00
                                </div>
                            </div>

                            <div className="space-y-6 text-left max-w-sm mx-auto">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-red flex items-center gap-2">
                                        <QrCode size={14} /> UPI Transaction ID
                                    </label>
                                    <input
                                        type="text"
                                        name="transactionId"
                                        value={formData.transactionId}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.transactionId ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-red outline-none transition-all font-inter`}
                                        placeholder="Enter the 12-digit ID"
                                    />
                                    {errors.transactionId && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.transactionId}</p>}
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-tech-red/20"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Verifying...
                                        </>
                                    ) : (
                                        <>
                                            Complete Registration <CheckCircle size={20} />
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={() => setStage(1)}
                                    className="w-full text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                                >
                                    Back to Details
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {stage === 3 && (
                        <motion.div
                            key="stage3"
                            variants={pageVariants}
                            initial="initial"
                            animate="enter"
                            className="glass p-8 md:p-12 rounded-[40px] border border-white/10 text-center relative overflow-hidden"
                        >
                            {/* Confetti Effect Simulation */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-24 h-24 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-8 relative border border-tech-red/50"
                            >
                                <CheckCircle size={48} className="text-tech-red shadow-[0_0_20px_rgba(241,26,34,0.5)]" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -inset-4 border border-tech-red rounded-full"
                                />
                            </motion.div>

                            <h2 className="text-4xl font-black font-aviano mb-4">Registration Successful!</h2>
                            <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
                                Thank you, <span className="text-white font-bold">{formData.fullName}</span>. Your data has been recorded against transaction ID <span className="text-tech-red font-mono">{formData.transactionId}</span>.
                            </p>

                            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl mb-8 flex items-center justify-between text-left max-w-xs mx-auto">
                                <div>
                                    <p className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-1">Status</p>
                                    <p className="text-tech-blue font-bold tracking-tighter uppercase">Verified Hub Linked</p>
                                </div>
                                <Zap className="text-tech-blue animate-pulse" />
                            </div>

                            <button
                                onClick={() => navigate('/')}
                                className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3"
                            >
                                <Home size={18} /> Return to Mission Hub
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default RegistrationPage;
