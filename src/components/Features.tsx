import { Wifi, Users, Shield, Headphones, Zap, Coffee } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Konsol Terbaru',
    description: 'Tersedia PS3, PS4, PS5, dan Nintendo Switch dalam kondisi prima. Update game terbaru setiap bulan.',
  },
  {
    icon: Users,
    title: 'Main Bareng Teman',
    description: 'Nikmati gaming bersama hingga 4 orang dalam satu sesi. Cocok untuk nongkrong dan kompetisi.',
  },
  {
    icon: Wifi,
    title: 'Internet Cepat',
    description: 'Koneksi internet fiber optik yang stabil untuk gaming online tanpa lag dan gangguan.',
  },
  {
    icon: Shield,
    title: 'Tempat Aman & Nyaman',
    description: 'Ruangan ber-AC, bersih, dan aman. CCTV 24 jam untuk keamanan barang bawaan kamu.',
  },
  {
    icon: Headphones,
    title: 'Headset & Aksesoris',
    description: 'Tersedia headset gaming, controller spare, dan aksesoris lengkap tanpa biaya tambahan.',
  },
  {
    icon: Coffee,
    title: 'Santai & Nyaman',
    description: 'Kursi ergonomis, minuman tersedia, dan suasana yang bikin kamu betah berlama-lama.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Keunggulan Kami</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Kenapa Pilih Local Play?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Kami hadirkan pengalaman gaming terbaik dengan fasilitas lengkap dan harga yang bersahabat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-7 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gray-900 transition-colors">
                <feature.icon size={20} className="text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
