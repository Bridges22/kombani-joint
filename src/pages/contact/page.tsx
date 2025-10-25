
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import SEOHead from '../../components/base/SEOHead';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Kombani Joint Pub & Grill",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Likoni-Ukunda Road",
        "addressLocality": "Kombani",
        "addressCountry": "Kenya"
      },
      "telephone": "+254729764278",
      "openingHours": "Mo-Su 08:00-24:00",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-4.1963164",
        "longitude": "39.5903001"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <SEOHead
        title="Contact Us - Kombani Joint Pub & Grill | Get in Touch"
        description="Contact Kombani Joint Pub & Grill for reservations, bookings, and inquiries. Located on Likoni-Ukunda Road, Kombani, Kenya. Call 0729 764278 or WhatsApp us."
        keywords="contact Kombani Joint, restaurant contact Kenya, Kombani phone number, Likoni restaurant contact, Kenya restaurant reservations"
        ogTitle="Contact Us - Kombani Joint Pub & Grill | Get in Touch"
        ogDescription="Contact us for reservations, bookings, and inquiries. Located on Likoni-Ukunda Road, Kombani, Kenya."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}/contact`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Get in touch with Kombani Joint Pub & Grill
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-map-pin-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Location</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Kombani, Likoni–Ukunda Road<br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-phone-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Phone</h3>
                    <a href="tel:0729764278" className="text-gray-600 hover:text-amber-600 transition-colors text-sm sm:text-base">
                      0729 764278
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">WhatsApp</h3>
                    <a 
                      href="https://wa.me/254729764278" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-amber-600 transition-colors text-sm sm:text-base"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-time-line text-amber-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Opening Hours</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Daily: 8:00 AM - 12:00 Midnight
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
                <a
                  href="https://wa.me/254729764278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-7
                  00 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-whatsapp-fill text-lg"></i>
                  <span>Message on WhatsApp</span>
                </a>
                
                <a
                  href="tel:0729764278"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-fill text-lg"></i>
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.823456789012!2d39.5877252!3d-4.1963164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840410b295db3dd%3A0x2d63488071192b43!2sKombani%20Joint%20Bar%20%26%20Restaurant!5e0!3m2!1sen!2ske!4v1647123456789!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kombani Joint Pub & Grill Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <a
              href="/menu"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors">
                <i className="ri-restaurant-line text-amber-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Restaurant</h3>
              <p className="text-gray-600 text-xs sm:text-sm">View our delicious menu</p>
            </a>

            <a
              href="/car-hire"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                <i className="ri-car-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Car Hire</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Rent a vehicle</p>
            </a>

            <a
              href="/lodge"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors">
                <i className="ri-hotel-bed-line text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Lodge</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Book accommodation</p>
            </a>

            <a
              href="/car-hire"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-orange-200 transition-colors">
                <i className="ri-train-line text-orange-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">SGR Transfers</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Seamless connections to and from Mombasa SGR Terminus</p>
            </a>

            <a
              href="/car-hire"
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group cursor-pointer"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-indigo-200 transition-colors">
                <i className="ri-plane-line text-indigo-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">Airport & Airstrip Transport</h3>
              <p className="text-gray-600 text-xs sm:text-sm">We offer transport to and from Ukunda Airstrip and Mombasa Airport.</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
