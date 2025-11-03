import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "4 menit dari SMP N 2 Slawi",
        "7 menit dari SMA N 2 Slawi",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Pusat Perbelanjaan",
      items: [
        "6 menit dari Pasar Tradisional",
        "9 menit dari Toserba Yogya Slawi",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Publik",
      items: [
        "3 menit dari Terminal Dukuhsalam Slawi",
        "10 menit dari Alun-alun Hanggawana Slawi",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "5 menit dari RS Harapan Sehat Slawi",
        "8 menit dari RS Dr. Soeselo",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
