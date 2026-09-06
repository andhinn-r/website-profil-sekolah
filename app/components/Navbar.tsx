"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#profil", label: "Beranda" },
    { href: "#about", label: "Tentang" },
    { href: "#program", label: "Program" },
    { href: "#prestasi", label: "Prestasi" },
    { href: "#galeri", label: "Galeri" },
    { href: "#berita", label: "Berita" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-base shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              TB
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">
                SMK <span className="text-sky-400">Taruna Bhakti</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                Depok • Jawa Barat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Navigasi utama" className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-400 transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Area (CTA & Mobile Button) */}
          <div className="flex items-center gap-4">
            <Link
              href="/sign-up"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-full shadow-md shadow-sky-600/30 transition-all duration-200 hover:shadow-sky-600/40"
            >
              Daftar Segera
              <svg
                className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Buka menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Link
              href="/sign-up"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 transition shadow-md shadow-sky-600/30"
            >
              Daftar Segera
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}