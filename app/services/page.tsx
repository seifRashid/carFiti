"use client";

import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Droplets,
    Sparkles,
    Wrench,
    Settings,
    ShieldCheck,
    Clock,
    ChevronDown,
    ArrowRight,
    Briefcase,
    CheckCircle2,
    Zap
} from "lucide-react";
import Link from "next/link";

// ----------------------------------------------------------------------
// TYPES & DATA
// ----------------------------------------------------------------------

const services = [
    {
        id: "wash",
        title: "Car Wash Services",
        subheading: "Routine cleaning for everyday protection and comfort.",
        description: "Our car wash services cover both exterior and interior cleaning using safe, effective products that protect your vehicle's surfaces while leaving it fresh and presentable.",
        idealFor: "Daily drivers, ride-hailing vehicles, company cars",
        cta: "Book a Car Wash",
        icon: <Droplets className="w-8 h-8" />,
        color: "from-blue-500/20 to-cyan-400/20 text-blue-400",
        href: "/booking?service=wash"
    },
    {
        id: "detail",
        title: "Car Detailing",
        subheading: "Deep care that restores and protects.",
        description: "Detailing goes beyond a standard wash. We focus on deep cleaning, polishing, and finishing that enhances your vehicle's appearance and preserves its condition over time.",
        idealFor: "Vehicle resale prep, long-term ownership, premium care",
        cta: "View Detailing Options",
        icon: <Sparkles className="w-8 h-8" />,
        color: "from-purple-500/20 to-pink-400/20 text-purple-400",
        href: "/booking?service=detail"
    },
    {
        id: "maintenance",
        title: "General Maintenance",
        subheading: "Prevent small issues before they become costly.",
        description: "Our general maintenance services support vehicle reliability through routine checks and basic upkeep, helping you avoid unexpected breakdowns and unnecessary repairs.",
        idealFor: "Regular vehicle upkeep, peace of mind driving",
        cta: "Schedule Maintenance",
        icon: <Wrench className="w-8 h-8" />,
        color: "from-orange-500/20 to-amber-400/20 text-orange-400",
        href: "/booking?service=maintenance"
    }
];

const faqs = [
    {
        question: "Do I need to book in advance?",
        answer: "Bookings are recommended to guarantee your slot, but walk-ins are welcome depending on daily availability."
    },
    {
        question: "How long do services take?",
        answer: "Service duration depends on the selected package. A standard wash takes about 45 mins, while detailing can take 4-8 hours. We provide estimates upfront."
    },
    {
        question: "Do you service corporate vehicles?",
        answer: "Yes, we offer tailored solutions for businesses and fleets with billing accounts and priority scheduling."
    }
];

// ----------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------

const Section = ({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) => (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
        {children}
    </section>
);

const AccordionItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-white/10 last:border-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-white/60 leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    );
};

