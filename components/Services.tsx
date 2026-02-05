"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, Sparkles, Wrench, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const services = [
  {
    title: "Car Wash Services",
    description: "Thorough exterior and interior cleaning using safe products and efficient processes to keep your car fresh.",
    icon: <Droplets className="w-8 h-8" />,
    cta: "Learn More",
    href: "/services",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Car Detailing",
    description: "Deep cleaning, polishing, and finishing services that restore your vehicle’s appearance and protect surfaces.",
    icon: <Sparkles className="w-8 h-8" />,
    cta: "View Detailing Options",
    href: "/services",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "General Maintenance",
    description: "Routine checks and basic maintenance services to help keep your vehicle running smoothly and safely.",
    icon: <Wrench className="w-8 h-8" />,
    cta: "Schedule Maintenance",
    href: "/services",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Fleet & Corporate",
    description: "Reliable car care solutions for businesses, institutions, and fleet operators with flexible scheduling.",
    icon: <Truck className="w-8 h-8" />,
    cta: "Talk to Us",
    href: "/services",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Express Service",
    description: "Quick 30-minute maintenance and wash for the driver on the go. Efficiency without compromise.",
    icon: <Sparkles className="w-8 h-8" />,
    cta: "Book Express",
    href: "/services",
    color: "bg-red-500/10 text-red-600",
  },
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-auto lg:h-[600vh] bg-white z-10 mt-10">
      {/* REMOVED: overflow-hidden and fixed h-screen constraints */}
      {/* ADDED: min-h-screen to allow expansion if content is tall */}
      <div className="lg:sticky lg:top-0 min-h-screen h-auto flex flex-col justify-center py-12 md:py-20 lg:py-0">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 lg:mb-12">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-wider uppercase text-sm"
            >
              Our Services
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-charcoal"
            >
              Explore our range of premium car care solutions
            </motion.h3>

            {/* Helper text with better spacing */}
            <div className="hidden lg:flex items-center space-x-4 text-charcoal/40 font-medium mt-4">
              <span>Scroll to explore</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Horizontal Scroll Area */}
        {/* ADDED: overflow-x-clip instead of overflow-hidden to allow vertical shadows to show */}
        <div className="hidden lg:flex overflow-x-clip pb-10">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, scale: 1.02 }}
                className="w-[450px] shrink-0 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col h-full min-h-[500px]"
              >
                <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center mb-8`}>
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h4>
                <p className="text-charcoal/60 text-lg mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary font-bold group text-lg mt-auto"
                >
                  <span>{service.cta}</span>
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Vertical Stack Area */}
        <div className="flex flex-col gap-6 px-4 sm:px-6 lg:hidden pb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">{service.title}</h4>
              <p className="text-charcoal/60 text-base mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center text-primary font-bold group"
              >
                <span>{service.cta}</span>
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
