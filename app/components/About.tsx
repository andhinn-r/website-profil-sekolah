'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#f5f7ff',
        padding: '80px 0',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* ===== TWO-COLUMN LAYOUT ===== */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '48px',
            alignItems: 'flex-start',
          }}
        >
          {/* ===== LEFT: PHOTO + BADGE ===== */}
          <div
            style={{
              flex: '0 0 340px',
              position: 'relative',
              minWidth: '260px',
            }}
          >
            {/* Photo Card */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(80,60,200,0.13)',
                background: '#fff',
                lineHeight: 0,
              }}
            >
              <Image
                src="/images/kepala_sekolah.jpg"
                alt="Kepala Sekolah Idham Kholid S,Ag S,E"
                width={340}
                height={400}
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
                priority
              />
            </div>
          </div>

          {/* ===== RIGHT: CONTENT ===== */}
          <div style={{ flex: '1 1 360px', paddingBottom: '24px' }}>

            {/* Name */}
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                color: '#1a1a2e',
                lineHeight: 1.15,
                margin: '0 0 6px 0',
                letterSpacing: '-0.5px',
              }}
            >
              Idham Kholid S,Ag S,E
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#7c3aed',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                margin: '0 0 22px 0',
              }}
            >
              KEPALA SEKOLAH SMK YAJ DEPOK
            </p>


            {/* Sambutan Text */}
            <div
              style={{
                fontSize: '14.5px',
                lineHeight: '1.85',
                color: '#444',
                marginBottom: '32px',
              }}
            >
              <p style={{ margin: '5 0 10px 0' }}>
                Assalamu&rsquo;alaikum warahmatullahi wabarakatuh.
              </p>
              <p style={{ margin: '5 0 10px 0' }}>
                <strong>Alhamdulillahirabbil&rsquo;alamin</strong>, segala puji bagi Allah SWT yang
                telah melimpahkan nikmat iman, Islam, serta kesehatan
                kepada kita semua. Semoga nikmat tersebut semakin
                menambah keimanan dan ketakwaan kita kepada-Nya. Aamin.
              </p>
              <p style={{ margin: '5' }}>
                Shalawat serta salam semoga senantiasa tercurah kepada
                junjungan kita Nabi Muhammad SAW, beserta keluarga,
                sahabat, dan seluruh umat...
              </p>
            </div>

            {/* ===== VISI & MISI CARDS ===== */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              {/* Visi Card */}
              <div
                style={{
                  flex: '1 1 180px',
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '22px 20px',
                  boxShadow: '0 4px 20px rgba(80,60,200,0.09)',
                  border: '1px solid #f0eeff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(124,58,237,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(80,60,200,0.09)';
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 8px 0',
                  }}
                >
                  Visi Kami
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#666',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  Menjadi lembaga pendidikan kejuruan yang unggul, berkarakter mulia.
                </p>
              </div>

              {/* Misi Card */}
              <div
                style={{
                  flex: '1 1 180px',
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '22px 20px',
                  boxShadow: '0 4px 20px rgba(80,60,200,0.09)',
                  border: '1px solid #f0eeff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 28px rgba(124,58,237,0.18)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(80,60,200,0.09)';
                }}
              >
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    margin: '0 0 8px 0',
                  }}
                >
                  Misi Kami
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#666',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  1. Menyelenggarakan proses pembelajaran yang inovatif, efektif, dan menyenangkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}