"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" backdrop-blur-sm px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* KIRI: Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <h1 className="text-2xl font-bold text-white whitespace-nowrap">
            SMK <span className="text-white">Taruna Bhakti</span>
          </h1>
        </div>

        {/* KANAN: Navigasi + CTA + Hamburger */}
        <div className="flex items-center gap-6">
          {/* Navigasi Utama (desktop) */}
          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex items-center gap-6 text-white font-medium">
              <li><Link href="#profil" className="hover:text-white/80 transition">Profil</Link></li>
              <li><Link href="#tentang" className="hover:text-white/80 transition">Tentang</Link></li>
              <li><Link href="#program" className="hover:text-white/80 transition">Program</Link></li>
              <li><Link href="#galeri" className="hover:text-white/80 transition">Galeri</Link></li>
              <li><Link href="#berita" className="hover:text-white/80 transition">Berita</Link></li>
              <li><Link href="#prestasi" className="hover:text-white/80 transition">Prestasi</Link></li>
            </ul>
          </nav>

          {/* CTA Tombol (kuning solid) */}
          <Link
            href="/sign-up"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition shadow-md flex items-center gap-1 whitespace-nowrap"
          >
            Daftar Sekarang <span className="text-lg">➔</span>
          </Link>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden mt-4 border-t border-white/20">
          <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium">
            <li><Link href="#profil" onClick={() => setIsOpen(false)} className="hover:text-white/80">Profil</Link></li>
            <li><Link href="#tentang" onClick={() => setIsOpen(false)} className="hover:text-white/80">Tentang</Link></li>
            <li><Link href="#program" onClick={() => setIsOpen(false)} className="hover:text-white/80">Program</Link></li>
            <li><Link href="#galeri" onClick={() => setIsOpen(false)} className="hover:text-white/80">Galeri</Link></li>
            <li><Link href="#berita" onClick={() => setIsOpen(false)} className="hover:text-white/80">Berita</Link></li>
            <li><Link href="#prestasi" onClick={() => setIsOpen(false)} className="hover:text-white/80">Prestasi</Link></li>
            <li>
              <Link
                href="/sign-up"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 text-black px-8 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
              >
                Daftar Sekarang
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}