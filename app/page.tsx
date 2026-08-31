// app/page.tsx
import Hero from "@/app/components/Hero";
import SekolahMap from "@/app/components/Maps";
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
    <main className="w-full min-h-screen bg-[#1b1e22]">
      <Hero images={heroImages} />
      
      <section className="px-4 py-12 md:px-8 max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[#f2f1ed] mb-2">Lokasi Kami</h2>
          <p className="text-[#c9cdd2]">{LOKASI_SEKOLAH.alamat}</p>
        </div>
        
        <SekolahMap 
          lat={LOKASI_SEKOLAH.lat}
          lng={LOKASI_SEKOLAH.lng}
          nama={LOKASI_SEKOLAH.nama}
          alamat={LOKASI_SEKOLAH.alamat}
        />
      </section>
    </main>
  );
}