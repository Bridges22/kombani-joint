
import { useEffect, useRef } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import SEOHead from '../../components/base/SEOHead';

export default function CarHire() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
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

  const cars = [
    {
      name: 'Small Car Hire',
      type: 'Compact Vehicle',
      price: 'KSh 4,000/day',
      features: ['Air Conditioning', 'Fuel Efficient', '4-5 Passengers', 'Well Maintained'],
      image: '/cars/4nks7-cSRpG-f4kqzlO93Q.avif'
    },
    {
      name: '24-Hour Taxi Service',
      type: 'Available Anytime',
      price: 'Competitive Rates',
      features: ['Available 24/7', 'Professional Drivers', 'SGR Transfers', 'Local & Long Distance'],
      image: '/cars/IMG20240508114301-scaled.jpg'
    }
  ];

  const handleWhatsAppBooking = () => {
    const message = "Hi! I'm interested in car hire or taxi services from Kombani Joint. Could you please provide more details about availability and rates?";
    window.open(`https://wa.me/254729764278?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBookRide = () => {
    const message = "Hi! I'd like to book a ride with Kombani Joint. Please let me know about availability.";
    window.open(`https://wa.me/254729764278?text=${encodeURIComponent(message)}`, '_blank');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Kombani Joint Car Hire & Taxi Service",
    "description": "24-hour taxi service and affordable car rental for exploring the Kenyan coast, including SGR transfers",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Likoni-Ukunda Road",
      "addressLocality": "Kombani",
      "addressCountry": "Kenya"
    },
    "telephone": "+254729764278",
    "priceRange": "KSh 4,000 per day for car hire",
    "areaServed": {
      "@type": "Place",
      "name": "Coastal Kenya"
    },
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/car-hire`
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <SEOHead
        title="Car Hire & Taxi Service - Kombani Joint | 24-Hour Transport Kenya"
        description="Professional 24-hour taxi service and affordable car rental in coastal Kenya. SGR transfers, local and long-distance transport available."
        keywords="car hire Kenya, taxi service Likoni, 24 hour taxi Kenya, SGR transfer Mombasa, vehicle rental coastal Kenya, Kombani transport"
        ogTitle="Car Hire & Taxi Service - Kombani Joint | 24-Hour Transport"
        ogDescription="Professional 24-hour taxi service and affordable car rental. SGR transfers and coastal transport available."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}/car-hire`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Car Hire & Taxi Service</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional 24-hour taxi service and affordable car rental for exploring the beautiful Kenyan coast
          </p>
        </div>
      </section>

      {/* About Service */}
      <section ref={(el) => { sectionsRef.current[1] = el; }} className="py-16 bg-white opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Choose Our Transport Services?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">24-Hour Availability</h3>
                    <p className="text-gray-600">Our taxi service operates round the clock for your convenience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">SGR Transfers</h3>
                    <p className="text-gray-600">Seamless connections to and from Mombasa SGR Terminus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">Airport & Airstrip Transport</h3>
                    <p className="text-gray-600">We offer transport to and from Ukunda Airstrip and Mombasa Airport.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">Affordable Car Hire</h3>
                    <p className="text-gray-600">Small cars available at KSh 4,000 per day with no hidden charges</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">Professional Drivers</h3>
                    <p className="text-gray-600">Experienced drivers who know the coastal roads and provide excellent service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800">Well-Maintained Vehicles</h3>
                    <p className="text-gray-600">All vehicles are regularly serviced to ensure your safety and comfort</p>
                  </div>
                </div>
              </div>
              
              {/* Book a Ride Button */}
              <div className="mt-8">
                <button 
                  onClick={handleBookRide}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-lg w-full sm:w-auto pulse-whatsapp"
                >
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center mr-2">
                      <i className="ri-whatsapp-line text-xl"></i>
                    </div>
                    Book Your Ride
                  </div>
                </button>
              </div>
            </div>
            <div>
              <img 
                src="/cars/istockphoto-467103541-612x612.jpg"
                alt="Car hire and taxi service"
                className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={(el) => { sectionsRef.current[2] = el; }} className="py-16 bg-blue-50 opacity-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Transport Services</h2>
            <p className="text-lg text-gray-600">
              Choose the service that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-blue-800">{car.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{car.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{car.type}</p>
                  <div className="space-y-2">
                    {car.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-600 text-sm"></i>
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={(el) => { sectionsRef.current[3] = el; }} className="py-16 bg-white opacity-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ready to Book Your Transport?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contact us on WhatsApp to check availability and make your reservation. 
              Whether you need a taxi, car hire, or SGR transfer, we're here to help 24/7.
            </p>
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppBooking}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer text-lg pulse-whatsapp"
              >
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <i className="ri-whatsapp-line text-xl"></i>
                  </div>
                  Contact on WhatsApp to Book
                </div>
              </button>
              <p className="text-sm text-gray-600">
                Or call us directly at <a href="tel:+254729764278" className="text-blue-600 hover:text-blue-800 cursor-pointer">0729 764278</a>
              </p>
            </div>
          </div>

          {/* Service Info */}
          <div className="mt-12 bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-800 mb-4">Service Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Taxi Service:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Available 24 hours a day</li>
                  <li>• SGR station transfers</li>
                  <li>• Local and long-distance trips</li>
                  <li>• Professional drivers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Car Hire:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Small cars at KSh 4,000/day</li>
                  <li>• Valid driving license required</li>
                  <li>• Fuel: Return with same level</li>
                  <li>• Insurance included</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">SGR Transfers:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Available 24 hours a day</li>
                  <li>• Convenient connections from Mombasa Terminus</li>
                  <li>• Reliable pickup and drop-off service</li>
                  <li>• Direct to Kombani</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 mb-2">Airport & Airstrip:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Ukunda Airstrip transfers</li>
                  <li>• Mombasa Airport transport</li>
                  <li>• Available 24 hours</li>
                  <li>• Professional service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
