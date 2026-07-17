"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Mail, CheckCircle, Send, ExternalLink } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    childAge: "",
    program: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const programsOptions = ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Day Care"];

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.name.trim()) tempErrors.name = "Name is required.";
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s-+]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!form.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!form.childAge.trim()) tempErrors.childAge = "Child age is required.";
    if (!form.program) tempErrors.program = "Please select a program.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        childAge: "",
        program: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="admissions" className="py-20 md:py-28 bg-brand-lavender relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute bottom-10 left-[-5%] w-72 h-72 bg-brand-purple/10 blob-shape-1 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form & Info */}
          <div className="lg:col-span-7">
            
            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-lg border border-brand-purple/10 mb-8">
              <h2 className="text-3xl sm:text-4xl font-fredoka font-bold text-brand-purple mb-6">
                Admission Enquiry
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-100 rounded-2xl text-[#FF3B30] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-fredoka font-bold text-brand-purple">Call Us</h3>
                    <p className="text-base font-bold text-brand-dark mt-1 hover:text-brand-purple transition-colors">
                      <a href="tel:9611123049">+91 9611123049</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-2xl text-blue-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-fredoka font-bold text-brand-purple">Email Us</h3>
                    <p className="text-base font-bold text-brand-dark mt-1 hover:text-brand-purple transition-colors">
                      <a href="mailto:info@kidzeekiadbbagalur.com">info@kidzeekiadbbagalur.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-brand-lavender" />

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-2xl text-[#34C759] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-fredoka font-bold text-brand-purple">Our Campus</h3>
                  <p className="text-sm sm:text-base font-semibold text-brand-dark/80 mt-1 leading-relaxed">
                    58/7, Behind Airports Authority of India Residential Colony, KIADB Bagalur, Huvinayakanahalli, Bengaluru, Karnataka 562149
                  </p>
                </div>
              </div>
            </div>

            {/* Admission Form Card */}
            <div className="bg-white p-8 rounded-[40px] shadow-lg border border-brand-purple/10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label htmlFor="name" className="text-xs font-bold text-brand-purple mb-1 ml-2 uppercase tracking-wider">
                          Parent&apos;s Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="px-4 py-3 bg-brand-lavender/30 border-2 border-brand-lavender focus:border-brand-purple rounded-2xl focus:outline-none text-sm font-semibold transition-colors"
                        />
                        {errors.name && <span className="text-xs text-[#FF3B30] mt-1 ml-2 font-semibold">{errors.name}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="text-xs font-bold text-brand-purple mb-1 ml-2 uppercase tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className="px-4 py-3 bg-brand-lavender/30 border-2 border-brand-lavender focus:border-brand-purple rounded-2xl focus:outline-none text-sm font-semibold transition-colors"
                        />
                        {errors.phone && <span className="text-xs text-[#FF3B30] mt-1 ml-2 font-semibold">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="text-xs font-bold text-brand-purple mb-1 ml-2 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="yourname@domain.com"
                          className="px-4 py-3 bg-brand-lavender/30 border-2 border-brand-lavender focus:border-brand-purple rounded-2xl focus:outline-none text-sm font-semibold transition-colors"
                        />
                        {errors.email && <span className="text-xs text-[#FF3B30] mt-1 ml-2 font-semibold">{errors.email}</span>}
                      </div>

                      {/* Child Age */}
                      <div className="flex flex-col">
                        <label htmlFor="childAge" className="text-xs font-bold text-brand-purple mb-1 ml-2 uppercase tracking-wider">
                          Child&apos;s Age *
                        </label>
                        <input
                          type="text"
                          id="childAge"
                          name="childAge"
                          value={form.childAge}
                          onChange={handleChange}
                          placeholder="e.g. 3 years"
                          className="px-4 py-3 bg-brand-lavender/30 border-2 border-brand-lavender focus:border-brand-purple rounded-2xl focus:outline-none text-sm font-semibold transition-colors"
                        />
                        {errors.childAge && <span className="text-xs text-[#FF3B30] mt-1 ml-2 font-semibold">{errors.childAge}</span>}
                      </div>
                    </div>

                    {/* Program Interest */}
                    <div className="flex flex-col">
                      <label htmlFor="program" className="text-xs font-bold text-brand-purple mb-1 ml-2 uppercase tracking-wider">
                        Program Interested *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        className="px-4 py-3 bg-brand-lavender/30 border-2 border-brand-lavender focus:border-brand-purple rounded-2xl focus:outline-none text-sm font-semibold transition-colors"
                      >
                        <option value="">Select learning program</option>
                        {programsOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.program && <span className="text-xs text-[#FF3B30] mt-1 ml-2 font-semibold">{errors.program}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="text-xs font-bold text-brand-purple mb-1 ml-2 uppercase tracking-wider">
                        Additional Message / Questions
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Write any questions or comments here..."
                        className="px-4 py-3 bg-brand-lavender/30 border-2 border-brand-lavender focus:border-brand-purple rounded-2xl focus:outline-none text-sm font-semibold transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-brand-purple hover:bg-brand-purple/95 disabled:bg-brand-purple/50 text-white font-fredoka font-bold text-base rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>Submitting Enquiry...</>
                      ) : (
                        <>
                          Submit Admission Enquiry
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 120, delay: 0.15 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-[#34C759] mb-6 border-2 border-dashed border-[#34C759]/50"
                    >
                      <CheckCircle className="w-10 h-10 fill-[#34C759]/10" />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-fredoka font-bold text-brand-purple mb-3">
                      Enquiry Submitted Successfully!
                    </h3>

                    <p className="text-sm sm:text-base text-brand-dark/75 leading-relaxed max-w-md mb-8 font-semibold">
                      Thank you for your interest in Kidzee KIADB Bagalur. Our admissions officer will contact you within the next 24 business hours to guide you through the enrollment process.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-brand-lavender hover:bg-brand-purple hover:text-white text-brand-purple font-fredoka font-bold rounded-full text-sm transition-colors duration-200"
                    >
                      Submit Another Response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-5 w-full h-full lg:sticky lg:top-28">
            <div className="bg-white p-4 rounded-[40px] shadow-lg border border-brand-purple/10 h-[400px] lg:h-[580px] w-full flex flex-col justify-between">
              {/* Responsive Iframe Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.225134707248!2d77.6883122!3d13.1452555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b17af47f597%3A0xb2afc00f2e243aab!2sKIDZEE%20-%20KIADB!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "28px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kidzee Preschool KIADB Bagalur Google Maps Location Map"
                className="flex-grow shadow-inner border border-brand-lavender/30"
              />
              
              <div className="mt-4 px-2 flex items-center justify-between">
                <div>
                  <h3 className="font-fredoka font-bold text-sm text-brand-purple">Kidzee KIADB Bagalur</h3>
                  <p className="text-xs text-brand-dark/65 font-bold mt-0.5">58/7, Behind AAIRC, KIADB Bagalur, Huvinayakanahalli</p>
                </div>
                
                {/* Direct Google Maps Link */}
                <a
                  href="https://maps.app.goo.gl/41LAkU94TZUYVx8LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-brand-purple hover:bg-brand-purple/90 text-white px-3 py-1.5 rounded-full text-xs font-fredoka font-bold shadow-sm transition-all hover:scale-105"
                >
                  <span>Open Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
