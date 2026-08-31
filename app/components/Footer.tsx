// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Call to Action */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Wujudkan potensimu dan raih masa depan gemilang bersama SMK Taruna Bhakti Depok.
          </p>
          <a
            href="http://www.smktarunabhakti.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-3 rounded-lg font-semibold text-white"
          >
            Daftar Sekarang →
          </a>
        </div>

        <hr className="border-gray-700 mb-12" />

        {/* Grid Links — 5 kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">SMK Taruna Bhakti</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sekolah Menengah Kejuruan swasta unggulan di Depok yang berfokus pada
              teknologi, rekayasa, dan kreativitas digital.
            </p>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h4 className="font-semibold text-lg mb-4">TAUTAN CEPAT</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#profil" className="hover:text-white transition">Profil Sekolah</a></li>
              <li><a href="#fasilitas" className="hover:text-white transition">Fasilitas</a></li>
              <li><a href="#ekskul" className="hover:text-white transition">Ekstrakurikuler</a></li>
              <li><a href="#berita" className="hover:text-white transition">Berita &amp; Pengumuman</a></li>
              <li><a href="#ppdb" className="hover:text-white transition">Informasi PPDB</a></li>
            </ul>
          </div>

          {/* Program Keahlian */}
          <div>
            <h4 className="font-semibold text-lg mb-4">PROGRAM KEAHLIAN</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>TJKT (Teknik Jaringan Komputer &amp; Telekomunikasi)</li>
              <li>PPLG (Pengembangan Perangkat Lunak &amp; Gim)</li>
              <li>Broadcasting &amp; Perfilman</li>
              <li>Animasi</li>
              <li>Teknik Elektronika</li>
              <li>DKV</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-lg mb-4">KONTAK KAMI</h4>
            <address className="not-italic text-gray-300 space-y-2 text-sm">
              <p>Jl. Raya Pekapuran, Kel. Curug,</p>
              <p>Kec. Cimanggis, Kota Depok,</p>
              <p>Jawa Barat 16953</p>
              <p className="mt-2">📞 021-87743374</p>
              <p>
                <a href="mailto:taruna@smktarunabhakti.net" className="hover:text-white transition">
                  taruna@smktarunabhakti.net
                </a>
              </p>
              <p>
                <a href="http://www.smktarunabhakti.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  www.smktarunabhakti.net
                </a>
              </p>
            </address>
          </div>

          {/* Jam Kerja */}
          <div>
            <h4 className="font-semibold text-lg mb-4">JAM OPERASIONAL</h4>
            <div className="text-gray-300 space-y-2 text-sm">
              <p>Senin – Jumat</p>
              <p className="font-medium text-white">07:00 – 16:00 WIB</p>
              <p className="mt-2">Sabtu</p>
              <p className="font-medium text-white">07:00 – 12:00 WIB</p>
              <p className="mt-2">Minggu</p>
              <p>Libur</p>
            </div>
          </div>
        </div>

        {/* Garis + Copyright */}
        <hr className="border-gray-700 mb-6" />
        <div className="text-gray-400 text-sm">
          © 2025 SMK Taruna Bhakti Depok. All rights reserved.
        </div>
      </div>
    </footer>
  );
}