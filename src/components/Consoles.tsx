const consoles = [
  {
    name: 'PlayStation 5',
    tag: 'PS5',
    badge: 'Next-Gen',
    description: 'Performa terdepan dengan SSD ultra-cepat, DualSense haptic feedback, dan grafis 4K HDR.',
    price: 'Rp 40.000',
    image: 'https://images.pexels.com/photos/6498304/pexels-photo-6498304.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['4K Resolution', 'SSD NVMe', 'DualSense Controller', 'Ray Tracing'],
  },
  {
    name: 'PlayStation 4',
    tag: 'PS4',
    badge: 'Best Value',
    description: 'Ribuan game AAA tersedia. Cocok untuk semua kalangan dengan koleksi game terlengkap.',
    price: 'Rp 25.000',
    image: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['1080p Gaming', 'Library 4000+ Games', 'DualShock 4', 'Multiplayer'],
  },
  {
    name: 'Nintendo Switch',
    tag: 'NSW',
    badge: 'Family Fun',
    description: 'Main di TV atau portable. Game keluarga seru seperti Mario, Zelda, dan Pokemon.',
    price: 'Rp 35.000',
    image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Portable & TV Mode', 'Joy-Con Controllers', 'Local Multiplayer', 'Exclusive Titles'],
  },
  {
    name: 'PlayStation 3',
    tag: 'PS3',
    badge: 'Classic',
    description: 'Nostalgia dengan koleksi game klasik legendaris yang tak lekang oleh waktu.',
    price: 'Rp 25.000',
    image: 'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Full HD 1080p', 'Classic Library', 'DualShock 3', 'Multiplayer'],
  },
];

export default function Consoles() {
  return (
    <section id="consoles" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Konsol</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Pilih Konsol Favoritmu.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Semua konsol dalam kondisi prima dan terawat. Game selalu diupdate secara berkala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {consoles.map((console) => (
            <div
              key={console.name}
              className="bg-white rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={console.image}
                  alt={console.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {console.tag}
                  </span>
                  <span className="bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {console.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white rounded-xl px-3 py-1.5">
                  <span className="text-sm font-bold text-gray-900">{console.price}</span>
                  <span className="text-xs text-gray-500"> / jam</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{console.name}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{console.description}</p>
                <div className="flex flex-wrap gap-2">
                  {console.specs.map((spec) => (
                    <span
                      key={spec}
                      className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
