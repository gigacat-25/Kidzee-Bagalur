"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/", ""); // converts "/#about" to "#about"
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-brand-purple text-white pt-16 pb-8 relative overflow-hidden border-t-4 border-brand-yellow">
      {/* Decorative vectors */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-5">
        <svg className="w-full h-full fill-current text-white" viewBox="0 0 100 100">
          <circle cx="90" cy="10" r="8" />
          <circle cx="10" cy="90" r="10" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Company About & Socials */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/#home" onClick={(e) => handleScrollTo(e, "/#home")} className="flex items-center gap-2 cursor-pointer">
              <Image
                src="/kidzee-logo.png"
                alt="Kidzee Logo"
                width={124}
                height={40}
                className="w-auto h-10 object-contain brightness-110 filter drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]"
              />
              <span className="text-white/80 font-fredoka text-sm font-medium self-end mb-0.5 ml-1">
                KIADB Bagalur
              </span>
            </Link>
            <p className="text-sm font-semibold text-brand-lavender leading-relaxed">
              Backed by Zee Learn Ltd, Kidzee is the pioneer and trendsetter of Early Childhood Care and Education (ECCE) in India with over 2,500 centres nationwide.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Kidzee KIADB Bagalur on ${soc.label}`}
                  className="p-2.5 bg-white/10 hover:bg-brand-yellow hover:text-brand-purple rounded-full transition-all duration-200"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-fredoka font-bold text-lg text-brand-yellow tracking-wider">
              Our Programs
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold text-brand-lavender">
              {["Playgroup", "Nursery", "Junior KG", "Senior KG", "Day Care"].map((item) => (
                <li key={item}>
                  <Link
                    href="/#programmes"
                    onClick={(e) => handleScrollTo(e, "/#programmes")}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {item} Class
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-fredoka font-bold text-lg text-brand-yellow tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold text-brand-lavender">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Pedagogy", href: "/#pentemind" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Testimonials", href: "/#reviews" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-brand-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-fredoka font-bold text-lg text-brand-yellow tracking-wider">
              Contact Details
            </h3>
            <ul className="space-y-3.5 text-sm font-semibold text-brand-lavender">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-brand-yellow mt-0.5" />
                <span className="leading-relaxed">
                  58/7, Behind Airports Authority of India Residential Colony, KIADB Bagalur, Huvinayakanahalli, Bengaluru, 562149
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow" />
                <a href="tel:9611123049" className="hover:text-brand-yellow transition-colors">
                  +91 9611123049
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-yellow" />
                <a href="mailto:info@kidzeekiadbbagalur.com" className="hover:text-brand-yellow transition-colors">
                  info@kidzeekiadbbagalur.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-white/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs font-semibold text-brand-lavender/65">
          <p>© {new Date().getFullYear()} Kidzee KIADB Bagalur. Backed by Zee Learn. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
