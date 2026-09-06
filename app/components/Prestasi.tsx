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
            "SMK Taruna Bhakti Depok mengucapkan selamat kepada ananda Komarudin atas raihan Medali Perak pada Kejuaraan Karate Liga Pelajar Championship III.",
        link: "#",
        image: "",
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
            "Apresiasi setinggi-tingginya kepada ananda Satrio Ernes W atas raihan Juara 3 Lomba Adzan JGU Ramadhan Islamic Competition 2024.",
        link: "#",
        image: "",
        alt: "Satrio Ernes meraih juara 3 lomba adzan",
        awardLevel: "bronze",
    },
    {
        id: 3,
        award: "Juara 1",
        title: "Juara 1 Kejuaraan Pencak Silat Piala Wali Kota 2025",
        studentName: "Keyla Azhari Permata Putri",
        year: "2025",
        excerpt:
            "Prestasi membanggakan diraih ananda Keyla Azhari Permata Putri sebagai Juara 1 Kejuaraan Pencak Silat Piala Wali Kota 2025.",
        link: "#",
        image: "",
        alt: "Keyla Azhari meraih juara 1 piala wali kota",
        awardLevel: "gold",
    },
];

const awardBadgeStyles = {
    gold: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    silver: "bg-slate-300/10 text-slate-300 border-slate-400/30",
    bronze: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    default: "bg-sky-500/10 text-sky-400 border-sky-500/30",
};

const awardIcons = {
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
            id="prestasi"
            className="bg-slate-900 text-white py-16 md:py-24 font-sans border-b border-slate-800"
            aria-labelledby="prestasi-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 mb-3">
                            Apresiasi & Prestasi Siswa
                        </div>
                        <h2
                            id="prestasi-heading"
                            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight"
                        >
                            Prestasi &{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                                Penghargaan Kami
                            </span>
                        </h2>
                        <p className="text-sm text-slate-400 mt-1.5 font-normal max-w-xl">
                            Bukti dedikasi peserta didik dan pendidik dalam mengukir karya di tingkat kota, nasional, dan internasional.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                        aria-label="Lihat semua prestasi"
                    >
                        <span>LIHAT SEMUA PRESTASI</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {prestasiData.map((item) => {
                        const hasImage = item.image && item.image.trim() !== "" && !imgErrors[item.id];
                        const badgeStyle = awardBadgeStyles[item.awardLevel || "default"];
                        const emoji = awardIcons[item.awardLevel || "default"];

                        return (
                            <article
                                key={item.id}
                                className="group relative bg-slate-950/80 rounded-2xl border border-slate-800 hover:border-sky-500/40 shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col overflow-hidden"
                                role="article"
                                aria-labelledby={`prestasi-title-${item.id}`}
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
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-semibold text-sky-400">Kerangka Foto Prestasi</span>
                                            <span className="text-[10px] text-slate-400 mt-0.5">SMK Taruna Bhakti Depok</span>
                                        </div>
                                    )}
                                </div>

                                {/* Badge Award & Year */}
                                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                                    <div
                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${badgeStyle}`}
                                    >
                                        <Trophy className="w-3.5 h-3.5" />
                                        <span className="uppercase tracking-wider">{item.award}</span>
                                    </div>

                                    <span className="text-xs font-semibold text-slate-400">
                                        Tahun {item.year}
                                    </span>
                                </div>

                                {/* Konten */}
                                <div className="px-5 pb-5 flex-1 flex flex-col">
                                    <h3
                                        id={`prestasi-title-${item.id}`}
                                        className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors duration-200 mt-1"
                                    >
                                        <a href={item.link} className="outline-none focus:underline">
                                            {item.title}
                                        </a>
                                    </h3>

                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-xs sm:text-sm font-semibold text-sky-400">
                                            {item.studentName}
                                        </span>
                                        <span className="text-xs text-slate-600">•</span>
                                        <span className="text-xs text-slate-400">
                                            Siswa TB
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed line-clamp-3 flex-1">
                                        {item.excerpt}
                                    </p>

                                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                        <a
                                            href={item.link}
                                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group/link"
                                            aria-label={`Baca selengkapnya tentang ${item.title}`}
                                        >
                                            <span>Selengkapnya</span>
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                        </a>
                                        <span className="text-xl">{emoji}</span>
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
                            Lihat semua rekam jejak prestasi SMK Taruna Bhakti
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </section>
    );
}