"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Users, ShieldCheck, Target, Heart } from "lucide-react";

export default function AboutPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">
                {/* Parallax Background Elements */}
                <motion.div
                    style={{ y: y1, rotate }}
                    className="absolute top-0 right-0 w-[40%] h-[120%] bg-gradient-to-bl from-primary/5 to-transparent -z-10 skew-x-12 translate-x-32 origin-top-right"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute top-20 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl -z-10"
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
                            <span className="inline-block mr-4">Driven</span>
                            <span className="inline-block mr-4">by</span>
                            <span className="inline-block text-primary mr-4">Passion,</span>
                            <br className="hidden md:block" />
                            <span className="inline-block mr-4">Defined</span>
                            <span className="inline-block mr-4">by</span>
                            <span className="inline-block text-primary">Quality</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-lg md:text-2xl text-charcoal/60 leading-relaxed max-w-2xl mx-auto"
                        >
                            We are CarFiti, Nairobi's premier automotive care specialists. We believe that every journey deserves a clean start.
                        </motion.p>
                    </motion.div>

                    {/* Mission & Vision Grid - 3D Reveal */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -50, rotateY: 15 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-light-grey p-12 rounded-[50px] border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/5 transition-colors duration-500" />
                            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-charcoal mb-6">Our Mission</h3>
                            <p className="text-charcoal/70 leading-relaxed text-lg">
                                To elevate the standard of car care in Kenya by providing reliable, eco-friendly, and convenient services that give our customers peace of mind and pride in their vehicles.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, rotateY: -15 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="bg-charcoal p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/30 transition-colors duration-500" />
                            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
                            <ul className="space-y-4">
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
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-center space-x-4 text-white/90 text-lg"
                                    >
                                        <CheckCircle2 size={24} className="text-primary shrink-0" />
                                        <span>{value}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Team Section */}
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
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.15,
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 15
                                    }}
                                    whileHover={{ y: -10 }}
                                    className="group relative overflow-hidden rounded-[40px] shadow-lg"
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-12 h-1 bg-primary mb-4 w-0 group-hover:w-12 transition-all duration-500" />
                                        <p className="text-white font-bold text-2xl mb-1">{member.name}</p>
                                        <p className="text-primary font-medium text-base tracking-wide">{member.role}</p>
                                    </div>
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
