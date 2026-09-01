// app/components/Maps.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Import dinamis untuk mencegah error SSR
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

interface SekolahMapProps {
  lat: number;
  lng: number;
  nama: string;
  alamat?: string;
}

export default function SekolahMap({ lat, lng, nama, alamat }: SekolahMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Inisialisasi ikon Leaflet di client-side saja
    import("leaflet").then(async (L) => {
      const extractUrl = (mod: any): string => {
        if (typeof mod === 'string') return mod;
        if (mod?.default && typeof mod.default === 'string') return mod.default;
        if (mod?.src && typeof mod.src === 'string') return mod.src;
        return ""; 
      };

      try {
        const iconMod = await import("leaflet/dist/images/marker-icon.png");
        const retinaMod = await import("leaflet/dist/images/marker-icon-2x.png");
        const shadowMod = await import("leaflet/dist/images/marker-shadow.png");

        const DefaultIcon = L.icon({
          iconUrl: extractUrl(iconMod),
          iconRetinaUrl: extractUrl(retinaMod),
          shadowUrl: extractUrl(shadowMod),
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        L.Marker.prototype.options.icon = DefaultIcon;
      } catch (e) {
        console.warn("Gagal memuat ikon lokal, menggunakan CDN fallback...", e);
        L.Marker.prototype.options.icon = L.icon({
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });
      }
    });
  }, []);

  if (!isClient) {
    return <div className="h-[400px] w-full rounded-lg bg-gray-800 animate-pulse" />;
  }

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border border-gray-700 shadow-sm relative z-0">
      <MapContainer center={[lat, lng]} zoom={16} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <div className="text-center min-w-[150px]">
              <strong className="block text-base mb-1">{nama}</strong>
              {alamat && <span className="text-xs text-gray-600 leading-tight block">{alamat}</span>}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}