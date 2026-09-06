// app/components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Call to Action Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-blue-950/80 border border-sky-500/20 p-8 sm:p-12 mb-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-950/90 border border-sky-800/60 mb-4">
            Penerimaan Peserta Didik Baru (PPDB)
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Wujudkan potensimu dan raih masa depan gemilang di bidang teknologi industri bersama SMK Taruna Bhakti Depok.
          </p>
          <a
            href="https://smktarunabhakti.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-3 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transform hover:-translate-y-0.5"
          >
            <span>Daftar Sekarang</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* 12-Column Responsive Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* School Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                TB
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                SMK <span className="text-sky-400">Taruna Bhakti</span>
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Sekolah Menengah Kejuruan swasta unggulan di Depok yang berfokus pada teknologi rekayasa, teknologi informasi, dan kreativitas digital.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Status: Terakreditasi A+ (Unggul)</span>
            </div>
          </div>

          {/* Tautan Cepat (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-sky-400 mb-4">
              Tautan Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#profil" className="hover:text-sky-400 transition-colors">
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-sky-400 transition-colors">
                  Sambutan Kepala Sekolah
                </Link>
              </li>
              <li>
                <Link href="#fasilitas" className="hover:text-sky-400 transition-colors">
                  Fasilitas Unggulan
                </Link>
              </li>
              <li>
                <Link href="#ppdb" className="hover:text-sky-400 transition-colors">
                  Informasi PPDB
                </Link>
              </li>
            </ul>
          </div>

          {/* Program Keahlian (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-sky-400 mb-4">
              Program & Layanan
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#program" className="hover:text-sky-400 transition-colors">
                  Kompetensi Keahlian (Jurusan)
                </Link>
              </li>
              <li>
                <Link href="#prestasi" className="hover:text-sky-400 transition-colors">
                  Rekam Jejak Prestasi
                </Link>
              </li>
              <li>
                <Link href="#berita" className="hover:text-sky-400 transition-colors">
                  Berita & Media Kampus
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="hover:text-sky-400 transition-colors">
                  Dokumentasi Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak Resmi (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-sky-400 mb-4">
              Kontak Kami
            </h4>
            <address className="not-italic text-xs sm:text-sm text-slate-300 space-y-2.5">
              <p className="flex items-start gap-2">
                <span className="text-sky-400">📍</span>
                <span>Jl. Pekapuran No. 25, Curug, Cimanggis, Kota Depok, Jawa Barat</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-sky-400">✉️</span>
                <a href="mailto:taruna@smktarunabhakti.net" className="hover:text-sky-400 transition-colors">
                  taruna@smktarunabhakti.net
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-sky-400">📞</span>
                <span>021-87743374</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-sky-400">🌐</span>
                <a href="https://smktarunabhakti.net" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                  www.smktarunabhakti.net
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SMK Taruna Bhakti Depok. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white transition cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
