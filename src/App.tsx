import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Consoles from './components/Consoles';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Consoles />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
