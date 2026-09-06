"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

interface HighlightItem {
    id: number;
    date: string;
    month: string;
    year: string;
    title: string;
    excerpt: string;
    link: string;
    image: string;
    alt?: string;
}

const highlightsData: HighlightItem[] = [
    {
        id: 1,
        date: "14",
        month: "JUN",
        year: "2026",
        title: "Karier Hingga Jepang",
        excerpt:
            "Siapa bilang lulus SMK cuma bisa nunggu kerjaan? Di Taruna Bahkti Depok, peluangnya terbuka lebar dengan program magang dan studi lanjut ke negeri sakura.",
        link: "#",
        image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Karir+Taruna+Bahkti",
        alt: "Siswa Taruna Bahkti sedang mengikuti sesi pemaparan peluang karir ke Jepang",
    },
    {
        id: 2,
        date: "26",
        month: "AUG",
        year: "2025",
        title: "Demokrasi dan Musyawarah di Taruna Bahkti",
        excerpt:
            "Depok, 25 Agustus 2025 — Taruna Bahkti Depok kembali menunjukkan komitmennya dalam menanamkan nilai-nilai demokrasi melalui pemilihan ketua OSIS yang transparan.",
        link: "#",
        image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Demokrasi+Taruna+Bahkti",
        alt: "Suasana pemilihan ketua OSIS di Taruna Bahkti Depok",
    },
    {
        id: 3,
        date: "21",
        month: "JUN",
        year: "2025",
        title: "Penuh Haru, Taruna Bahkti Depok Lepas 350 Siswa",
        excerpt:
            "Depok, 21 Juni 2025 - Perpisahan adalah momen yang tak terhindarkan di setiap akhir perjuangan. Dengan haru dan bangga, Taruna Bahkti melepas siswa-siswi terbaiknya.",
        link: "#",
        image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Perpisahan+Taruna+Bahkti",
        alt: "Momen haru perpisahan siswa Taruna Bahkti Depok",
    },
];

export default function Highlights() {
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    const handleImageError = (id: number) => {
        setImgErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <section
            className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 font-sans"
            aria-labelledby="highlights-heading"
        >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
                <div>
                    <h2
                        id="highlights-heading"
                        className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight"
                    >
                        Life at{" "}
                        <span className="text-blue-600 bg-blue-50/70 px-3 py-0.5 rounded-lg">
                            Taruna Bahkti Depok
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-1.5 font-medium tracking-wide">
                        Berita & kegiatan terbaru dari kampus Taruna Bahkti
                    </p>
                </div>

                <a
                    href="#"
                    className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label="Lihat semua berita"
                >
                    <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all duration-200 pb-0.5">
                        SEMUA BERITA
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
                </a>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {highlightsData.map((item) => {
                    const hasImageError = imgErrors[item.id];
                    const dateTime = `${item.year}-${item.month}-${item.date}`;

                    return (
                        <article
                            key={item.id}
                            className="group/card relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out overflow-hidden border border-gray-200/80 hover:border-blue-200/60 flex flex-col"
                            role="article"
                            aria-labelledby={`card-title-${item.id}`}
                        >
                            {/* Gambar */}
                            <div className="relative w-full h-48 md:h-56 lg:h-52 overflow-hidden bg-gray-100 flex-shrink-0">
                                {!hasImageError ? (
                                    <img
                                        src={item.image}
                                        alt={item.alt || item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                                        loading="lazy"
                                        onError={() => handleImageError(item.id)}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                                        <span className="text-gray-400 text-sm font-medium">
                                            📸 Gambar tidak tersedia
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                            </div>

                            {/* Badge tanggal + label */}
                            <div className="flex items-start gap-3 px-5 pt-4 pb-1.5">
                                <time
                                    dateTime={dateTime}
                                    className="flex flex-col items-center justify-center min-w-[60px] bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-xl py-1.5 px-2 shadow-sm shadow-blue-500/20 flex-shrink-0 ring-1 ring-white/20 ring-inset"
                                    aria-label={`${item.date} ${item.month} ${item.year}`}
                                >
                                    <Calendar className="w-3.5 h-3.5 mb-0.5 opacity-90" />
                                    <span className="text-xl font-bold leading-none tracking-tight">
                                        {item.date}
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5 opacity-95">
                                        {item.month}
                                    </span>
                                    <span className="text-[10px] font-medium opacity-75 mt-0.5">
                                        {item.year}
                                    </span>
                                </time>

                                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/60 uppercase tracking-wide">
                                    Media Taruna Bahkti
                                </span>
                            </div>

                            {/* Konten */}
                            <div className="px-5 pb-5 flex-1 flex flex-col">
                                <h3
                                    id={`card-title-${item.id}`}
                                    className="text-base md:text-lg font-bold text-gray-800 leading-snug mt-0.5"
                                >
                                    <a
                                        href={item.link}
                                        className="hover:text-blue-600 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:rounded-sm outline-none"
                                        aria-label={`Baca selengkapnya: ${item.title}`}
                                    >
                                        {item.title}
                                    </a>
                                </h3>

                                <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-2 flex-1">
                                    {item.excerpt}
                                </p>

                                <div className="mt-4 pt-2 border-t border-gray-100/70 flex items-center justify-between">
                                    <a
                                        href={item.link}
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-all duration-200 group/link"
                                        aria-label={`Baca selengkapnya tentang ${item.title}`}
                                    >
                                        <span className="border-b-2 border-transparent group-hover/link:border-blue-600 transition-all duration-200 pb-0.5">
                                            Baca Selengkapnya
                                        </span>
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                                    </a>
                                    <span className="w-6 h-0.5 bg-blue-200 rounded-full transition-all duration-300 group-hover/card:w-10 group-hover/card:bg-blue-400" />
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Footer */}
            <div className="mt-12 text-center">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200 group"
                >
                    <span className="border-b border-dashed border-gray-300 group-hover:border-blue-400 transition-colors">
                        Lihat semua kegiatan Taruna Bahkti
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
            </div>
        </section>
    );
}   