'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative bg-slate-900 text-white py-16 md:py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Photo Card & Skeleton Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur-md opacity-30 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl aspect-[4/5] flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/images/kepala_sekolah.jpg"
                    alt="Kepala Sekolah SMK Taruna Bhakti - Idham Kholid S.Ag S.E"
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center border border-dashed border-sky-500/30">
                    <div className="w-16 h-16 rounded-full bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-sky-400">Kerangka Foto Kepala Sekolah</span>
                    <p className="text-xs text-slate-400 mt-1">Placeholder foto profil pimpinan</p>
                  </div>
                )}

                {/* Bottom Overlay Info Tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 pt-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                    Pimpinan Sekolah
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    SMK Taruna Bhakti Depok
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Greetings & Vision/Mission */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 self-start mb-4">
              Sambutan Kepala Sekolah
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-1">
              Idham Kholid, S.Ag., S.E.
            </h2>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-400 mb-6">
              Kepala Sekolah SMK Taruna Bhakti Depok
            </p>

            <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              <p>
                Assalamu&rsquo;alaikum warahmatullahi wabarakatuh.
              </p>
              <p>
                <strong className="text-white">Alhamdulillahirabbil&rsquo;alamin</strong>, segala puji bagi Allah SWT yang telah melimpahkan nikmat dan karunia-Nya kepada kita semua. Selamat datang di portal resmi SMK Taruna Bhakti Depok.
              </p>
              <p>
                Kami berkomitmen mewujudkan ekosistem pendidikan vokasi berkualitas unggul, adaptif terhadap perkembangan teknologi industri, serta menanamkan karakter berbudi pekerti luhur bagi seluruh peserta didik.
              </p>
            </div>

            {/* Visi & Misi Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Visi Card */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-lg group">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Visi Kami</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Menjadi lembaga pendidikan kejuruan yang unggul, berdaya saing global, dan berkarakter mulia.
                </p>
              </div>

              {/* Misi Card */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 shadow-lg group">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">Misi Kami</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Menyelenggarakan proses pembelajaran inovatif berbasis standar industri dan teknologi digital modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}