
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import SEOHead from '../../components/base/SEOHead';

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Hero animation on load
    setTimeout(() => setHeroVisible(true), 100);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleCallNow = () => {
    window.open('tel:+254729764278', '_self');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Kombani Joint Pub & Grill",
    "description": "Coastal restaurant, lodge, and car hire services in Kenya",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Likoni-Ukunda Road",
      "addressLocality": "Kombani",
      "addressCountry": "Kenya"
    },
    "telephone": "+254729764278",
    "openingHours": "Mo-Su 08:00-24:00",
    "servesCuisine": "Kenyan",
    "priceRange": "$$",
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
    "sameAs": [
      `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/menu`,
      `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/lodge`,
      `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/car-hire`
    ]
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <SEOHead
        title="Kombani Joint Pub & Grill - Coastal Restaurant, Lodge & Car Hire in Kenya"
        description="Experience authentic Kenyan cuisine, comfortable lodging, and reliable car hire services at Kombani Joint Pub & Grill. Located on Likoni-Ukunda Road, Kenya."
        keywords="Kombani Joint, restaurant Kenya, lodge Kenya, car hire Kenya, Likoni Ukunda road, coastal restaurant, Kenyan cuisine, conference facilities"
        ogTitle="Kombani Joint Pub & Grill - Coastal Restaurant, Lodge & Car Hire"
        ogDescription="Experience authentic Kenyan cuisine, comfortable lodging, and reliable car hire services at Kombani Joint Pub & Grill on the beautiful Kenyan coast."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-top flex items-center overflow-hidden hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/restaurant/HERO+Web-24.webp')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className={`text-center text-white transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Welcome to Kombani Joint Pub & Grill
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              The heart of coastal flavor and fun
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              <Link 
                to="/menu" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50 hover:scale-105 whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                View Menu
              </Link>
              <Link 
                to="/car-hire" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                Hire a Car
              </Link>
              <Link 
                to="/lodge" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                Book a Room
              </Link>
              <button 
                onClick={handleCallNow}
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 hover:scale-105 whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={(el) => { sectionsRef.current[0] = el; }} className="py-12 sm:py-16 lg:py-20 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Experience the best of coastal Kenya with our comprehensive hospitality services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Restaurant */}
            <div className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-restaurant-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-3">Restaurant & Grill</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Authentic Kenyan cuisine and fresh grilled specialties in a warm, welcoming atmosphere
              </p>
              <Link 
                to="/menu" 
                className="text-amber-600 hover:text-amber-800 font-medium cursor-pointer text-sm sm:text-base"
              >
                View Menu →
              </Link>
            </div>

            {/* Car Hire */}
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-car-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3">Car Hire & Taxi</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                24-hour taxi services and affordable car rental for exploring the beautiful Kenyan coast
              </p>
              <Link 
                to="/car-hire" 
                className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer text-sm sm:text-base"
              >
                Learn More →
              </Link>
            </div>

            {/* Lodge */}
            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hotel-bed-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-3">Lodge & Accommodation</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                14 comfortable rooms with flexible pricing options for a perfect coastal getaway
              </p>
              <Link 
                to="/lodge" 
                className="text-green-600 hover:text-green-800 font-medium cursor-pointer text-sm sm:text-base"
              >
                Book Now →
              </Link>
            </div>

            {/* Conference */}
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-presentation-line text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3">Conference Facilities</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Professional meeting spaces and event facilities for business and celebrations
              </p>
              <Link 
                to="/lodge" 
                className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer text-sm sm:text-base"
              >
                Inquire →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SGR Transport Section */}
      <section ref={(el) => { sectionsRef.current[1] = el; }} className="py-12 sm:py-16 bg-gradient-to-r from-amber-800 to-amber-900 text-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-train-line text-2xl sm:text-3xl text-white"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">SGR Transport Connections</h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-2">
              We offer convenient SGR transfers from Mombasa Terminus straight to Kombani.
            </p>
            <p className="text-base sm:text-lg font-semibold">
              Available 24 hours a day.
            </p>
            <div className="mt-6">
              <Link 
                to="/car-hire" 
                className="inline-block bg-white text-amber-800 hover:bg-amber-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer text-sm sm:text-base"
              >
                Book SGR Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section ref={(el) => { sectionsRef.current[2] = el; }} className="py-12 sm:py-16 lg:py-20 bg-amber-50 opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 mb-3 sm:mb-4">Gallery Preview</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Get a glimpse of our beautiful facilities and delicious offerings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/restaurant/Hero-Restaurant-53-scaled.jpg"
                alt="Grilled specialties"
                className="w-full h-48 sm:h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <p className="text-white font-semibold p-3 sm:p-4 text-sm sm:text-base">Grilled Specialties</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/restaurant/20251023_122220.jpg"
                alt="Comfortable rooms"
                className="w-full h-48 sm:h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <p className="text-white font-semibold p-3 sm:p-4 text-sm sm:text-base">Comfortable Rooms</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/restaurant/Karen-Car-Hire-07.jpg"
                alt="Car hire fleet"
                className="w-full h-48 sm:h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <p className="text-white font-semibold p-3 sm:p-4 text-sm sm:text-base">Car Hire Fleet</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/restaurant/a.jpg"
                alt="Conference facilities"
                className="w-full h-48 sm:h-64 object-cover object-top hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <p className="text-white font-semibold p-3 sm:p-4 text-sm sm:text-base">Conference Facilities</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link 
              to="/gallery" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={(el) => { sectionsRef.current[3] = el; }} className="py-16 lg:py-20 bg-gradient-to-b from-amber-100 to-amber-200 opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Ready to Experience Kombani Joint?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join us for an unforgettable coastal experience with great food, comfortable accommodation, and reliable services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-amber-800 text-white hover:bg-amber-900 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </Link>
              <a 
                href="https://wa.me/254729764278" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center gap-2"
              >
                <i className="ri-whatsapp-line text-xl"></i>
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
