
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import SEOHead from '../../components/base/SEOHead';

export default function Lodge() {
  const rooms = [
    {
      name: 'Single Room',
      price: 'From KSh 1,500/night',
      features: ['Single Bed', 'Private Bathroom', 'Free WiFi', 'Comfortable & Clean'],
      image: '/lodge/20251023_121949.jpg'
    },
    {
      name: 'Double Room',
      price: 'KSh 3,000/night',
      features: ['Comfortable Double Bed', 'Private Bathroom', 'Free WiFi'],
      image: '/lodge/20251023_121636.jpg'
    },
    {
      name: 'Hot Water Room',
      price: 'KSh 2,000/night',
      features: ['Hot Water System', 'Private Bathroom', 'Free WiFi', 'Premium Comfort'],
      image: '/lodge/20251023_121914.jpg'
    }
  ];

  const handleWhatsAppBooking = (type: string) => {
    const message = `Hi! I'm interested in booking ${type} at Kombani Joint. Could you please provide more details about availability and rates?`;
    window.open(`https://wa.me/254729764278?text=${encodeURIComponent(message)}`, '_blank');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Kombani Joint Lodge",
    "description": "Comfortable coastal accommodation and professional meeting facilities",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Likoni-Ukunda Road",
      "addressLocality": "Kombani",
      "addressCountry": "Kenya"
    },
    "telephone": "+254729764278",
    "checkinTime": "14:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free WiFi"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Air Conditioning"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Conference Facilities"
      }
    ],
    "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/lodge`
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <SEOHead
        title="Lodge & Conference - Kombani Joint | Coastal Accommodation Kenya"
        description="Comfortable accommodation and professional meeting facilities at Kombani Joint Lodge. Book rooms, conference halls, and event spaces on the Kenyan coast."
        keywords="Kombani Joint lodge, accommodation Kenya, hotel Likoni, conference facilities Kenya, coastal lodge, meeting rooms Kenya"
        ogTitle="Lodge & Conference - Kombani Joint | Coastal Accommodation"
        ogDescription="Comfortable accommodation and professional meeting facilities on the beautiful Kenyan coast. Book your stay today."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}/lodge`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lodge &amp; Conference</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comfortable accommodation and professional meeting facilities on the beautiful Kenyan coast
          </p>
        </div>
      </section>

      {/* Lodge Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Comfortable Coastal Accommodation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience the perfect blend of comfort and coastal charm at Kombani Joint Lodge. 
                Our 14 well-appointed rooms offer a peaceful retreat after a day of exploring the beautiful Kenyan coast.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">14 clean and comfortable rooms</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">Flexible pricing from KSh 1,500 per night</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">Modern amenities and facilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">Friendly and helpful staff</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">Prime coastal location</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lodge/20251023_122217.jpg"
                alt="Lodge exterior"
                className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Rooms</h2>
            <p className="text-lg text-gray-600">
              Choose from our 14 comfortable rooms with flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-green-800">{room.name}</h3>
                    <span className="text-lg font-bold text-green-600">{room.price}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-600 text-sm"></i>
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleWhatsAppBooking(room.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Facilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">Conference Facility</h2>
            <p className="text-lg text-gray-600">
              Professional meeting space for business events, conferences, and celebrations
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-purple-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="/lodge/20251023_121254.jpg"
                alt="Conference Room"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-3">Conference Room</h3>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-purple-600 font-semibold text-lg">Up to 70 people</p>
                  <p className="text-2xl font-bold text-purple-800">KSh 7,000/day</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-purple-600 text-lg"></i>
                    </div>
                    <span className="text-gray-700">Projector & Screen</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-purple-600 text-lg"></i>
                    </div>
                    <span className="text-gray-700">Sound System</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-purple-600 text-lg"></i>
                    </div>
                    <span className="text-gray-700">Air Conditioning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-purple-600 text-lg"></i>
                    </div>
                    <span className="text-gray-700">Free WiFi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-purple-600 text-lg"></i>
                    </div>
                    <span className="text-gray-700">Catering Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-check-line text-purple-600 text-lg"></i>
                    </div>
                    <span className="text-gray-700">Flexible Seating Arrangements</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleWhatsAppBooking('Conference Room')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  Inquire About This Space
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">Ready to Book Your Stay?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us to check availability and make your reservation. We're here to make your coastal experience memorable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-4">Lodge Accommodation</h3>
              <p className="text-gray-600 mb-4">Book your comfortable room for a peaceful coastal stay</p>
              <button 
                onClick={() => handleWhatsAppBooking('accommodation')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Book a Room
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-purple-800 mb-4">Conference Room</h3>
              <p className="text-gray-600 mb-4">Reserve our professional meeting space for your event</p>
              <button 
                onClick={() => handleWhatsAppBooking('conference room')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                Inquire via WhatsApp
              </button>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p>Or call us directly at <a href="tel:+254729764278" className="text-amber-600 hover:text-amber-800 cursor-pointer">0729 764278</a></p>
            <p className="mt-2">Check-in: 2:00 PM | Check-out: 11:00 AM</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