// ----------------------------------------------------------------------
// MAIN PAGE COMPONENT
// ----------------------------------------------------------------------

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring physics for parallax
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 250]), springConfig);
    const y2 = useSpring(useTransform(scrollY, [0, 1000], [0, -120]), springConfig);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <main ref={containerRef} className="min-h-screen bg-charcoal text-white selection:bg-primary selection:text-white">
            <Navbar />

            {/* 🟢 SECTION 1: HERO */}
            <div className="relative pt-32 pb-20 md:py-40 px-4 md:px-8 overflow-hidden">
                {/* Enhanced Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#1a1f2e] to-black z-0" />
                <motion.div
                    style={{ y: y1, rotate }}
                    className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-primary/10 via-blue-400/5 to-transparent -z-10 skew-x-12 translate-x-32"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"
                />

                {/* Floating elements */}
                <motion.div
                    animate={floatingAnimation}
                    className="absolute top-40 right-20 w-20 h-20 border-2 border-primary/20 rounded-3xl rotate-12 -z-10 hidden lg:block"
                />
                <motion.div
                    animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
                    className="absolute bottom-40 left-32 w-16 h-16 bg-primary/5 rounded-full -z-10 hidden lg:block"
                />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        Complete Car Care, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Done Right</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Professional car washing, detailing, and maintenance services designed for Kenyan roads and everyday driving needs.
                        Whether you're maintaining your personal vehicle or managing a fleet, CarFiti delivers dependable car care with attention to detail, transparency, and convenience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/booking"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            Book a Service
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm"
                        >
                            Talk to Our Team
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* 🟢 SECTION 2: THE CUSTOMER NEED */}
            <Section className="relative z-10 bg-white/5 mx-4 md:mx-auto rounded-3xl backdrop-blur-sm border border-white/5 my-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.4 }}
                                className="text-center p-6"
                            >
                                <ShieldCheck className="w-16 h-16 text-white/20 mx-auto mb-4" />
                                <p className="text-white/40 font-mono text-sm uppercase tracking-widest">Kenyan Roads Testing Lab</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-6"
                        >
                            We Know What Your Car Goes Through
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/70 text-lg leading-relaxed mb-6"
                        >
                            From dusty roads and heavy traffic to long daily commutes, vehicles in Kenya face constant wear. Without proper care, this can affect performance, appearance, and long-term value.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/90 text-lg font-medium leading-relaxed border-l-4 border-primary pl-6"
                        >
                            At CarFiti, we focus on practical, professional services that keep your car clean, reliable, and road-ready — without unnecessary upselling.
                        </motion.p>
                    </div>
                </motion.div>
            </Section>

            {/* 🟢 SECTION 3: CORE SERVICES BREAKDOWN */}
            <Section id="services">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold"
                    >
                        Premium Services
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: i * 0.15,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-[#121826] rounded-3xl p-8 border border-white/5 hover:border-primary/50 transition-all group flex flex-col h-full relative overflow-hidden cursor-pointer"
                        >
                            {/* Animated gradient blob */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{ duration: 5, repeat: Infinity, delay: i * 0.5 }}
                                className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/20 to-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                            />

                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 ring-1 ring-white/10 relative z-10`}
                            >
                                {s.icon}
                            </motion.div>

                            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">{s.title}</h3>
                            <p className="text-primary text-sm font-medium mb-4 relative z-10">{s.subheading}</p>

                            <p className="text-white/60 mb-8 flex-grow leading-relaxed relative z-10">
                                {s.description}
                            </p>

                            <div className="mb-8 pt-6 border-t border-white/5 relative z-10">
                                <span className="block text-xs uppercase text-white/40 tracking-wider mb-2">Ideal For</span>
                                <span className="text-white/80 text-sm">{s.idealFor}</span>
                            </div>

                            <Link
                                href={s.href}
                                className="inline-flex items-center text-white font-semibold group-hover:text-primary transition-colors relative z-10"
                            >
                                {s.cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 🟢 SECTION 4: THE CARFITI SERVICE EXPERIENCE */}
            <div className="bg-white/5 py-24 border-y border-white/5">
                <Section className="py-0">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-4"
                        >
                            What Happens When You Choose CarFiti
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/50"
                        >
                            A seamless journey from arrival to departure.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                        {[
                            { title: "You Arrive", desc: "Your vehicle needs cleaning, care, or routine attention.", icon: <Clock /> },
                            { title: "We Assess", desc: "Our team checks your vehicle and recommends only what's necessary.", icon: <Settings /> },
                            { title: "We Service", desc: "Handled carefully using the right tools and products.", icon: <Wrench /> },
                            { title: "You Drive", desc: "Clean, well-maintained, and road-ready.", icon: <CheckCircle2 /> },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: i * 0.15,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{ y: -5 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-20 h-20 rounded-full bg-charcoal border-4 border-primary/20 flex items-center justify-center text-primary z-10 mb-6 shadow-xl"
                                >
                                    {step.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* 🟢 SECTION 5: QUALITY & TRUST ASSURANCE */}
            <Section className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment to Quality</h2>
                    <div className="space-y-6">
                        {[
                            "Trained and attentive service staff",
                            "Proper equipment and professional-grade products",
                            "Clear communication before and after service",
                            "Respect for your time and your vehicle",
                            "Consistent service standards"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </motion.div>
                                <p className="text-lg text-white/80">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 text-white/50 italic border-l-2 border-white/20 pl-4"
                    >
                        "CarFiti is built to earn trust through reliable service and honest delivery — every vehicle, every visit."
                    </motion.p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="h-[500px] rounded-3xl bg-gradient-to-tr from-gray-800 to-gray-900 border border-white/10 relative overflow-hidden flex items-end p-8 group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                    />
                    <div className="relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="text-5xl font-bold text-white mb-2"
                        >
                            100%
                        </motion.div>
                        <div className="text-xl text-white/60">Satisfaction Guarantee</div>
                    </div>
                </motion.div>
            </Section>

            {/* 🟢 SECTION 6: PRICING */}
            <Section className="text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-b from-white/10 to-transparent p-12 rounded-[3rem] border border-white/10 relative overflow-hidden group"
                >
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
                    />
                    <h2 className="text-3xl font-bold mb-6 relative z-10">Clear, Fair Pricing</h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto relative z-10">
                        Our pricing is structured to offer value while maintaining quality. Final costs depend on vehicle size, service type, and specific requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-white text-charcoal font-bold hover:bg-gray-100 transition-colors"
                        >
                            View Packages
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors font-medium"
                        >
                            Request a Quote
                        </motion.button>
                    </div>
                </motion.div>
            </Section>

            {/* 🟢 SECTION 7: CORPORATE & FLEET SERVICES */}
            <div className="bg-primary/5 border-y border-primary/10">
                <Section className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 order-2 md:order-1"
                    >
                        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group">
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Briefcase className="w-24 h-24 text-primary/40" />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="text-white font-bold text-lg">Partner with Us</div>
                                <div className="text-white/60 text-sm">Join 50+ corporate clients</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 order-1 md:order-2"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">For Business</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fleet & Corporate Vehicle Care</h2>
                        <p className="text-white/70 text-lg mb-8 leading-relaxed">
                            We provide structured car care solutions for businesses, institutions, and fleet operators. Our services are designed to minimize downtime, maintain brand image, and ensure consistency.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mb-8">
                            {["Flexible scheduling", "Multiple vehicle handling", "Reliable timelines", "Dedicated support"].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-2 text-white/80"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <Link href="/contact" className="text-primary font-bold inline-flex items-center hover:underline group">
                            Discuss Fleet Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </Section>
            </div>

            {/* 🟢 SECTION 8: FAQS */}
            <Section className="max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-10 text-center"
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} index={index} />
                    ))}
                </div>
            </Section>

            {/* 🟢 SECTION 9: FINAL CTA */}
            <section className="py-32 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
                >
                    {/* Decorative circles */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"
                    />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let's Take Care of Your Car</h2>
                        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Choose CarFiti for dependable, professional car care that fits your needs and your schedule.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/booking"
                                    className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-transform shadow-xl inline-block"
                                >
                                    Book a Service
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="/contact"
                                    className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors inline-block"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
