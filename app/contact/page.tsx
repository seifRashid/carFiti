"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
    MessageSquare,
    Upload,
    X
} from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// TYPES & DATA
// ----------------------------------------------------------------------

type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    inquiryType: string;
    message: string;
    consent: boolean;
};

const initialFormData: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    consent: false
};

const inquiryTypes = [
    { value: "", label: "Select inquiry type" },
    { value: "general", label: "General Question" },
    { value: "service", label: "Service Inquiry" },
    { value: "corporate", label: "Corporate/Fleet Request" },
    { value: "feedback", label: "Feedback" },
];

const contactMethods = [
    {
        icon: <Phone className="w-6 h-6" />,
        title: "Phone",
        value: "+254 712 345 678",
        subtext: "Mon-Sat, 8AM-6PM",
        href: "tel:+254712345678"
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        value: "hello@carfiti.co.ke",
        subtext: "We reply within 24 hours",
        href: "mailto:hello@carfiti.co.ke"
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "WhatsApp",
        value: "+254 712 345 678",
        subtext: "Quick responses",
        href: "https://wa.me/254712345678"
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        title: "Location",
        value: "Westlands, Nairobi",
        subtext: "Visit our service center",
        href: "https://maps.google.com"
    }
];

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileName, setFileName] = useState<string>("");

    const updateField = (field: keyof ContactFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setIsSubmitted(true), 1000);
    };

    return (
        <main className="min-h-screen bg-charcoal text-white selection:bg-primary selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
                    >
                        Have a question or need assistance? We're here to help. Reach out and we'll get back to you promptly.
                    </motion.p>
                </div>

                {!isSubmitted ? (
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

                        {/* Contact Form - 2/3 width */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Send className="text-primary" /> Send us a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                value={formData.name}
                                                onChange={(e) => updateField("name", e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+254 712 345 678"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                                value={formData.phone}
                                                onChange={(e) => updateField("phone", e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                            value={formData.email}
                                            onChange={(e) => updateField("email", e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">
                                            Inquiry Type *
                                        </label>
                                        <select
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary [&>option]:bg-charcoal"
                                            value={formData.inquiryType}
                                            onChange={(e) => updateField("inquiryType", e.target.value)}
                                            required
                                        >
                                            {inquiryTypes.map(type => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">
                                            Your Message *
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us how we can help you..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-colors"
                                            value={formData.message}
                                            onChange={(e) => updateField("message", e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-white/70 uppercase tracking-wide">
                                            Attach File (Optional)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="file-upload"
                                                className="hidden"
                                                onChange={handleFileChange}
                                                accept="image/*,.pdf,.doc,.docx"
                                            />
                                            <label
                                                htmlFor="file-upload"
                                                className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 border-dashed rounded-xl px-4 py-4 text-white/60 hover:border-primary/50 hover:bg-white/10 cursor-pointer transition-all"
                                            >
                                                <Upload className="w-5 h-5" />
                                                <span>{fileName || "Click to upload (images, PDF, documents)"}</span>
                                            </label>
                                            {fileName && (
                                                <button
                                                    type="button"
                                                    onClick={() => setFileName("")}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 checked:bg-primary focus:ring-primary"
                                            checked={formData.consent}
                                            onChange={(e) => updateField("consent", e.target.checked)}
                                            required
                                        />
                                        <label htmlFor="consent" className="text-sm text-white/60 leading-relaxed">
                                            I agree to CarFiti's privacy policy and consent to the collection and use of my information for the purpose of responding to my inquiry.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white rounded-xl px-8 py-4 font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                    >
                                        Send Message <Send size={20} />
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                        {/* Contact Methods - 1/3 width */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl"
                            >
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <a
                                            key={index}
                                            href={method.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all group"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                {method.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-wider text-white/40 mb-1">
                                                    {method.title}
                                                </div>
                                                <div className="font-semibold text-white mb-1">
                                                    {method.value}
                                                </div>
                                                <div className="text-sm text-white/50">
                                                    {method.subtext}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Trust Signals */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-primary/20 to-blue-500/10 backdrop-blur-sm border border-primary/20 rounded-3xl p-6 shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <h3 className="text-lg font-bold">Quick Response</h3>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed mb-4">
                                    We typically respond within 2-4 hours during business hours. For urgent matters, please call us directly.
                                </p>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="text-white/60">Professional support team</span>
                                </div>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl"
                            >
                                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/booking"
                                        className="block w-full bg-primary/20 hover:bg-primary text-white rounded-lg px-4 py-3 font-semibold text-center transition-colors"
                                    >
                                        Book a Service
                                    </Link>
                                    <Link
                                        href="/services"
                                        className="block w-full bg-white/5 hover:bg-white/10 text-white rounded-lg px-4 py-3 font-semibold text-center transition-colors border border-white/10"
                                    >
                                        View Services
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-xl mx-auto text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-2xl"
                    >
                        <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={48} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Thank you for reaching out, <b>{formData.name}</b>. We've received your message and will get back to you at <b>{formData.email}</b> within 24 hours.
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
