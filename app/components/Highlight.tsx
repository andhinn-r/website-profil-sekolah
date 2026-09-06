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
            "Peluang magang dan studi lanjut ke Jepang terbuka lebar bagi lulusan SMK Taruna Bhakti melalui program kemitraan industri internasional.",
        link: "#",
        image: "",
        alt: "Siswa SMK Taruna Bhakti mengikuti sesi pemaparan peluang karier",
    },
    {
        id: 2,
        date: "26",
        month: "AUG",
        year: "2025",
        title: "Demokrasi dan Musyawarah di Taruna Bhakti",
        excerpt:
            "SMK Taruna Bhakti Depok menanamkan nilai kepemimpinan dan demokrasi melalui pemilihan ketua OSIS berbasis digital.",
        link: "#",
        image: "",
        alt: "Suasana pemilihan ketua OSIS di SMK Taruna Bhakti Depok",
    },
    {
        id: 3,
        date: "21",
        month: "JUN",
        year: "2025",
        title: "Pelepasan Siswa Angkatan Terbaru",
        excerpt:
            "Dengan bangga, SMK Taruna Bhakti melepas lulusan yang telah dibekali sertifikasi kompetensi keahlian dan kesiapan kerja.",
        link: "#",
        image: "",
        alt: "Momen perpisahan siswa SMK Taruna Bhakti Depok",
    },
];

export default function Highlights() {
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    const handleImageError = (id: number) => {
        setImgErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <section
            id="berita"
            className="bg-slate-950 text-white py-16 md:py-24 font-sans border-b border-slate-800"
            aria-labelledby="highlights-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 mb-3">
                            Informasi & Berita Terkini
                        </div>
                        <h2
                            id="highlights-heading"
                            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
                        >
                            Life at{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                SMK Taruna Bhakti
                            </span>
                        </h2>
                        <p className="text-sm text-slate-400 mt-1.5 font-normal">
                            Aktivitas, dinamika belajar, dan kabar terbaru dari lingkungan sekolah.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                        aria-label="Lihat semua berita"
                    >
                        <span>SEMUA BERITA</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {highlightsData.map((item) => {
                        const hasImage = item.image && item.image.trim() !== "" && !imgErrors[item.id];
                        const dateTime = `${item.year}-${item.month}-${item.date}`;

                        return (
                            <article
                                key={item.id}
                                className="group relative bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-sky-500/40 shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col overflow-hidden"
                                role="article"
                                aria-labelledby={`card-title-${item.id}`}
                            >
                                {/* Gambar / Skeleton Placeholder */}
                                <div className="relative w-full aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden border-b border-slate-800">
                                    {hasImage ? (
                                        <img
                                            src={item.image}
                                            alt={item.alt || item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            onError={() => handleImageError(item.id)}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center border-dashed border-sky-500/20 bg-gradient-to-b from-slate-900 to-slate-950">
                                            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-2">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-semibold text-sky-400">Kerangka Foto Berita</span>
                                            <span className="text-[10px] text-slate-400 mt-0.5">Media Taruna Bhakti</span>
                                        </div>
                                    )}
                                </div>

                                {/* Badge tanggal + label */}
                                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                                    <time
                                        dateTime={dateTime}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2.5 py-1 rounded-lg"
                                        aria-label={`${item.date} ${item.month} ${item.year}`}
                                    >
                                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                                        <span>{item.date} {item.month} {item.year}</span>
                                    </time>

                                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                        Media TB
                                    </span>
                                </div>

                                {/* Konten */}
                                <div className="px-5 pb-5 flex-1 flex flex-col">
                                    <h3
                                        id={`card-title-${item.id}`}
                                        className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-200 mt-1"
                                    >
                                        <a href={item.link} className="outline-none focus:underline">
                                            {item.title}
                                        </a>
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed line-clamp-3 flex-1">
                                        {item.excerpt}
                                    </p>

                                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                        <a
                                            href={item.link}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
                                            aria-label={`Baca selengkapnya tentang ${item.title}`}
                                        >
                                            <span>Baca Selengkapnya</span>
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                        <div className="w-2 h-2 rounded-full bg-sky-500/40 group-hover:bg-sky-400 transition-colors" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Footer Link */}
                <div className="mt-10 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors group"
                    >
                        <span className="border-b border-dashed border-slate-700 group-hover:border-sky-400 pb-0.5">
                            Lihat semua kegiatan dan artikel SMK Taruna Bhakti
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}   