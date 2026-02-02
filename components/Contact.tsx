"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-light-grey/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-charcoal p-12 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-8">Ready to Take Care of Your Car?</h2>
              <p className="text-white/60 mb-12 text-lg">
                Whether you need a quick wash, detailed care, or regular maintenance, CarFiti is ready to serve you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Call Us</p>
                    <p className="text-lg font-semibold">+254 700 000000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Email Us</p>
                    <p className="text-lg font-semibold">contact@carfiti.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Visit Us</p>
                    <p className="text-lg font-semibold">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-xl text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Business Hours</p>
                    <p className="text-lg font-semibold">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 lg:p-16">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-light-grey rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="+254..."
                      className="w-full px-5 py-4 bg-light-grey rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Service Type</label>
                  <select className="w-full px-5 py-4 bg-light-grey rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option>Car Wash</option>
                    <option>Car Detailing</option>
                    <option>General Maintenance</option>
                    <option>Fleet Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-2">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your car needs..."
                    className="w-full px-5 py-4 bg-light-grey rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
                >
                  <span>Send Request</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
