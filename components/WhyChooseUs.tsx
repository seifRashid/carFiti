"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, DollarSign, Users } from "lucide-react";

const valuePoints = [
  {
    title: "Trained and reliable service staff",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Modern tools and professional equipment",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Transparent pricing with no hidden charges",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Convenient service scheduling",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
  {
    title: "Focus on customer satisfaction and safety",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-32 bg-slate-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
              Why Choose CarFiti
            </h2>
            <h3 className="text-4xl font-bold text-charcoal mb-6">
              Your Local Partner in Quality Car Care
            </h3>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              CarFiti is built on a simple promise — to deliver consistent, high-quality automotive care you can rely on. 
              We tailor our services for convenience, value, and peace of mind.
            </p>
            
            <div className="space-y-4">
              {valuePoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm"
                >
                  <div className="bg-primary/10 text-primary p-2 rounded-xl">
                    {point.icon}
                  </div>
                  <span className="font-semibold text-charcoal">{point.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl bg-charcoal aspect-square flex items-center justify-center text-white relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
               <div className="text-center p-12">
                 <ShieldCheck size={100} className="mx-auto mb-6 text-accent" />
                 <h4 className="text-3xl font-bold mb-4">Quality Guaranteed</h4>
                 <p className="text-white/60">We use only professional-grade products and follow strict quality control standards for every vehicle.</p>
               </div>
            </div>
            
            {/* Decoraive elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
