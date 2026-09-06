import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import SekolahMap from "@/app/components/Maps";
import Highlight from "@/app/components/Highlight";
import Prestasi from "@/app/components/Prestasi";
import { fetchData } from "@/lib/supabase"; 

interface JurusanRaw {
  id: number;
  image_url: string;
  alt_text: string | null;
}

export default async function Home() {
  const LOKASI_SEKOLAH = {
    lat: -6.3843753,
    lng: 106.8697668,
    nama: "SMK Taruna Bhakti",
    alamat: "Jl. Kampung Baru, Curug, Depok, Jawa Barat 16416",
  };

  // Fetching data dengan tipe yang spesifik
  const { data: jurusanData } = await fetchData<JurusanRaw>('jurusan', {
    select: 'id, image_url, alt_text',
    orderBy: { column: 'created_at', ascending: true }
  });

  const heroImages = jurusanData
    ?.filter(item => item.image_url && item.image_url.trim() !== '')
    .map(item => ({
      id: item.id,
      src: item.image_url,
      alt: item.alt_text || 'Foto Sekolah'
    })) || [];

  return (
    <main className="w-full min-h-screen bg-slate-950">
      <Hero images={heroImages} />
      <About />
      
      <section id="lokasi" className="bg-slate-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 mb-3">
              Letak Strategis Kampus
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              Lokasi Kami
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
              {LOKASI_SEKOLAH.alamat}
            </p>
          </div>
          
          <SekolahMap 
            lat={LOKASI_SEKOLAH.lat}
            lng={LOKASI_SEKOLAH.lng}
            nama={LOKASI_SEKOLAH.nama}
            alamat={LOKASI_SEKOLAH.alamat}
          />
        </div>
      </section>
      <Highlight />
      <Prestasi />
    </main>
  );
}