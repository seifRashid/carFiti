"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book or Visit",
    description: "Contact us online or visit our location to get started.",
  },
  {
    number: "02",
    title: "Service Assessment",
    description: "We review your needs and recommend the best solution for your vehicle.",
  },
  {
    number: "03",
    title: "Professional Service",
    description: "Your vehicle is handled by trained staff using proper tools and products.",
  },
  {
    number: "04",
    title: "Final Check & Handover",
    description: "We ensure quality before handing your vehicle back to you.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
            How It Works
          </h2>
          <h3 className="text-4xl font-bold text-charcoal">
            Our Transparent Process
          </h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all h-full">
                  <div className="text-5xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">
                    {step.title}
                  </h4>
                  <p className="text-charcoal/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
