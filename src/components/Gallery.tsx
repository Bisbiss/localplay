const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gaming Room',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Controller',
    span: 'col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Gaming Setup',
    span: 'col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Playing Games',
    span: 'col-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Game Night',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Galeri</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Suasana Local Play.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Intip suasana tempat bermain kami yang nyaman dan modern.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`${img.span} overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
