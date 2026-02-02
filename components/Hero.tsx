"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Users, CheckCircle } from "lucide-react";
import React from "react";
import ShinyText from "@/components/ShinyText";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const title = "Professional Car Care You Can Trust";
  const words = title.split(" ");
  
  // Custom theme colors for ShinyText
  const charcoal = "#0f172a";
  const primary = "#2563eb";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Background Gradients (Modern Mesh Style) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-[30%] h-[40%] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      {/* Right Blue Background Column - Kinetic Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute right-0 top-0 w-1/3 h-[150%] bg-primary hidden lg:block z-0" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-32 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
            className="text-center lg:text-left mx-auto lg:mx-0 max-w-2xl lg:max-w-xl"
          >
            {/* Social Proof Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full mb-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col text-left pl-2">
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-charcoal ml-1">5.0</span>
                </div>
                <span className="text-xs text-charcoal/60 font-medium">10k+ Happy Customers</span>
              </div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 lg:mb-8 tracking-tighter perspective-1000">
              <ShinyText
                shineColor="#ffffff"
                speed={3}
              >
                {words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-3 last:mr-0 whitespace-nowrap">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        variants={letterVariants}
                        className={
                          wordIndex === 1 || wordIndex === 2 
                            ? "inline-block text-primary italic" 
                            : "inline-block text-charcoal"
                        }
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </ShinyText>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-charcoal/60 leading-relaxed mb-6 mx-auto lg:mx-0 max-w-md lg:max-w-none"
            >
              Reliable car washing, detailing, and maintenance services designed to keep your vehicle clean, safe, and road-ready.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-10">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.4 }}
                 className="flex items-center space-x-2 text-charcoal/70"
               >
                 <CheckCircle size={20} className="text-primary" />
                 <span className="font-semibold text-sm">Eco-Friendly Products</span>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1.5 }}
                 className="flex items-center space-x-2 text-charcoal/70"
               >
                 <CheckCircle size={20} className="text-primary" />
                 <span className="font-semibold text-sm">Certified Technicians</span>
               </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-bold shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-all"
              >
                <span>Book a Service</span>
              </motion.button>
              <button className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 rounded-2xl text-lg lg:text-xl font-bold text-charcoal hover:bg-light-grey transition-all border border-gray-100 lg:border-none backdrop-blur-sm bg-white/20">
                View Our Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Car Image with Kinetic Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, x: 200, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{ y: y2 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-20 scale-110 sm:scale-125 lg:scale-150 lg:translate-x-12 xl:translate-x-20">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2000&auto=format&fit=crop"
                alt="Clean White Luxury Car"
                className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] lg:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </div>
            
            {/* Mobile/Tablet Blue Accent */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 sm:w-24 h-48 sm:h-64 bg-primary lg:hidden rounded-l-3xl -z-10 opacity-20 sm:opacity-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
