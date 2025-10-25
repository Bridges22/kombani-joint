
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import SEOHead from '../../components/base/SEOHead';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Restaurant",
      "name": "Kombani Joint Pub & Grill",
      "description": "Coastal restaurant, lodge, and car hire services in Kenya with a passion for bringing people together through exceptional food and hospitality",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Likoni-Ukunda Road",
        "addressLocality": "Kombani",
        "addressCountry": "Kenya"
      },
      "telephone": "+254729764278",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <SEOHead
        title="About Kombani Joint Pub & Grill - Our Story & Mission"
        description="Learn about Kombani Joint Pub & Grill's story, mission, and commitment to serving great food, offering comfort, and creating memories on the Kenyan coast."
        keywords="about Kombani Joint, restaurant story Kenya, coastal hospitality, Kenyan restaurant history, Kombani mission"
        ogTitle="About Kombani Joint Pub & Grill - Our Story & Mission"
        ogDescription="Discover our story and commitment to serving great food, offering comfort, and creating memories on the beautiful Kenyan coast."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header */}
      <section className="bg-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kombani Joint</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our story and commitment to serving great food, offering comfort, and creating memories
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kombani Joint Pub & Grill was born from a passion for bringing people together through 
                  exceptional food, comfortable accommodation, and reliable services. Located on the 
                  beautiful Likoni–Ukunda Road in Kombani, we have become a beloved destination for 
                  locals and visitors alike.
                </p>
                <p>
                  What started as a simple vision to create a welcoming space where families and friends 
                  could gather has grown into a comprehensive hospitality destination. We pride ourselves 
                  on serving authentic Kenyan cuisine alongside international favorites, all prepared 
                  with fresh, local ingredients.
                </p>
                <p>
                  Over the years, we've expanded our services to include comfortable lodge accommodation, 
                  reliable car hire services, and professional conference facilities. Each addition has 
                  been driven by our commitment to meeting the diverse needs of our community and guests.
                </p>
                <p>
                  Today, Kombani Joint stands as more than just a restaurant – we're a complete 
                  hospitality experience that celebrates the warmth and beauty of the Kenyan coast.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/about/Hero section photo.jpg"
                alt="Our story"
                className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our commitment to excellence and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To serve great food, offer comfort, and create memories that last a lifetime for 
                every guest who walks through our doors.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We are committed to using the freshest ingredients, maintaining the highest 
                standards, and delivering exceptional service in everything we do.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-community-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Community Focus</h3>
              <p className="text-gray-600">
                We believe in supporting our local community, sourcing locally when possible, 
                and creating a space where everyone feels welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">What Makes Us Special</h2>
            <p className="text-lg text-gray-600">
              Discover the unique features that set Kombani Joint apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-restaurant-2-line text-3xl text-amber-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Authentic Cuisine</h3>
              <p className="text-gray-600 text-sm">
                Traditional Kenyan dishes prepared with authentic recipes and fresh local ingredients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-2-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Prime Location</h3>
              <p className="text-gray-600 text-sm">
                Perfectly situated on the coastal road with easy access and beautiful surroundings
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-service-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Full Service</h3>
              <p className="text-gray-600 text-sm">
                Restaurant, lodge, car hire, and conference facilities all under one roof
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Friendly Staff</h3>
              <p className="text-gray-600 text-sm">
                Our experienced team is dedicated to making your experience memorable and enjoyable
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-100 to-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Join Our Story</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Become part of the Kombani Joint family. We look forward to serving you and creating wonderful memories together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+254729764278"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              Call Us Today
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
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
