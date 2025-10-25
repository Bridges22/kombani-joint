
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import SEOHead from '../../components/base/SEOHead';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      src: '/gallery/grilled specialties.jpg',
      alt: 'Grilled specialties',
      category: 'restaurant'
    },
    {
      src: '/gallery/interior.jpg',
      alt: 'Restaurant interior',
      category: 'restaurant'
    },
    {
      src: '/gallery/fresh sea food.jpg',
      alt: 'Fresh seafood',
      category: 'restaurant'
    },
    {
      src: '/gallery/outdoor dining.jpg',
      alt: 'Outdoor dining',
      category: 'restaurant'
    },
    {
      src: '/gallery/comfort rooms.jpg',
      alt: 'Comfortable room',
      category: 'lodge'
    },
    {
      src: '/gallery/20251023_122304.jpg',
      alt: 'Luxury suite',
      category: 'lodge'
    },
    {
      src: '/gallery/20251023_123502.jpg',
      alt: 'Hotel lobby',
      category: 'lodge'
    },
    {
      src: '/gallery/20251023_122035.jpg',
      alt: 'Lodge exterior',
      category: 'lodge'
    },
    {
      src: '/gallery/tooj0.jpeg',
      alt: 'Toyota Vitz',
      category: 'cars'
    },
    {
      src: '/gallery/big_img-20240928-wa0007.jpg',
      alt: 'Toyota Hiace',
      category: 'cars'
    },
    {
      src: '/gallery/IMG-20240514-WA0138.jpg',
      alt: 'Car fleet',
      category: 'cars'
    },
    {
      src: '/gallery/20251023_121236.jpg',
      alt: 'Conference hall',
      category: 'conference'
    },
    {
      src: '/gallery/20251023_121314.jpg',
      alt: 'Meeting room',
      category: 'conference'
    },
    {
      src: '/gallery/events.jpg',
      alt: 'Event space',
      category: 'conference'
    },
    {
      src: '/gallery/20251023_121439.jpg',
      alt: 'Sunset view',
      category: 'views'
    },
    {
      src: '/gallery/20251023_122240.jpg',
      alt: 'Coastal view',
      category: 'views'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'restaurant', label: 'Restaurant' },
    { key: 'lodge', label: 'Lodge' },
    { key: 'cars', label: 'Car Hire' },
    { key: 'conference', label: 'Conference' },
    { key: 'views', label: 'Views' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Kombani Joint Pub & Grill Gallery",
    "description": "Photo gallery showcasing our beautiful facilities, delicious food, and stunning coastal location",
    "provider": {
      "@type": "Restaurant",
      "name": "Kombani Joint Pub & Grill"
    },
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/gallery`
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <SEOHead
        title="Gallery - Kombani Joint Pub & Grill | Photos of Our Facilities"
        description="Explore our beautiful facilities, delicious food, and stunning coastal location through our photo gallery. See our restaurant, lodge, car hire fleet, and conference facilities."
        keywords="Kombani Joint gallery, restaurant photos Kenya, lodge photos, car hire fleet, coastal restaurant images, Kenya hospitality photos"
        ogTitle="Gallery - Kombani Joint Pub & Grill | Photos of Our Facilities"
        ogDescription="Explore our beautiful facilities, delicious food, and stunning coastal location through our comprehensive photo gallery."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}/gallery`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header */}
      <section className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our beautiful facilities, delicious food, and stunning coastal location
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg p-2 shadow-md">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer m-1 ${
                  activeCategory === category.key
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openModal(image.src)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-zoom-in-line text-amber-600"></i>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer z-10"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-close-line text-2xl"></i>
              </div>
            </button>
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Experience Kombani Joint</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ready to create your own memories? Visit us and experience the best of coastal hospitality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+254729764278"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Call Us
              </a>
              <a 
                href="https://wa.me/254729764278" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
