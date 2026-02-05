"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, Target, Heart, Sparkles, Award, TrendingUp } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring physics for parallax
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const y1 = useSpring(useTransform(scrollY, [0, 1000], [0, 300]), springConfig);
    const y2 = useSpring(useTransform(scrollY, [0, 1000], [0, -150]), springConfig);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0, rotateX: 90 },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100
            }
        }
    };

    const floatingAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <main ref={containerRef} className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">
                {/* Enhanced Parallax Background Elements */}
                <motion.div
                    style={{ y: y1, rotate }}
                    className="absolute top-0 right-0 w-[40%] h-[120%] bg-gradient-to-bl from-primary/10 via-blue-400/5 to-transparent -z-10 skew-x-12 translate-x-32 origin-top-right"
                />
                <motion.div
                    style={{ y: y2, scale }}
                    className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"
                />

                {/* Floating decorative elements */}
                <motion.div
                    animate={floatingAnimation}
                    className="absolute top-40 right-20 w-16 h-16 border-2 border-primary/20 rounded-2xl rotate-12 -z-10 hidden lg:block"
                />
                <motion.div
                    animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                    className="absolute bottom-40 left-32 w-12 h-12 bg-primary/5 rounded-full -z-10 hidden lg:block"
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center max-w-4xl mx-auto mb-20 perspective-1000"
                    >
                        <motion.h1
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl md:text-7xl font-black text-charcoal mb-8 tracking-tight leading-[1.1]"
                        >
                            {["Driven", "by", "Passion,", "Defined", "by", "Quality"].map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariants}
                                    className={`inline-block mr-4 ${word.includes("Passion") || word.includes("Quality") ? "text-primary" : ""}`}
                                >
                                    {word}
                                    {i === 2 && <br className="hidden md:block" />}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-lg md:text-2xl text-charcoal/60 leading-relaxed max-w-2xl mx-auto"
                        >
                            We are CarFiti, Nairobi's premier automotive care specialists. We believe that every journey deserves a clean start.
                        </motion.p>

                        {/* Animated stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.3 }}
                            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                        >
                            {[
                                { value: "10k+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
                                { value: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
                                { value: "98%", label: "Satisfaction Rate", icon: <TrendingUp className="w-6 h-6" /> }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.5 + (i * 0.1), type: "spring", stiffness: 200 }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-charcoal mb-1">{stat.value}</div>
                                    <div className="text-sm text-charcoal/60">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Mission & Vision Grid - Enhanced 3D Reveal */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -80, rotateY: 25, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-light-grey p-12 rounded-[50px] border border-gray-100 relative overflow-hidden group cursor-pointer"
                        >
                            {/* Animated gradient blob */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                            />

                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 relative z-10"
                            >
                                <Target size={32} />
                            </motion.div>

                            <h3 className="text-3xl font-bold text-charcoal mb-6 relative z-10">Our Mission</h3>
                            <p className="text-charcoal/70 leading-relaxed text-lg relative z-10">
                                To elevate the standard of car care in Kenya by providing reliable, eco-friendly, and convenient services that give our customers peace of mind and pride in their vehicles.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 80, rotateY: -25, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-charcoal p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden group cursor-pointer"
                        >
                            {/* Animated gradient blob */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
                            />

                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-8 relative z-10"
                            >
                                <Heart size={32} />
                            </motion.div>

                            <h3 className="text-3xl font-bold mb-6 relative z-10">Our Core Values</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Integrity in every transaction",
                                    "Excellence in every detail",
                                    "Respect for our customers' time",
                                    "Commitment to environmental safety"
                                ].map((value, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1), type: "spring", stiffness: 100 }}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center space-x-4 text-white/90 text-lg"
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <CheckCircle2 size={24} className="text-primary shrink-0" />
                                        </motion.div>
                                        <span>{value}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Team Section - Spring-loaded reveals */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold tracking-wider uppercase text-sm mb-4"
                            >
                                Our Team
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-charcoal"
                            >
                                Experts Behind the Shine
                            </motion.h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                            {[
                                {
                                    name: "David Kimani",
                                    role: "Head Operations Manager",
                                    image: "https://images.unsplash.com/photo-1572561300721-fcdedf177ccb?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    name: "Sarah Wanjiku",
                                    role: "Lead Detailing Specialist",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    name: "James Omondi",
                                    role: "Maintenance Expert",
                                    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800"
                                }
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 80, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        delay: i * 0.2,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 15
                                    }}
                                    whileHover={{ y: -15, scale: 1.02 }}
                                    className="group relative overflow-hidden rounded-[40px] shadow-lg cursor-pointer"
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <motion.img
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.6 }}
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                    {/* Sparkle effect on hover */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        className="absolute top-4 right-4 text-primary"
                                    >
                                        <Sparkles size={24} />
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                        className="absolute bottom-0 left-0 w-full p-8"
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileHover={{ width: 48 }}
                                            transition={{ duration: 0.4 }}
                                            className="h-1 bg-primary mb-4"
                                        />
                                        <p className="text-white font-bold text-2xl mb-1">{member.name}</p>
                                        <p className="text-primary font-medium text-base tracking-wide">{member.role}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
