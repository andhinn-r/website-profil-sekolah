"use client";

import { Trophy, ArrowRight } from "lucide-react";
import { useState } from "react";

interface PrestasiItem {
    id: number;
    award: string;
    title: string;
    studentName: string;
    year: string;
    excerpt: string;
    link: string;
    image: string;
    alt?: string;
    awardLevel?: "gold" | "silver" | "bronze" | "default";
}

const prestasiData: PrestasiItem[] = [
    {
        id: 1,
        award: "Medali Perak",
        title: "Medali Perak pada Kejuaraan Karate Liga Pelajar Championship III",
        studentName: "Komarudin",
        year: "2023",
        excerpt:
            "Taruna Bhakti Depok Mengucapkan Selamat & Sukses Kepada ananda Komarudin, Telah meraih Medali Perak pada Kejuaraan Karate Liga Pelajar Championship III",
        link: "#",
        image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Karate+Medali+Perak",
        alt: "Komarudin meraih medali perak karate",
        awardLevel: "silver",
    },
    {
        id: 2,
        award: "Juara 3",
        title: "Juara 3 Lomba Adzan JGU Ramadhan Islamic Competition 2024",
        studentName: "Satrio Ernes W.",
        year: "2024",
        excerpt:
            "Taruna Bhakti Depok Mengucapkan Selamat & Sukses Kepada ananda Satrio Ernes W, Telah meraih Juara 3 Lomba Adzan JGU Ramadhan Islamic Competition 2024",
        link: "#",
        image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Adzan+Juara+3",
        alt: "Satrio Ernes meraih juara 3 lomba adzan",
        awardLevel: "bronze",
    },
    {
        id: 3,
        award: "Juara 1",
        title: "Juara 1 Kejuaraan Piala Wali Kota 2025",
        studentName: "Keyla Azhari Permata Putri",
        year: "2025",
        excerpt:
            "Taruna Bhakti Depok Mengucapkan Selamat & Sukses Kepada ananda Keyla Azhari Permata Putri, Telah meraih Juara 1 Kejuaraan Piala Wali Kota 2025",
        link: "#",
        image: "https://placehold.co/600x400/93C5FD/1E3A8A?text=Piala+Wali+Kota",
        alt: "Keyla Azhari meraih juara 1 piala wali kota",
        awardLevel: "gold",
    },
];

const awardBadgeColors = {
    gold: "bg-gradient-to-b from-amber-500 to-amber-600 shadow-amber-500/20",
    silver: "bg-gradient-to-b from-gray-400 to-gray-500 shadow-gray-400/20",
    bronze: "bg-gradient-to-b from-amber-700 to-amber-800 shadow-amber-700/20",
    default: "bg-gradient-to-b from-blue-500 to-blue-600 shadow-blue-500/20",
};

const awardEmojis = {
    gold: "🥇",
    silver: "🥈",
    bronze: "🥉",
    default: "🏆",
};

export default function Prestasi() {
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    const handleImageError = (id: number) => {
        setImgErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <section
            className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 font-sans"
            aria-labelledby="prestasi-heading"
        >
            {/* ===== HEADER ===== */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
                <div>
                    <h2
                        id="prestasi-heading"
                        className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight"
                    >
                        Prestasi &{" "}
                        <span className="text-blue-600 bg-blue-50/70 px-3 py-0.5 rounded-lg">
                            Penghargaan Kami
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500 mt-1.5 font-medium tracking-wide max-w-xl">
                        Bukti dedikasi dan komitmen berkelanjutan dalam mencetak
                        generasi unggul yang siap bersaing di era digital.
                    </p>
                </div>

                <a
                    href="#"
                    className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    aria-label="Lihat semua prestasi"
                >
                    <span className="border-b-2 border-transparent group-hover:border-blue-600 transition-all duration-200 pb-0.5">
                        LIHAT SEMUA PRESTASI
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110" />
                </a>
            </div>

            {/* ===== GRID ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {prestasiData.map((item) => {
                    const hasImageError = imgErrors[item.id];
                    const badgeColor =
                        awardBadgeColors[item.awardLevel || "default"];
                    const emoji = awardEmojis[item.awardLevel || "default"];

                    return (
                        <article
                            key={item.id}
                            className="group/card relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out overflow-hidden border border-gray-200/80 hover:border-blue-200/60 flex flex-col"
                            role="article"
                            aria-labelledby={`prestasi-title-${item.id}`}
                        >
                            {/* ===== GAMBAR ===== */}
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

                            {/* ===== BADGE AWARD ===== */}
                            <div className="flex items-start gap-3 px-5 pt-4 pb-1.5">
                                <div
                                    className={`flex items-center gap-1.5 ${badgeColor} text-white rounded-xl py-1.5 px-3 shadow-sm flex-shrink-0 ring-1 ring-white/20 ring-inset`}
                                >
                                    <Trophy className="w-3.5 h-3.5" />
                                    <span className="text-xs font-bold uppercase tracking-wide">
                                        {item.award}
                                    </span>
                                </div>

                                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100/60 uppercase tracking-wide">
                                    {item.year}
                                </span>
                            </div>

                            {/* ===== KONTEN ===== */}
                            <div className="px-5 pb-5 flex-1 flex flex-col">
                                <h3
                                    id={`prestasi-title-${item.id}`}
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

                                <div className="flex items-center gap-2 mt-1.5">
                                    <span className="text-sm font-semibold text-gray-700">
                                        {item.studentName}
                                    </span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs font-medium text-gray-500">
                                        {item.year}
                                    </span>
                                </div>

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
                                            Selengkapnya
                                        </span>
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                                    </a>
                                    <span className="text-2xl">{emoji}</span>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* ===== FOOTER ===== */}
            <div className="mt-12 text-center">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors duration-200 group"
                >
                    <span className="border-b border-dashed border-gray-300 group-hover:border-blue-400 transition-colors">
                        Lihat semua prestasi Taruna Bhakti
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
            </div>
        </section>
    );
}