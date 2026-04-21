import { Gamepad2, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <Gamepad2 size={18} className="text-white" />
            </div>
            <span className="text-gray-900 font-semibold text-lg tracking-tight">Local Play</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['Fitur', 'Harga', 'Konsol', 'Galeri', 'Testimoni'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Facebook, label: 'Facebook' },
              { icon: Youtube, label: 'YouTube' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Icon size={16} className="text-gray-600" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            Jl. Fabil, Rajabasa Raya, Kec. Rajabasa, Kota Bandar Lampung, Lampung 35142
          </p>
          <p className="text-xs text-gray-400">
            {year} Local Play. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
