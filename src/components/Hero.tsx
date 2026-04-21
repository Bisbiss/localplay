import { ArrowRight, Star, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Open Now · Rajabasa, Bandar Lampung
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-tight tracking-tight">
                Level Up
                <br />
                <span className="text-gray-400">Pengalaman</span>
                <br />
                Bermainmu.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                Sewa dan nikmati gaming terbaik bersama teman. PS3, PS4, PS5, hingga Nintendo — semua tersedia dengan harga terjangkau mulai Rp 35.000.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-medium px-7 py-3.5 rounded-full hover:bg-gray-700 transition-all hover:gap-3 group"
              >
                Reservasi Sekarang
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-medium px-7 py-3.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                Lihat Harga
              </a>
            </div>

            <div className="flex items-center gap-8 pt-2">
              <div className="flex items-center gap-2 text-gray-500">
                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-gray-700">4.9</span>
                <span className="text-sm">Rating</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Users size={15} />
                <span className="text-sm font-medium text-gray-700">500+</span>
                <span className="text-sm">Pelanggan</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={15} />
                <span className="text-sm font-medium text-gray-700">08:00–24:00</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl"></div>
            <div className="relative z-10 p-8">
              <img
                src="/hero.jpg"
                alt="Gaming Setup"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PS5</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Tersedia</p>
                  <p className="text-sm font-semibold text-gray-900">PlayStation 5</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4">
                <p className="text-xs text-gray-500">Mulai dari</p>
                <p className="text-lg font-bold text-gray-900">Rp 35.000</p>
                <p className="text-xs text-gray-400">/ orang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
