"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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
    Users,
    CheckCircle2
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
        description: "Our car wash services cover both exterior and interior cleaning using safe, effective products that protect your vehicle’s surfaces while leaving it fresh and presentable.",
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
        description: "Detailing goes beyond a standard wash. We focus on deep cleaning, polishing, and finishing that enhances your vehicle’s appearance and preserves its condition over time.",
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

// Reusable Section Container
const Section = ({ className, children, id }: { className?: string, children: React.ReactNode, id?: string }) => (
    <section id={id} className={`py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
        {children}
    </section>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="text-lg font-medium text-white/90">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-white/60 leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

// ----------------------------------------------------------------------
// MAIN PAGE COMPONENT
// ----------------------------------------------------------------------

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-charcoal text-white selection:bg-primary selection:text-white">
            <Navbar />

            {/* 🟢 SECTION 1: HERO */}
            <div className="relative pt-32 pb-20 md:py-40 px-4 md:px-8 overflow-hidden">
                {/* Abstract Background - Replacing Image for now due to quota */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#1a1f2e] to-black z-0" />
                <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        Complete Car Care, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Done Right</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Professional car washing, detailing, and maintenance services designed for Kenyan roads and everyday driving needs.
                        Whether you’re maintaining your personal vehicle or managing a fleet, CarFiti delivers dependable car care with attention to detail, transparency, and convenience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
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

            {/* 🟢 SECTION 2: THE CUSTOMER NEED (PROBLEM FRAMING) */}
            <Section className="relative z-10 bg-white/5 mx-4 md:mx-auto rounded-3xl backdrop-blur-sm border border-white/5 my-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        {/* Placeholder for "Dusty Road / Traffic" Visual */}
                        <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <div className="text-center p-6">
                                <ShieldCheck className="w-16 h-16 text-white/20 mx-auto mb-4" />
                                <p className="text-white/40 font-mono text-sm uppercase tracking-widest">Kenyan Roads Testing Lab</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">We Know What Your Car Goes Through</h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-6">
                            From dusty roads and heavy traffic to long daily commutes, vehicles in Kenya face constant wear. Without proper care, this can affect performance, appearance, and long-term value.
                        </p>
                        <p className="text-white/90 text-lg font-medium leading-relaxed border-l-4 border-primary pl-6">
                            At CarFiti, we focus on practical, professional services that keep your car clean, reliable, and road-ready — without unnecessary upselling.
                        </p>
                    </div>
                </div>
            </Section>

            {/* 🟢 SECTION 3: CORE SERVICES BREAKDOWN */}
            <Section id="services">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
                    <h2 className="text-4xl font-bold">Premium Services</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#121826] rounded-3xl p-8 border border-white/5 hover:border-primary/50 transition-colors group flex flex-col h-full"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 ring-1 ring-white/10`}>
                                {s.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-2 text-white">{s.title}</h3>
                            <p className="text-primary text-sm font-medium mb-4">{s.subheading}</p>

                            <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                                {s.description}
                            </p>

                            <div className="mb-8 pt-6 border-t border-white/5">
                                <span className="block text-xs uppercase text-white/40 tracking-wider mb-2">Ideal For</span>
                                <span className="text-white/80 text-sm">{s.idealFor}</span>
                            </div>

                            <Link
                                href={s.href}
                                className="inline-flex items-center text-white font-semibold group-hover:text-primary transition-colors"
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens When You Choose CarFiti</h2>
                        <p className="text-white/50">A seamless journey from arrival to departure.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                        {[
                            { title: "You Arrive", desc: "Your vehicle needs cleaning, care, or routine attention.", icon: <Clock /> },
                            { title: "We Assess", desc: "Our team checks your vehicle and recommends only what’s necessary.", icon: <Settings /> },
                            { title: "We Service", desc: "Handled carefully using the right tools and products.", icon: <Wrench /> },
                            { title: "You Drive", desc: "Clean, well-maintained, and road-ready.", icon: <CheckCircle2 /> },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-charcoal border-4 border-primary/20 flex items-center justify-center text-primary z-10 mb-6 shadow-xl">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Section>
            </div>

            {/* 🟢 SECTION 5: QUALITY & TRUST ASSURANCE */}
            <Section className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment to Quality</h2>
                    <div className="space-y-6">
                        {[
                            "Trained and attentive service staff",
                            "Proper equipment and professional-grade products",
                            "Clear communication before and after service",
                            "Respect for your time and your vehicle",
                            "Consistent service standards"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>
                                <p className="text-lg text-white/80">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-10 text-white/50 italic border-l-2 border-white/20 pl-4">
                        "CarFiti is built to earn trust through reliable service and honest delivery — every vehicle, every visit."
                    </p>
                </div>
                <div className="h-[500px] rounded-3xl bg-gradient-to-tr from-gray-800 to-gray-900 border border-white/10 relative overflow-hidden flex items-end p-8">
                    {/* Abstract Trust Visual */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="text-5xl font-bold text-white mb-2">100%</div>
                        <div className="text-xl text-white/60">Satisfaction Guarantee</div>
                    </div>
                </div>
            </Section>

            {/* 🟢 SECTION 6: PRICING (OPTIONAL) */}
            <Section className="text-center max-w-4xl">
                <div className="bg-gradient-to-b from-white/10 to-transparent p-12 rounded-[3rem] border border-white/10">
                    <h2 className="text-3xl font-bold mb-6">Clear, Fair Pricing</h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        Our pricing is structured to offer value while maintaining quality. Final costs depend on vehicle size, service type, and specific requirements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 rounded-full bg-white text-charcoal font-bold hover:bg-gray-100 transition-colors">
                            View Packages
                        </button>
                        <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors font-medium">
                            Request a Quote
                        </button>
                    </div>
                </div>
            </Section>

            {/* 🟢 SECTION 7: CORPORATE & FLEET SERVICES */}
            <div className="bg-primary/5 border-y border-primary/10">
                <Section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                            <Briefcase className="w-24 h-24 text-primary/40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="text-white font-bold text-lg">Partner with Us</div>
                                <div className="text-white/60 text-sm">Join 50+ corporate clients</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">For Business</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fleet & Corporate Vehicle Care</h2>
                        <p className="text-white/70 text-lg mb-8 leading-relaxed">
                            We provide structured car care solutions for businesses, institutions, and fleet operators. Our services are designed to minimize downtime, maintain brand image, and ensure consistency.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 mb-8">
                            {["Flexible scheduling", "Multiple vehicle handling", "Reliable timelines", "Dedicated support"].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-white/80">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="text-primary font-bold inline-flex items-center hover:underline">
                            Discuss Fleet Solutions <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>

            {/* 🟢 SECTION 8: FAQS */}
            <Section className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </Section>

            {/* 🟢 SECTION 9: FINAL CTA */}
            <section className="py-32 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let’s Take Care of Your Car</h2>
                        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
                            Choose CarFiti for dependable, professional car care that fits your needs and your schedule.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/booking"
                                className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-transform hover:scale-105 shadow-xl"
                            >
                                Book a Service
                            </Link>
                            <Link
                                href="/contact"
                                className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
