import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { User, Mail, School, Phone, Utensils, QrCode, CheckCircle, ArrowRight, Home, Loader2, Zap, Users, UserPlus, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_APPURL;
const payment_qr = "/QR_Code/payment_qr.png";

// Cloudinary Config (Restored)
const CLOUDINARY_API_KEY = "489928884445786";
const CLOUDINARY_API_SECRET = "JGJASM77QMM3frhW6ZmKlalFPJ4";
const CLOUDINARY_CLOUD_NAME = "denicisub";
const CLOUDINARY_UPLOAD_PRESET = "ml_default";

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [stage, setStage] = useState(0); // Start at stage 0 (Type Selection)
    const [registrationType, setRegistrationType] = useState(null); // 'solo' or 'group'
    const [expandedMember, setExpandedMember] = useState(1);
    const [loading, setLoading] = useState(false);
    const [screenshot, setScreenshot] = useState(null);
    const [screenshotPreview, setScreenshotPreview] = useState(null);

    const [formData, setFormData] = useState({
        // Member 1 (Leader)
        m1_name: '',
        m1_email: '',
        m1_college: '',
        m1_mobile: '',
        m1_food: 'Veg',
        // Member 2
        m2_name: '',
        m2_email: '',
        m2_mobile: '',
        m2_food: 'Veg',
        // Member 3
        m3_name: '',
        m3_email: '',
        m3_mobile: '',
        m3_food: 'Veg',
        // Member 4
        m4_name: '',
        m4_email: '',
        m4_mobile: '',
        m4_food: 'Veg',
        // Member 5 (Free)
        m5_name: '',
        m5_email: '',
        m5_mobile: '',
        m5_food: 'Veg',
        transactionId: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                setErrors(prev => ({ ...prev, screenshot: 'File size must be less than 2MB' }));
                return;
            }
            setScreenshot(file);
            setScreenshotPreview(URL.createObjectURL(file));
            setErrors(prev => ({ ...prev, screenshot: '' }));
        }
    };

    const generateSignature = async (paramsToSign) => {
        const sortedParams = Object.keys(paramsToSign)
            .sort()
            .map(key => `${key}=${paramsToSign[key]}`)
            .join("&");

        const stringToSign = sortedParams + CLOUDINARY_API_SECRET;

        const encoder = new TextEncoder();
        const data = encoder.encode(stringToSign);
        const hashBuffer = await crypto.subtle.digest("SHA-1", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

        return hashHex;
    };

    const uploadToCloudinary = async () => {
        if (!screenshot) return null;

        const timestamp = Math.round(new Date().getTime() / 1000);
        const paramsToSign = {
            timestamp: timestamp,
            upload_preset: CLOUDINARY_UPLOAD_PRESET,
        };

        const signature = await generateSignature(paramsToSign);

        const data = new FormData();
        data.append("file", screenshot);
        data.append("api_key", CLOUDINARY_API_KEY);
        data.append("timestamp", timestamp);
        data.append("signature", signature);
        data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        try {
            const resp = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: "POST",
                body: data
            });

            if (!resp.ok) {
                const errorData = await resp.json();
                console.error("Cloudinary error:", errorData);
                return null;
            }

            const json = await resp.json();
            return json.secure_url;
        } catch (err) {
            console.error("Cloudinary catch:", err);
            return null;
        }
    };

    const validateStage1 = () => {
        const newErrors = {};

        // Member 1 validation (Required for both Solo and Group)
        if (!formData.m1_name.trim()) newErrors.m1_name = 'Full Name is required';
        if (!formData.m1_email.trim()) {
            newErrors.m1_email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.m1_email)) {
            newErrors.m1_email = 'Invalid email format';
        }
        if (!formData.m1_college.trim()) newErrors.m1_college = 'College Name is required';
        if (!formData.m1_mobile.trim()) {
            newErrors.m1_mobile = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(formData.m1_mobile)) {
            newErrors.m1_mobile = 'Enter a valid 10-digit number';
        }

        if (registrationType === 'group') {
            // Validate Member 2
            if (!formData.m2_name.trim()) newErrors.m2_name = 'Full Name is required';
            if (!formData.m2_email.trim()) {
                newErrors.m2_email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.m2_email)) {
                newErrors.m2_email = 'Invalid email format';
            }
            if (!formData.m2_mobile.trim()) {
                newErrors.m2_mobile = 'Mobile Number is required';
            } else if (!/^\d{10}$/.test(formData.m2_mobile)) {
                newErrors.m2_mobile = 'Enter a valid 10-digit number';
            }

            // Validate Member 3
            if (!formData.m3_name.trim()) newErrors.m3_name = 'Full Name is required';
            if (!formData.m3_email.trim()) {
                newErrors.m3_email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.m3_email)) {
                newErrors.m3_email = 'Invalid email format';
            }
            if (!formData.m3_mobile.trim()) {
                newErrors.m3_mobile = 'Mobile Number is required';
            } else if (!/^\d{10}$/.test(formData.m3_mobile)) {
                newErrors.m3_mobile = 'Enter a valid 10-digit number';
            }

            // Validate Member 4
            if (!formData.m4_name.trim()) newErrors.m4_name = 'Full Name is required';
            if (!formData.m4_email.trim()) {
                newErrors.m4_email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.m4_email)) {
                newErrors.m4_email = 'Invalid email format';
            }
            if (!formData.m4_mobile.trim()) {
                newErrors.m4_mobile = 'Mobile Number is required';
            } else if (!/^\d{10}$/.test(formData.m4_mobile)) {
                newErrors.m4_mobile = 'Enter a valid 10-digit number';
            }

            // Validate Member 5 (Free)
            if (!formData.m5_name.trim()) newErrors.m5_name = 'Full Name is required';
            if (!formData.m5_email.trim()) {
                newErrors.m5_email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.m5_email)) {
                newErrors.m5_email = 'Invalid email format';
            }
            if (!formData.m5_mobile.trim()) {
                newErrors.m5_mobile = 'Mobile Number is required';
            } else if (!/^\d{10}$/.test(formData.m5_mobile)) {
                newErrors.m5_mobile = 'Enter a valid 10-digit number';
            }
        }

        setErrors(newErrors);

        // If there are errors in specific members, expand the first member with an error
        if (registrationType === 'group' && Object.keys(newErrors).length > 0) {
            if (newErrors.m1_name || newErrors.m1_email || newErrors.m1_college || newErrors.m1_mobile) setExpandedMember(1);
            else if (newErrors.m2_name || newErrors.m2_email || newErrors.m2_mobile) setExpandedMember(2);
            else if (newErrors.m3_name || newErrors.m3_email || newErrors.m3_mobile) setExpandedMember(3);
            else if (newErrors.m4_name || newErrors.m4_email || newErrors.m4_mobile) setExpandedMember(4);
            else if (newErrors.m5_name || newErrors.m5_email || newErrors.m5_mobile) setExpandedMember(5);
        }

        return Object.keys(newErrors).length === 0;
    };

    const validateStage2 = () => {
        const newErrors = {};
        const tid = formData.transactionId.trim();
        if (!tid) {
            newErrors.transactionId = 'Transaction ID is required';
        } else if (tid.length !== 12) {
            newErrors.transactionId = 'Transaction ID must be exactly 12 digits';
        } else if (!/^\d+$/.test(tid)) {
            newErrors.transactionId = 'Transaction ID should be numeric digits only';
        }

        if (!screenshot) {
            newErrors.screenshot = 'Payment screenshot is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (stage === 0 && registrationType) {
            setStage(1);
        } else if (stage === 1) {
            if (validateStage1()) {
                setStage(2);
            }
        }
    };

    const handleSubmit = async () => {
        if (!validateStage2()) return;

        setLoading(true);
        try {
            // 1. Upload to Cloudinary
            const screenshotUrl = await uploadToCloudinary();
            if (!screenshotUrl) {
                alert("Failed to upload screenshot. Please try again.");
                setLoading(false);
                return;
            }

            const amount = registrationType === 'solo' ? 200 : 800;

            // Prepare payload for Google Sheets with keys matching the ORIGINAL script expectations for Member 1
            const payload = {
                timestamp: new Date().toLocaleString(),
                registrationType: registrationType.charAt(0).toUpperCase() + registrationType.slice(1),
                // Member 1 (Leader) - Mapping back to ORIGINAL keys
                name: formData.m1_name,
                email: formData.m1_email,
                college: formData.m1_college,
                contact: formData.m1_mobile,
                food: formData.m1_food,
                // New Member keys for Group registration
                m2_name: registrationType === 'group' ? formData.m2_name : '',
                m2_email: registrationType === 'group' ? formData.m2_email : '',
                m2_mobile: registrationType === 'group' ? formData.m2_mobile : '',
                m2_food: registrationType === 'group' ? formData.m2_food : '',
                m3_name: registrationType === 'group' ? formData.m3_name : '',
                m3_email: registrationType === 'group' ? formData.m3_email : '',
                m3_mobile: registrationType === 'group' ? formData.m3_mobile : '',
                m3_food: registrationType === 'group' ? formData.m3_food : '',
                m4_name: registrationType === 'group' ? formData.m4_name : '',
                m4_email: registrationType === 'group' ? formData.m4_email : '',
                m4_mobile: registrationType === 'group' ? formData.m4_mobile : '',
                m4_food: registrationType === 'group' ? formData.m4_food : '',
                m5_name: registrationType === 'group' ? formData.m5_name : '',
                m5_email: registrationType === 'group' ? formData.m5_email : '',
                m5_mobile: registrationType === 'group' ? formData.m5_mobile : '',
                m5_food: registrationType === 'group' ? formData.m5_food : '',
                // Identifiers
                transactionId: formData.transactionId,
                payment_id: formData.transactionId,
                amount: amount,
                screenshot_url: screenshotUrl
            };

            // Using JSON.stringify as it seems to be what the script expects based on performance
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            // Even if response is no-cors, we try to progress. 
            try {
                const data = await response.json();
                console.log("Sheet update response:", data);
            } catch (e) {
                console.log("Response not JSON or no-cors used");
            }

            // Send Email Confirmation to Leader
            try {
                await emailjs.send(
                    "service_ra38cer",
                    "template_otki01o",
                    {
                        name: formData.m1_name,
                        email: formData.m1_email,
                    },
                    "0rGRpnE7N0ygcnPTj"
                );
                console.log("Email sent successfully");
            } catch (emailErr) {
                console.error("EmailJS error:", emailErr);
            }

            setStage(3);
        } catch (error) {
            console.error('Submission error:', error);
            alert("Registration logic error. However, if you paid, take a screenshot and contact us.");
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
                <div className="flex justify-between items-center mb-12 relative px-4 text-center">
                    {[0, 1, 2, 3].map((num) => (
                        <div key={num} className="flex flex-col items-center gap-2 flex-1 relative z-10">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${stage >= num ? 'bg-tech-blue border-tech-blue text-white shadow-[0_0_15px_rgba(33,150,243,0.5)]' : 'border-white/20 text-white/40'
                                }`}>
                                {stage > num ? <CheckCircle size={20} /> : num === 0 ? <Zap size={18} /> : num}
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-widest ${stage >= num ? 'text-white' : 'text-white/20'
                                }`}>
                                {num === 0 ? 'Type' : num === 1 ? 'Details' : num === 2 ? 'Payment' : 'Complete'}
                            </span>
                        </div>
                    ))}
                    {/* Connecting Lines */}
                    <div className="absolute top-5 left-[12%] right-[12%] h-[2px] bg-white/5 -z-0">
                        <div
                            className="h-full bg-tech-blue transition-all duration-500 shadow-[0_0_10px_rgba(33,150,243,0.5)]"
                            style={{ width: `${(stage) * 33.33}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {stage === 0 && (
                        <motion.div
                            key="stage0"
                            variants={pageVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="glass p-8 md:p-10 rounded-3xl border border-white/10"
                        >
                            <h2 className="text-3xl font-black font-aviano mb-2 text-center uppercase tracking-tighter">Choose Registration Type</h2>
                            <p className="text-gray-400 text-center mb-10 text-sm">Select your journey mode to proceed</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <button
                                    onClick={() => setRegistrationType('solo')}
                                    className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden ${registrationType === 'solo' ? 'border-tech-blue bg-tech-blue/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${registrationType === 'solo' ? 'bg-tech-blue text-white' : 'bg-white/10 text-white/40'}`}>
                                            <UserPlus size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">Solo Registration</h3>
                                        <p className="text-xs text-gray-400">Single entry mission</p>
                                        <div className="mt-4 text-tech-blue font-black text-lg">₹200</div>
                                    </div>
                                    {registrationType === 'solo' && (
                                        <motion.div layoutId="selection-ring" className="absolute inset-0 border-2 border-tech-blue rounded-2xl shadow-[0_0_20px_rgba(33,150,243,0.3)]" />
                                    )}
                                </button>

                                <button
                                    onClick={() => setRegistrationType('group')}
                                    className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden ${registrationType === 'group' ? 'border-tech-blue bg-tech-blue/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                                >
                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${registrationType === 'group' ? 'bg-tech-blue text-white' : 'bg-white/10 text-white/40'}`}>
                                            <Users size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">Group Registration</h3>
                                        <p className="text-xs text-gray-400">Team of 4 + 1 Free Member</p>
                                        <div className="mt-4 text-tech-blue font-black text-lg">₹800</div>
                                    </div>
                                    {registrationType === 'group' && (
                                        <motion.div layoutId="selection-ring" className="absolute inset-0 border-2 border-tech-blue rounded-2xl shadow-[0_0_20px_rgba(33,150,243,0.3)]" />
                                    )}
                                </button>
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={!registrationType}
                                className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-3 group disabled:opacity-30 disabled:grayscale transition-all"
                            >
                                Continue to Details <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    )}

                    {stage === 1 && (
                        <motion.div
                            key="stage1"
                            variants={pageVariants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className="glass p-8 md:p-10 rounded-3xl border border-white/10"
                        >
                            <h2 className="text-3xl font-black font-aviano mb-2 text-center uppercase tracking-tighter">Mission Details</h2>
                            <p className="text-gray-400 text-center mb-8 text-sm">Synchronize operative information.</p>

                            <div className="space-y-4">
                                {registrationType === 'solo' ? (
                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                                <User size={14} /> Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="m1_name"
                                                value={formData.m1_name}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.m1_name ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all font-inter`}
                                                placeholder="John Doe"
                                            />
                                            {errors.m1_name && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.m1_name}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                                <Mail size={14} /> Email ID
                                            </label>
                                            <input
                                                type="email"
                                                name="m1_email"
                                                value={formData.m1_email}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.m1_email ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all font-inter`}
                                                placeholder="johndoe@example.com"
                                            />
                                            {errors.m1_email && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.m1_email}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                                <School size={14} /> College Name
                                            </label>
                                            <input
                                                type="text"
                                                name="m1_college"
                                                value={formData.m1_college}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.m1_college ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all font-inter`}
                                                placeholder="University Name"
                                            />
                                            {errors.m1_college && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.m1_college}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                                <Phone size={14} /> Mobile Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="m1_mobile"
                                                value={formData.m1_mobile}
                                                onChange={handleChange}
                                                className={`w-full bg-white/5 border ${errors.m1_mobile ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all font-inter`}
                                                placeholder="9876543210"
                                            />
                                            {errors.m1_mobile && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.m1_mobile}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                                <Utensils size={14} /> Food Preference
                                            </label>
                                            <select
                                                name="m1_food"
                                                value={formData.m1_food}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all font-inter appearance-none cursor-pointer"
                                            >
                                                <option value="Veg" className="bg-tech-dark text-white">Veg</option>
                                                <option value="Non-Veg" className="bg-tech-dark text-white">Non-Veg</option>
                                            </select>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {/* Member Accordion */}
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <div key={num} className={`rounded-2xl border transition-all duration-300 ${expandedMember === num ? 'border-tech-blue bg-tech-blue/5' : 'border-white/10 bg-white/5'}`}>
                                                <button
                                                    onClick={() => setExpandedMember(expandedMember === num ? null : num)}
                                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${expandedMember === num ? 'bg-tech-blue text-white' : 'bg-white/10 text-white/40'}`}>
                                                            {num}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-bold uppercase tracking-wider">
                                                                {num === 1 ? 'Team Leader' : num === 5 ? 'Member 5 (Free)' : `Member ${num}`}
                                                            </h4>
                                                            {formData[`m${num}_name`] && !expandedMember && <p className="text-[10px] text-tech-blue font-bold truncate max-w-[150px]">{formData[`m${num}_name`]}</p>}
                                                        </div>
                                                    </div>
                                                    {expandedMember === num ? <ChevronUp size={18} className="text-tech-blue" /> : <ChevronDown size={18} className="text-white/20" />}
                                                </button>

                                                <AnimatePresence>
                                                    {expandedMember === num && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="px-6 pb-6 pt-2 space-y-4">
                                                                <div className="space-y-1">
                                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                                                                    <input
                                                                        type="text"
                                                                        name={`m${num}_name`}
                                                                        value={formData[`m${num}_name`]}
                                                                        onChange={handleChange}
                                                                        className={`w-full bg-white/5 border ${errors[`m${num}_name`] ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-2 text-sm focus:border-tech-blue outline-none transition-all font-inter`}
                                                                        placeholder="Name"
                                                                    />
                                                                    {errors[`m${num}_name`] && <p className="text-tech-red text-[9px] font-bold mt-1 tracking-wider">{errors[`m${num}_name`]}</p>}
                                                                </div>

                                                                <div className="grid grid-cols-1 gap-4">
                                                                    <div className="space-y-1">
                                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email ID</label>
                                                                        <input
                                                                            type="email"
                                                                            name={`m${num}_email`}
                                                                            value={formData[`m${num}_email`]}
                                                                            onChange={handleChange}
                                                                            className={`w-full bg-white/5 border ${errors[`m${num}_email`] ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-2 text-sm focus:border-tech-blue outline-none transition-all font-inter`}
                                                                            placeholder="operative@nexus.com"
                                                                        />
                                                                        {errors[`m${num}_email`] && <p className="text-tech-red text-[9px] font-bold mt-1 tracking-wider">{errors[`m${num}_email`]}</p>}
                                                                    </div>

                                                                    {num === 1 && (
                                                                        <div className="space-y-1">
                                                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">College Name</label>
                                                                            <input
                                                                                type="text"
                                                                                name="m1_college"
                                                                                value={formData.m1_college}
                                                                                onChange={handleChange}
                                                                                className={`w-full bg-white/5 border ${errors.m1_college ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-2 text-sm focus:border-tech-blue outline-none transition-all font-inter`}
                                                                                placeholder="Academy Name"
                                                                            />
                                                                            {errors.m1_college && <p className="text-tech-red text-[9px] font-bold mt-1 tracking-wider">{errors.m1_college}</p>}
                                                                        </div>
                                                                    )}

                                                                    <div className="space-y-1">
                                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Mobile Number</label>
                                                                        <input
                                                                            type="tel"
                                                                            name={`m${num}_mobile`}
                                                                            value={formData[`m${num}_mobile`]}
                                                                            onChange={handleChange}
                                                                            className={`w-full bg-white/5 border ${errors[`m${num}_mobile`] ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-2 text-sm focus:border-tech-blue outline-none transition-all font-inter`}
                                                                            placeholder="9876543210"
                                                                        />
                                                                        {errors[`m${num}_mobile`] && <p className="text-tech-red text-[9px] font-bold mt-1 tracking-wider">{errors[`m${num}_mobile`]}</p>}
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-1">
                                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">{num === 1 ? 'Leader' : `Member ${num}`} Food Preference</label>
                                                                    <select
                                                                        name={`m${num}_food`}
                                                                        value={formData[`m${num}_food`]}
                                                                        onChange={handleChange}
                                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-tech-blue outline-none transition-all font-inter appearance-none cursor-pointer"
                                                                    >
                                                                        <option value="Veg" className="bg-tech-dark text-white">Veg</option>
                                                                        <option value="Non-Veg" className="bg-tech-dark text-white">Non-Veg</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={() => setStage(0)}
                                        className="flex-1 py-4 rounded-xl border border-white/10 text-white/40 font-bold uppercase text-[10px] tracking-widest hover:text-white transition-all"
                                    >
                                        Change Type
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="flex-[2] btn-primary py-4 rounded-xl flex items-center justify-center gap-3 group"
                                    >
                                        Proceed to Payment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
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
                            <h2 className="text-3xl font-black font-aviano mb-2 uppercase tracking-tighter">Terminal Authorization</h2>
                            <p className="text-gray-400 mb-8 text-sm">Transfer assets to complete uplink.</p>

                            <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-3xl inline-block relative group">
                                <div className="absolute inset-0 bg-tech-blue/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <img
                                    src={payment_qr}
                                    alt="Payment QR"
                                    className="w-48 h-48 mx-auto relative z-10 rounded-xl shadow-2xl"
                                />
                                <div className="mt-6 text-3xl font-black text-tech-blue drop-shadow-[0_0_15px_rgba(33,150,243,0.4)] uppercase tracking-tighter">
                                    ₹{registrationType === 'solo' ? '200' : '800'}
                                </div>
                                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">
                                    {registrationType === 'group' ? 'Team Bundle (4 Units)' : 'Single Operative Unit'}
                                </p>
                            </div>

                            <div className="space-y-6 text-left max-w-sm mx-auto">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                        <QrCode size={14} /> UPI Transaction ID
                                    </label>
                                    <input
                                        type="text"
                                        name="transactionId"
                                        value={formData.transactionId}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border ${errors.transactionId ? 'border-tech-red/50' : 'border-white/10'} rounded-xl px-4 py-3 focus:border-tech-blue outline-none transition-all font-inter`}
                                        placeholder="Enter 12-digit transaction ID"
                                    />
                                    {errors.transactionId && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.transactionId}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-tech-blue flex items-center gap-2">
                                        <QrCode size={14} /> Payment Screenshot (Max 2MB)
                                    </label>
                                    <div className={`relative border-2 border-dashed ${errors.screenshot ? 'border-tech-red/50' : 'border-white/10'} rounded-xl p-4 transition-all hover:bg-white/5 group`}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                        />
                                        <div className="flex flex-col items-center justify-center gap-2 py-2 text-white/40 group-hover:text-white transition-colors">
                                            {screenshot ? (
                                                <div className="text-center">
                                                    <p className="text-xs font-bold text-tech-blue truncate max-w-[200px]">{screenshot.name}</p>
                                                    <p className="text-[10px] mt-1">Click to change</p>
                                                </div>
                                            ) : (
                                                <>
                                                    <QrCode size={24} />
                                                    <p className="text-xs font-bold uppercase tracking-widest text-center">Click or Drag to Upload Screenshot</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {errors.screenshot && <p className="text-tech-red text-[10px] font-bold mt-1 tracking-wider">{errors.screenshot}</p>}
                                    {screenshotPreview && (
                                        <div className="mt-4 rounded-xl overflow-hidden border border-white/10 max-h-32">
                                            <img src={screenshotPreview} alt="Preview" className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-tech-blue/20"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Finalizing Uplink...
                                        </>
                                    ) : (
                                        <>
                                            Execute Registration <CheckCircle size={20} />
                                        </>
                                    )}
                                </button>

                                <button
                                    onClick={() => setStage(1)}
                                    className="w-full text-white/40 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                                >
                                    Review Details
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
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-24 h-24 bg-tech-blue/20 rounded-full flex items-center justify-center mx-auto mb-8 relative border border-tech-blue/50"
                            >
                                <CheckCircle size={48} className="text-tech-blue shadow-[0_0_20px_rgba(33,150,243,0.5)]" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -inset-4 border border-tech-blue rounded-full"
                                />
                            </motion.div>

                            <h2 className="text-4xl font-black font-aviano mb-4 uppercase tracking-tighter text-tech-blue">Registration Successful!</h2>
                            <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed text-sm">
                                Operative <span className="text-white font-bold">{formData.m1_name}</span>, your entry is securely stored in the nexus core.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8 text-left max-w-sm mx-auto space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[9px] uppercase font-black text-white/30 tracking-widest">Type</p>
                                        <p className="text-tech-blue font-bold text-xs uppercase">{registrationType}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase font-black text-white/30 tracking-widest">Leader</p>
                                        <p className="text-white font-bold text-xs truncate">{formData.m1_name}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase font-black text-white/30 tracking-widest">ID Ref</p>
                                        <p className="text-white font-mono text-xs truncate">{formData.transactionId}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase font-black text-white/30 tracking-widest">Paid</p>
                                        <p className="text-white font-bold text-xs">₹{registrationType === 'solo' ? '200' : '800'}</p>
                                    </div>
                                </div>
                                <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-[9px] uppercase font-black text-white/30 tracking-widest mb-1">Status</p>
                                        <p className="text-tech-blue font-bold tracking-tighter uppercase text-[10px]">Verified Hub Linked</p>
                                    </div>
                                    <Zap className="text-tech-blue animate-pulse" size={20} />
                                </div>
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
