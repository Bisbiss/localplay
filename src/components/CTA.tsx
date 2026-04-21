import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CTA() {
  const phoneNumber = '081234567890';
  const waLink = `https://wa.me/62${phoneNumber.slice(1)}?text=Halo%20Local%20Play%2C%20saya%20ingin%20reservasi%20gaming!`;

  return (
    <section id="cta" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">Hubungi Kami</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                Siap Level Up?
                <br />
                <span className="text-gray-400">Hubungi Kami Sekarang.</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Reservasi tempat atau tanya informasi lebih lanjut langsung via WhatsApp. Kami siap melayani kamu!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold px-7 py-4 rounded-full hover:bg-gray-100 transition-all hover:gap-3 group text-sm"
              >
                <Phone size={16} />
                {phoneNumber}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Lokasi</p>
                  <p className="text-white font-medium text-sm leading-relaxed">
                    Jl. Fabil, Rajabasa Raya,
                    <br />
                    Kec. Rajabasa, Kota Bandar Lampung,
                    <br />
                    Lampung 35142
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10"></div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Jam Operasional</p>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-400 text-sm">Senin – Jumat</span>
                      <span className="text-white text-sm font-medium">09:00 – 24:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-400 text-sm">Sabtu – Minggu</span>
                      <span className="text-white text-sm font-medium">08:00 – 24:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10"></div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium text-sm hover:text-gray-300 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Konsol', value: '4+' },
                { label: 'Pelanggan', value: '500+' },
                { label: 'Rating', value: '4.9★' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
