"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
    Car,
    Calendar,
    User,
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Sparkles,
    Wrench,
    Droplets,
    Truck,
    Bike
} from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// TYPES & DATA
// ----------------------------------------------------------------------

type BookingData = {
    vehicleType: string;
    vehicleModel: string;
    services: string[];
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    notes: string;
};

const initialData: BookingData = {
    vehicleType: "",
    vehicleModel: "",
    services: [],
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: ""
};

const vehicleTypes = [
    { id: "sedan", label: "Sedan / Hatch", icon: <Car /> },
    { id: "suv", label: "SUV / 4x4", icon: <Car className="scale-125" /> },
    { id: "truck", label: "Truck / Van", icon: <Truck /> },
    { id: "bike", label: "Motorcycle", icon: <Bike /> },
];

const serviceOptions = [
    { id: "wash", label: "Premium Wash", icon: <Droplets />, price: "Starting KES 500" },
    { id: "detail", label: "Full Detailing", icon: <Sparkles />, price: "Starting KES 3,500" },
    { id: "maintenance", label: "Maintenance", icon: <Wrench />, price: "Custom Quote" },
];

const steps = [
    { id: 1, title: "Vehicle", icon: <Car className="w-5 h-5" /> },
    { id: 2, title: "Services", icon: <Sparkles className="w-5 h-5" /> },
    { id: 3, title: "Schedule", icon: <Calendar className="w-5 h-5" /> },
    { id: 4, title: "Details", icon: <User className="w-5 h-5" /> },
];

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

