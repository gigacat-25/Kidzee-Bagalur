"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Programmes", href: "/#programmes" },
    { label: "Pentemind", href: "/#pentemind" },
    { label: "Admissions", href: "/#admissions" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Locate Us", href: "/#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/") {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.replace("/", ""); // converts "/#about" to "#about"
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80; // height of navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-purple/95 backdrop-blur-md shadow-xl"
          : "py-4 bg-brand-purple"
      } border border-brand-yellow ${isOpen ? "rounded-[32px]" : "rounded-full"} px-6 md:px-8`}
    >
      <div className="flex items-center justify-between">
        {/* Playful Colorful Kidzee Logo */}
        <Link href="/#home" onClick={(e) => handleScrollTo(e, "/#home")} className="flex items-center gap-2 cursor-pointer select-none">
          <Image
            src="/kidzee-logo.png"
            alt="Kidzee Logo"
            width={111}
            height={36}
            className="w-auto h-9 object-contain"
            priority
          />
          <span className="text-white/80 font-fredoka text-xs md:text-sm font-medium self-end mb-0.5 hidden sm:inline">
            KIADB Bagalur
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-white hover:text-brand-yellow text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Admission Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/#admissions"
            onClick={(e) => handleScrollTo(e, "/#admissions")}
            className="flex items-center gap-1 px-5 py-2.5 bg-brand-yellow text-brand-purple font-fredoka font-bold rounded-full shadow-md text-sm hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            Admissions Open <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden text-white hover:text-brand-yellow focus:outline-none transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-brand-purple border-t border-brand-yellow/30 pt-4 pb-2 rounded-3xl flex flex-col gap-3 px-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-white hover:text-brand-yellow text-base font-semibold py-2 px-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#admissions"
            onClick={(e) => handleScrollTo(e, "/#admissions")}
            className="mt-2 text-center py-3 bg-brand-yellow text-brand-purple font-fredoka font-bold rounded-full shadow-lg flex items-center justify-center gap-1"
          >
            Admissions Open <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
}
