import Image from "next/image";

/* 6 foto sekolah yang disusun membentuk kipas di bagian bawah hero */
const GALLERY_IMAGES = [
  { src: "/images/hero/school_exterior.png", alt: "Gedung sekolah", rotate: 7, offset: 0 },
  { src: "/images/hero/school_students.png", alt: "Siswa sekolah", rotate: 4.5, offset: 26 },
  { src: "/images/hero/school_library.png", alt: "Perpustakaan", rotate: 2, offset: 44 },
  { src: "/images/hero/school_lab.png", alt: "Laboratorium", rotate: -2, offset: 44 },
  { src: "/images/hero/school_workshop.png", alt: "Workshop", rotate: -4.5, offset: 26 },
  { src: "/images/hero/school_sports.png", alt: "Olahraga", rotate: -7, offset: 0 },
];

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

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

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <span className="relative inline-flex">
              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 h-4 w-24 -translate-x-1/2 rounded-[100%] bg-[#d9bc6a]"
              />
              <a
                href="#"
                className="relative flex items-center gap-2.5 bg-[#c8a23f] px-8 py-4 text-[#f5f1e6] transition-colors hover:bg-[#b8933a]"
              >
                <span className="font-display text-lg font-semibold tracking-wide">
                  Button kiri
                </span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </span>
            <span className="relative inline-flex">
              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 h-4 w-24 -translate-x-1/2 rounded-[100%] bg-[#a9b3bb]"
              />
              <a
                href="#"
                className="relative flex items-center gap-2.5 bg-[#7b8790] px-8 py-4 text-white transition-colors hover:bg-[#6d7982]"
              >
                <span className="font-display text-lg font-semibold tracking-wide">
                  Button kanan
                </span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </span>
          </div>
        </div>

        {/* ================= Fan gallery (6 gambar) ================= */}
        <div className="relative mt-2 pb-28 md:pb-32">
          {/* Lengkungan krem di belakang foto */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-52 w-[180%] -translate-x-1/2 rounded-t-[100%] bg-[#f0efe5] md:h-60"
          />

          <div className="relative z-10 flex justify-center gap-4 md:gap-5">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.src}
                className="w-40 shrink-0 md:w-56 xl:w-[270px]"
                style={{
                  transform: `translateY(${img.offset}px) rotate(${img.rotate}deg)`,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={540}
                  height={720}
                  className="h-[380px] w-full object-cover shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:h-[440px]"
                />
              </div>
            ))}
          </div>

          {/* Indikator carousel */}
          <div className="absolute bottom-3 left-0 z-20 flex w-full items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#c8a23f]" />
            <span className="h-3 w-3 rounded-full border-2 border-[#c8a23f] bg-[#e6cd82]" />
            <span className="h-2 w-2 rounded-full bg-[#c8a23f]" />
          </div>
        </div>
      </section>
    </div>
  );
}
