"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1763272446/40_77_Penusupan_2_converted_dttvtx.avif"
                alt="Samara Penusupan"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Samara Penusupan</h2>
              <p className="about-description">
                Berada di kawasan strategis Pangkah, Samara Penusupan menghadirkan perumahan Tegal yang modern, minimalis, dan fungsional untuk keluarga muda. Terletak di Jl. Lingkar Slawi, Kelurahan Penusupan, hunian ini memudahkan akses ke sekolah, rumah sakit, dan pusat perbelanjaan, sehingga aktivitas sehari-hari lebih praktis tanpa meninggalkan ketenangan lingkungan. 
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Slawi</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">200+</div>
              <div className="about-stat-label">Keluarga Samara</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">24</div>
              <div className="about-stat-label">Jam Keamanan One-Gate</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Samara Penusupan</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1763272447/40_77_Penusupan_converted_uvpe4n.avif"
                  alt="Samara Penusupan"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di kawasan strategis Pangkah, Samara Penusupan menghadirkan perumahan Tegal yang modern, minimalis, dan fungsional untuk keluarga muda. Terletak di Jl. Lingkar Slawi, Kelurahan Penusupan, hunian ini memudahkan akses ke sekolah, rumah sakit, dan pusat perbelanjaan, sehingga aktivitas sehari-hari lebih praktis tanpa meninggalkan ketenangan lingkungan. Dengan desain yang efisien dan lingkungan yang tertata, Samara Penusupan menjadi pilihan tepat untuk memulai rumah pertama yang aman, jelas, dan nyaman.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>5 menit ke fasilitas kesehatan</li>
                  <li>4 menit ke fasilitas pendidikan</li>
                  <li>6 menit ke pusat perbelanjaan dan pasar tradisional</li>
                  <li>3 menit ke Terminal Dukuhsalam Slawi</li>
                  <li>Lingkungan tenang, bebas polusi dan kebisingan lalu lintas kota</li>
                  <li>Dikelilingi area hijau dan akses dekat ke jalur Tegal–Slawi.</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan sistem one gate</li>
                  <li>Dekat jalur utama, memudahkan mobilitas harian dan akses ke pusat transportasi</li>
                  <li>Ruang terbuka hijau dengan suasana asri dan udara segar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