const StepIndicator = ({ currentStep }: { currentStep: number }) => (
    <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto px-4">
        {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 
            ${currentStep >= step.id
                            ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                            : "bg-charcoal border-white/20 text-white/40"}`}
                >
                    {currentStep > step.id ? <CheckCircle2 className="w-6 h-6" /> : step.icon}
                </div>
                <span className={`mt-2 text-xs font-medium uppercase tracking-wider transition-colors ${currentStep >= step.id ? "text-white" : "text-white/30"}`}>
                    {step.title}
                </span>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                    <div className="absolute top-5 left-1/2 w-[calc(100%+2rem)] h-0.5 -z-10 bg-white/10">
                        <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: currentStep > step.id ? "100%" : "0%" }}
                        />
                    </div>
                )}
            </div>
        ))}
    </div>
);

export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<BookingData>(initialData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const updateData = (field: keyof BookingData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleService = (id: string) => {
        setFormData(prev => {
            const services = prev.services.includes(id)
                ? prev.services.filter(s => s !== id)
                : [...prev.services, id];
            return { ...prev, services };
        });
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setIsSubmitted(true), 1500);
    };

    return (
        <main className="min-h-screen bg-charcoal text-white selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Book Your Service
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60"
                    >
                        Professional car care, scheduled around you.
                    </motion.p>
                </div>

                {!isSubmitted ? (
                    <>
                        <StepIndicator currentStep={currentStep} />

                        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
                            <form onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait">

                                    {/* STEP 1: VEHICLE */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                                <Car className="text-primary" /> Vehicle Details
                                            </h2>

                                            <div className="space-y-4">
                                                <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">Vehicle Type</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {vehicleTypes.map(type => (
                                                        <button
                                                            key={type.id}
                                                            type="button"
                                                            onClick={() => updateData("vehicleType", type.id)}
                                                            className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all
                                ${formData.vehicleType === type.id
                                                                    ? "bg-primary text-white border-primary shadow-lg scale-[1.02]"
                                                                    : "bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:bg-white/10"}`}
                                                        >
                                                            {type.icon}
                                                            <span className="font-semibold">{type.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">Make & Model</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Toyota Prado, Subaru Outback..."
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                    value={formData.vehicleModel}
                                                    onChange={(e) => updateData("vehicleModel", e.target.value)}
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 2: SERVICES */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                                <Sparkles className="text-primary" /> Select Services
                                            </h2>

                                            <div className="space-y-4">
                                                {serviceOptions.map(option => (
                                                    <div
                                                        key={option.id}
                                                        onClick={() => toggleService(option.id)}
                                                        className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all
                                ${formData.services.includes(option.id)
                                                                ? "bg-primary/20 border-primary shadow-[inset_0_0_0_1px_rgba(37,99,235,1)]"
                                                                : "bg-white/5 border-white/10 hover:border-white/30"}`}
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className={`p-3 rounded-lg ${formData.services.includes(option.id) ? "bg-primary text-white" : "bg-white/10 text-white/50"}`}>
                                                                {option.icon}
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-lg">{option.label}</div>
                                                                <div className="text-sm text-white/50">{option.price}</div>
                                                            </div>
                                                        </div>
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                                 ${formData.services.includes(option.id) ? "border-primary bg-primary text-white" : "border-white/30"}`}>
                                                            {formData.services.includes(option.id) && <CheckCircle2 size={16} />}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 3: SCHEDULE */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                                <Calendar className="text-primary" /> Preferred Time
                                            </h2>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">Date</label>
                                                    <input
                                                        type="date"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [&::-webkit-calendar-picker-indicator]:invert"
                                                        value={formData.date}
                                                        onChange={(e) => updateData("date", e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">Time</label>
                                                    <select
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [&>option]:bg-charcoal"
                                                        value={formData.time}
                                                        onChange={(e) => updateData("time", e.target.value)}
                                                    >
                                                        <option value="">Select Time</option>
                                                        <option value="08:00">08:00 AM</option>
                                                        <option value="10:00">10:00 AM</option>
                                                        <option value="12:00">12:00 PM</option>
                                                        <option value="14:00">02:00 PM</option>
                                                        <option value="16:00">04:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 mt-0.5">!</div>
                                                <p className="text-sm text-blue-200">
                                                    We will contact you to confirm the exact slot availability. This is a request, not a confirmed booking.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 4: CONTACT & DETAILS */}
                                    {currentStep === 4 && (
                                        <motion.div
                                            key="step4"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                                <User className="text-primary" /> Contact Details
                                            </h2>

                                            <div className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                    value={formData.name}
                                                    onChange={(e) => updateData("name", e.target.value)}
                                                    required
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                    value={formData.email}
                                                    onChange={(e) => updateData("email", e.target.value)}
                                                    required
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                    value={formData.phone}
                                                    onChange={(e) => updateData("phone", e.target.value)}
                                                    required
                                                />
                                                <textarea
                                                    rows={3}
                                                    placeholder="Any special requests or notes?"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                                                    value={formData.notes}
                                                    onChange={(e) => updateData("notes", e.target.value)}
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                                {/* NAVIGATION BUTTONS */}
                                <div className="mt-10 flex justify-between items-center border-t border-white/10 pt-6">
                                    {currentStep > 1 ? (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="flex items-center text-white/60 hover:text-white transition-colors font-medium px-4 py-2"
                                        >
                                            <ChevronLeft size={20} className="mr-1" /> Back
                                        </button>
                                    ) : (
                                        <div /> /* Spacer */
                                    )}

                                    {currentStep < 4 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="flex items-center bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-bold transition-all shadow-lg shadow-primary/20"
                                        >
                                            Next Step <ChevronRight size={20} className="ml-1" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="flex items-center bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white rounded-full px-8 py-3 font-bold transition-all shadow-lg shadow-primary/20"
                                        >
                                            Confirm Booking <CheckCircle2 size={20} className="ml-2" />
                                        </button>
                                    )}
                                </div>

                            </form>
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl"
                    >
                        <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Thank you, <b>{formData.name}</b>. We have received your booking request for a <b>{formData.vehicleModel || "Vehicle"}</b>. Our team will contact you shortly at <b>{formData.phone}</b> to confirm your slot.
                        </p>
                        <Link href="/" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                            Return to Home
                        </Link>
                    </motion.div>
                )}
            </div>
            <Footer />
        </main>
    );
}
