"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

/* 6 foto sekolah untuk carousel 3D di bagian bawah hero */
const GALLERY_IMAGES = [
  { src: "/images/hero/school_exterior.png", alt: "Gedung sekolah" },
  { src: "/images/hero/school_students.png", alt: "Siswa sekolah" },
  { src: "/images/hero/school_library.png", alt: "Perpustakaan" },
  { src: "/images/hero/school_lab.png", alt: "Laboratorium" },
  { src: "/images/hero/school_workshop.png", alt: "Workshop" },
  { src: "/images/hero/school_sports.png", alt: "Olahraga" },
];

const COUNT = GALLERY_IMAGES.length;
/* kecepatan aliran: 0.25 slot/detik = ganti 1 foto tiap 4 detik */
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
  const [pos, setPos] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [spacing, setSpacing] = useState(380);

  const posRef = useRef(0);
  const draggingRef = useRef(false);
  const targetRef = useRef<number | null>(null);
  const startPosRef = useRef(0);
  const startXRef = useRef(0);

  useEffect(() => {
    const update = () => setSpacing(window.innerWidth < 768 ? 240 : 380);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* aliran kontinu ke kanan; tween halus ke target (klik dot / settle setelah drag) */
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
    posRef.current =
      startPosRef.current - (e.clientX - startXRef.current) / spacing;
    setPos(posRef.current);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setDragging(false);
    /* settle mulus ke foto terdekat, lalu aliran berlanjut */
    targetRef.current = Math.round(posRef.current);
  };

  const activeIdx = ((Math.round(pos) % COUNT) + COUNT) % COUNT;

  return (
    <div className="min-h-screen bg-[#1b1e22] font-sans">
      <section className="relative overflow-hidden bg-[#1b1e22]">
        {/* ================= Headline ================= */}
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center md:pt-24">
          <p className="flex flex-wrap items-center justify-center gap-2.5 text-[17px] font-medium text-white">
            <CameraIcon className="h-6 w-6 text-[#c8a23f]" />
            slogan TB
          </p>

          <h1 className="font-display mt-7 text-5xl font-semibold leading-[1.08] text-[#f2f1ed] md:text-6xl xl:text-[76px]">
            SMK Taruna Bhakti
          </h1>

          <p className="mt-7 text-[17px] text-[#c9cdd2]">Akreditasi A+</p>
        </div>

        {/* ================= Carousel 3D (6 gambar) ================= */}
        <div className="relative pb-14 pt-8">
          <div
            className={`relative mx-auto h-[400px] max-w-full select-none md:h-[500px] ${
              dragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ perspective: "1600px", touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            {GALLERY_IMAGES.map((img, i) => {
              /* offset melingkar dari posisi kontinu: aliran searah tanpa mentok */
              let o = (((i - pos) % COUNT) + COUNT) % COUNT;
              if (o > COUNT / 2) o -= COUNT;
              const abs = Math.abs(o);
              /* cekung: kartu tengah paling jauh, makin ke samping makin dekat ke user */
              const t = Math.min(abs, 3);
              /* rotasi hanya di dekat tengah; kartu paling pinggir tetap lurus menghadap user */
              const tilt = abs <= 1 ? abs : Math.max(0, 1 - (abs - 1) / 2);
              const rot = -Math.sign(o) * 38 * tilt;
              return (
                <div
                  key={img.src}
                  className="absolute left-1/2 top-1/2 h-[320px] w-[230px] overflow-hidden rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.55)] md:h-[440px] md:w-[310px]"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${o * spacing}px) translateZ(${t * 130}px) rotateY(${rot}deg)`,
                    zIndex: 10 + Math.round(t * 10),
                    opacity: abs <= 2 ? 1 - abs * 0.12 : Math.max(0, 3 - abs) * 0.76,
                    filter: `brightness(${Math.max(0.4, 1 - abs * 0.22)})`,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 230px, 310px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>

          {/* Indikator carousel */}
          <div className="relative z-50 mt-8 flex justify-center gap-2.5">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Ke foto ${i + 1}`}
                onClick={() => {
                  let d = i - activeIdx;
                  if (d > COUNT / 2) d -= COUNT;
                  if (d < -COUNT / 2) d += COUNT;
                  targetRef.current = posRef.current + d;
                }}
                className={`rounded-full transition-all ${
                  i === activeIdx
                    ? "h-3 w-3 bg-[#c8a23f]"
                    : "h-2 w-2 translate-y-0.5 bg-[#c8a23f]/40 hover:bg-[#c8a23f]/70"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
