import { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fitur', href: '#features' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Konsol', href: '#consoles' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
            <Gamepad2 size={18} className="text-white" />
          </div>
          <span className="text-gray-900 font-semibold text-lg tracking-tight">Local Play</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors"
          >
            Main Sekarang
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-600 hover:text-gray-900 text-sm font-medium py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="block bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Main Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
