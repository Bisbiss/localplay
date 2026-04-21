import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Regular',
    console: 'PS 3',
    price: '35.000',
    unit: '/ orang / jam',
    description: 'Cocok untuk gaming santai bersama teman.',
    features: [
      'Akses PS 3',
      'Controller standard',
      'Internet WiFi',
      'Kursi nyaman & AC',
      'Bebas pilih game',
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    console: 'PS 4',
    price: '40.000',
    unit: '/ orang / jam',
    description: 'Pengalaman bermain seru dengan grafik memukau.',
    features: [
      'Akses PlayStation 4',
      'DualShock Controller',
      'Internet Fiber Optik',
      'Headset gaming tersedia',
      'Game populer PS4',
      'Prioritas booking',
    ],
    highlight: true,
  },
  {
    name: 'Ultimate',
    console: 'PS 5 / Nintendo',
    price: '50.000',
    unit: '/ orang / jam',
    description: 'Sensasi next-gen gaming & serunya game Nintendo.',
    features: [
      'Akses PS 5 atau Switch',
      'DualSense / Joy-Con',
      'Internet Super Cepat',
      'Game eksklusif & lokal',
      'Bebas pilih game',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Harga</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Harga Transparan,
            <br />
            Tanpa Biaya Tersembunyi.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Mulai dari Rp 35.000 per orang per jam. Bayar sesuai durasi main kamu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 relative ${
                plan.highlight
                  ? 'bg-gray-900 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-gray-900 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-medium uppercase tracking-widest mb-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>
                  {plan.console}
                </p>
                <h3 className={`text-xl font-semibold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className={`text-sm font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>Rp</span>
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-xs mt-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>{plan.unit}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      <Check size={11} className={plan.highlight ? 'text-white' : 'text-gray-600'} />
                    </div>
                    <span className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block text-center py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                }`}
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          * Harga berlaku per orang per jam. Diskon khusus untuk sesi lebih dari 3 jam.
        </p>
      </div>
    </section>
  );
}
