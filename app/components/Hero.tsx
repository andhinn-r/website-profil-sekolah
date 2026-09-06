"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { supabase } from "@/lib/supabase";

interface HeroImage {
  id: number;
  src: string; 
  alt: string;
}

const SPEED = 0.25;

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.6-2.5h7.4L17.3 7h2.2A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M17.5 5.5 18 4h1.5" />
    </svg>
  );
}

export default function Hero() {
  const [images, setImages] = useState<HeroImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pos, setPos] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [spacing, setSpacing] = useState(320);

  const posRef = useRef(0);
  const draggingRef = useRef(false);
  const targetRef = useRef<number | null>(null);
  const startPosRef = useRef(0);
  const startXRef = useRef(0);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const { data, error } = await supabase
          .from('jurusan')
          .select('id, image_url, alt_text')
          .order('created_at', { ascending: true });

        if (error) throw error;

        if (data) {
          const formatted = data
            .filter(item => item.image_url && item.image_url.trim() !== '')
            .map(item => ({
              id: item.id,
              src: item.image_url,
              alt: item.alt_text || 'Foto Sekolah'
            }));
          setImages(formatted);
        }
      } catch (err: any) {
        console.error("=== ERROR SUPABASE ===");
        console.error("Message:", err.message);
        console.error("Details:", err.details);
        console.error("Hint:", err.hint);
        console.error("Full Error:", JSON.stringify(err, null, 2));
      } finally {
        setIsLoading(false);
      }
    }

    fetchGallery();
  }, []);

  // 2. HANDLE RESIZE LAYOUT
  useEffect(() => {
    const update = () => setSpacing(window.innerWidth < 768 ? 220 : 320);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // 3. ANIMASI CAROUSEL
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!draggingRef.current) {
        if (targetRef.current !== null) {
          const diff = targetRef.current - posRef.current;
          if (Math.abs(diff) < 0.002) {
            posRef.current = targetRef.current;
            targetRef.current = null;
          } else {
            posRef.current += diff * Math.min(1, dt * 5);
          }
        } else {
          posRef.current -= dt * SPEED;
        }
        setPos(posRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setDragging(true);
    targetRef.current = null;
    startPosRef.current = posRef.current;
    startXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    posRef.current = startPosRef.current - (e.clientX - startXRef.current) / spacing;
    setPos(posRef.current);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    targetRef.current = Math.round(posRef.current);
  };

  const COUNT = images.length;
  const activeIdx = COUNT > 0 ? ((Math.round(pos) % COUNT) + COUNT) % COUNT : 0;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-sky-300 bg-sky-950/60 border border-sky-800/60 mb-6 shadow-sm">
            <CameraIcon className="h-4 w-4 text-sky-400" />
            <span>Katalog & Dokumentasi Kegiatan Sekolah</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            SMK <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Taruna Bhakti</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Menghasilkan tamatan yang kompeten, berkarakter, dan berdaya saing global melalui keahlian teknologi unggulan.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Akreditasi A+
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              SMK Pusat Keunggulan
            </span>
          </div>
        </div>

        {/* Carousel 3D or Skeleton Frames */}
        <div className="relative mt-8 md:mt-12 pb-6">
          {isLoading || COUNT === 0 ? (
            /* Skeleton Frame placeholder when empty/loading */
            <div className="mx-auto max-w-4xl py-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center">
                {[1, 2, 3].map((skeletonId) => (
                  <div
                    key={skeletonId}
                    className={`relative rounded-2xl border border-sky-500/20 bg-slate-900/60 p-4 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center text-center aspect-[3/4] ${
                      skeletonId === 2 ? "sm:-translate-y-2 border-sky-400/40 shadow-sky-500/10" : "opacity-80"
                    }`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3 animate-pulse">
                      <CameraIcon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                      Kerangka Galeri #{skeletonId}
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1 max-w-[160px]">
                      {isLoading ? "Sinkronisasi data Supabase..." : "Menunggu data foto dari database..."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Interactive 3D Carousel */}
              <div
                className={`relative mx-auto h-[340px] max-w-full select-none md:h-[440px] ${
                  dragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{ perspective: "1600px", touchAction: "pan-y" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onPointerCancel={endDrag}
              >
                {images.map((img, i) => {
                  let o = (((i - pos) % COUNT) + COUNT) % COUNT;
                  if (o > COUNT / 2) o -= COUNT;
                  const abs = Math.abs(o);
                  const t = Math.min(abs, 3);
                  const tilt = abs <= 1 ? abs : Math.max(0, 1 - (abs - 1) / 2);
                  const rot = -Math.sign(o) * 35 * tilt;

                  return (
                    <div
                      key={img.id}
                      className="absolute left-1/2 top-1/2 h-[260px] w-[190px] overflow-hidden rounded-2xl border border-sky-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:h-[340px] sm:w-[240px] md:h-[400px] md:w-[280px]"
                      style={{
                        transform: `translate(-50%, -50%) translateX(${o * spacing}px) translateZ(${t * 110}px) rotateY(${rot}deg)`,
                        zIndex: 10 + Math.round(t * 10),
                        opacity: abs <= 2 ? 1 - abs * 0.12 : Math.max(0, 3 - abs) * 0.75,
                        filter: `brightness(${Math.max(0.45, 1 - abs * 0.2)})`,
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 190px, (max-width: 768px) 240px, 280px"
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Indikator carousel */}
              <div className="relative z-40 mt-6 flex justify-center gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    aria-label={`Ke foto ${i + 1}`}
                    onClick={() => {
                      let d = i - activeIdx;
                      if (d > COUNT / 2) d -= COUNT;
                      if (d < -COUNT / 2) d += COUNT;
                      targetRef.current = posRef.current + d;
                    }}
                    className={`rounded-full transition-all duration-200 ${
                      i === activeIdx
                        ? "h-2.5 w-6 bg-sky-400 shadow-sm shadow-sky-400/50"
                        : "h-2.5 w-2.5 bg-slate-700 hover:bg-sky-400/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}