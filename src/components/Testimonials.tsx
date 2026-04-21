import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rizky Pratama',
    role: 'Mahasiswa',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Tempatnya kece banget! PS5-nya ada dan langsung bisa main FIFA bareng teman. Harga juga sangat worth it untuk fasilitas yang didapat.',
  },
  {
    name: 'Sari Wulandari',
    role: 'Karyawan',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Sering ke sini buat main Nintendo Switch sama keluarga. Anakku suka banget! Tempatnya bersih, AC-nya dingin, dan staffnya ramah.',
  },
  {
    name: 'Dimas Setiawan',
    role: 'Pelajar SMA',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Nongkrong bareng geng di Local Play udah jadi ritual mingguan. Game-nya banyak, koneksinya kenceng, harganya masuk akal banget!',
  },
  {
    name: 'Fajar Nugroho',
    role: 'Freelancer',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Konsol PS5 di sini kondisinya bagus dan terawat. Kursinya nyaman, bikin betah main berjam-jam. Recommended banget buat gamers Lampung!',
  },
  {
    name: 'Ayu Rahayu',
    role: 'Mahasiswi',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Pertama kali main PS dan langsung suka sama suasana Local Play. Staffnya sabar ngajarin cara main. Pasti balik lagi!',
  },
  {
    name: 'Bagas Ardianto',
    role: 'Pegawai Negeri',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Tempat gaming terbaik di Rajabasa! Koleksi gamenya lengkap dari yang klasik sampai yang terbaru. Harga sesuai kualitas.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Testimoni</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Kata Mereka Tentang Local Play.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Lebih dari 500 pelanggan puas telah merasakan pengalaman gaming terbaik bersama kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
                <Quote size={20} className="text-gray-200" />
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{t.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
