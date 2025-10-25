
import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';
import WhatsAppFloat from '../../components/feature/WhatsAppFloat';
import SEOHead from '../../components/base/SEOHead';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = {
    breakfast: {
      title: 'BREAKFAST',
      items: [
        { name: 'TEA', price: 'KSh 100' },
        { name: 'SPECIAL TEA', price: 'KSh 180' },
        { name: 'GINGER TEA', price: 'KSh 120' },
        { name: 'LEMON TEA', price: 'KSh 120' },
        { name: 'BONE SOUP', price: 'KSh 200' },
        { name: 'COFFEE', price: 'KSh 120' },
        { name: '2 EGGS', price: 'KSh 160' },
        { name: 'OMELETTE', price: 'KSh 200' },
        { name: '2 SAUSAGES', price: 'KSh 160' },
        { name: '2 SAMOSAS', price: 'KSh 160' },
        { name: 'SINGLE TOAST', price: 'KSh 40' },
        { name: 'DOUBLE TOAST', price: 'KSh 60' },
        { name: 'MILK (PER CUP)', price: 'KSh 120' },
      ]
    },
    snacks: {
      title: 'SNACKS',
      items: [
        { name: '2-SAMOSAS', price: 'KSh 160' },
        { name: '2-SAUSAGES', price: 'KSh 160' },
        { name: 'CHAPATI', price: 'KSh 40' },
        { name: 'OMLETTE', price: 'KSh 200' },
        { name: 'DOUBLE TOAST', price: 'KSh 60' },
        { name: '2-EGGS', price: 'KSh 160' },
        { name: '2-SCRAMBLED EGGS', price: 'KSh 200' },
      ]
    },
    salads: {
      title: 'SALADS',
      items: [
        { name: 'KACHUMBARI', price: 'KSh 90' },
        { name: 'SPECIAL SALAD', price: 'KSh 150' },
        { name: 'MCHICHA', price: 'KSh 50' },
        { name: 'CABBAGE', price: 'KSh 100' },
      ]
    },
    dishes: {
      title: 'DISHES',
      items: [
        { name: 'CHIPS', price: 'KSh 200' },
        { name: 'MATAHA', price: 'KSh 200' },
        { name: 'RICE', price: 'KSh 150' },
        { name: 'SPAGHETTI', price: 'KSh 200' },
        { name: 'SIMA', price: 'KSh 70' },
        { name: 'MATAHA SPECIAL', price: 'KSh 250' },
        { name: 'SPAGHETTI SPECIAL', price: 'KSh 250' },
        { name: 'CHIPS MASALA', price: 'KSh 250' },
      ]
    },
    platter: {
      title: 'PLATTER',
      items: [
        { name: 'BROILER PLATTER', price: 'KSh 1400' },
        { name: 'KIENYEJI PLATTER', price: 'KSh 1800' },
        { name: '1KG BEEF PLATTER', price: 'KSh 1300' },
        { name: '1/2 MUTTON PLATTER', price: 'KSh 800' },
        { name: 'DUCK PLATTER', price: 'KSh 1800' },
        { name: 'CHICKEN PLATTER', price: 'KSh 1800' },
        { name: 'BEEF PLATTER 1/2', price: 'KSh 750' },
        { name: 'MBUZI PLATTER 1/2', price: 'KSh 800' },
      ]
    },
    meat: {
      title: 'MEAT',
      items: [
        { name: 'KUKU BOILER', price: 'KSh 1200' },
        { name: 'KUKU KIENYEJI (BIG)', price: 'KSh 1500' },
        { name: 'FISH (BIG)', price: 'KSh 1500' },
        { name: 'MBUZI', price: 'KSh 1200' },
        { name: '1KG BEEF', price: 'KSh 1100' },
        { name: 'KUKU KIENYEJI (MEDIUM)', price: 'KSh 1300' },
        { name: 'FISH (MEDIUM)', price: 'KSh 1350' },
        { name: '1/2 BEEF', price: 'KSh 550' },
        { name: '1KG BEEF FRY', price: 'KSh 1000' },
        { name: '1KG MBUZI', price: 'KSh 1200' },
        { name: '1/2 MBUZI', price: 'KSh 600' },
      ]
    },
    foods: {
      title: 'FOODS',
      items: [
        { name: 'SUKUMA SPECIAL', price: 'KSh 100' },
        { name: 'KUKU KIENYEJI (MEDIUM)', price: 'KSh 1300' },
        { name: 'KUKU KIENYEJI (BIG)', price: 'KSh 1600' },
        { name: 'CABBAGE', price: 'KSh 100' },
        { name: 'UGALI', price: 'KSh 70' },
        { name: 'GREENS', price: 'KSh 80' },
        { name: 'CHIPS PLAIN', price: 'KSh 200' },
        { name: '1/2 KUKU FRY', price: 'KSh 600' },
        { name: 'FULL KUKU FRY', price: 'KSh 1200' },
        { name: 'CHIPS MASALA', price: 'KSh 250' },
        { name: 'MATAHA SPECIAL', price: 'KSh 200' },
        { name: 'MATAHA PLAIN', price: 'KSh 200' },
        { name: 'BEEF SOUP', price: 'KSh 200' },
        { name: 'PORTION VIAZI', price: 'KSh 200' },
        { name: 'KACHUMBARI', price: 'KSh 80' },
        { name: 'POTION RICE', price: 'KSh 150' },
        { name: 'SPECIAL SALAD', price: 'KSh 150' },
      ]
    },
    drinks: {
      title: 'DRINKS',
      items: [
        { name: 'SODA 300ML', price: 'KSh 100' },
        { name: 'PIET COKE', price: 'KSh 100' },
        { name: 'DELMONTE', price: 'KSh 200' },
        { name: 'ALVARO', price: 'KSh 200' },
        { name: 'M.WATER 1/2', price: 'KSh 60' },
        { name: 'M.WATER (LT)', price: 'KSh 120' },
        { name: 'KERINGET (LT)', price: 'KSh 150' },
        { name: 'KERINGET 1/2', price: 'KSh 80' },
        { name: 'TUSKER', price: 'KSh 300' },
        { name: 'PILSNER', price: 'KSh 300' },
        { name: 'GUINNESS', price: 'KSh 300' },
        { name: 'GUINNESS (B)', price: 'KSh 350' },
        { name: 'BALOZI', price: 'KSh 300' },
        { name: 'ALL SOPS', price: 'KSh 300' },
        { name: 'WHITECUP', price: 'KSh 300' },
        { name: 'SNAPP', price: 'KSh 300' },
        { name: 'SMIRNOFF', price: 'KSh 300' },
        { name: 'WINE GLASS', price: 'KSh 250' },
        { name: 'HEINEKEN', price: 'KSh 350' },
        { name: 'BAILEYS', price: 'KSh 1650' },
        { name: 'KINGFISHER', price: 'KSh 300' },
        { name: 'REDBULL', price: 'KSh 350' },
      ]
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Kombani Joint Pub & Grill Menu",
    "description": "Authentic Kenyan cuisine and fresh coastal dishes",
    "provider": {
      "@type": "Restaurant",
      "name": "Kombani Joint Pub & Grill",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Likoni-Ukunda Road",
        "addressLocality": "Kombani",
        "addressCountry": "Kenya"
      }
    },
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Breakfast",
        "description": "Morning meals and beverages"
      },
      {
        "@type": "MenuSection", 
        "name": "Meat & Platters",
        "description": "Fresh grilled meats and specialty platters"
      },
      {
        "@type": "MenuSection",
        "name": "Drinks & Beverages", 
        "description": "Local and international drinks"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <SEOHead
        title="Menu - Kombani Joint Pub & Grill | Authentic Kenyan Cuisine"
        description="Discover authentic Kenyan flavors and fresh coastal cuisine at Kombani Joint. View our menu featuring local dishes, grill specialties, and refreshing beverages."
        keywords="Kombani Joint menu, Kenyan cuisine, coastal food Kenya, nyama choma, grilled fish, local dishes Kenya, restaurant menu Likoni"
        ogTitle="Menu - Kombani Joint Pub & Grill | Authentic Kenyan Cuisine"
        ogDescription="Discover authentic Kenyan flavors and fresh coastal cuisine at Kombani Joint. Traditional dishes, grilled specialties, and local beverages."
        ogUrl={`${import.meta.env.VITE_SITE_URL || 'https://example.com'}/menu`}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Header */}
      <section className="bg-amber-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Our Menu</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Discover authentic Kenyan flavors and fresh coastal cuisine at Kombani Joint
          </p>
        </div>
      </section>

      {/* M-Pesa Payment Info */}
      <section className="py-6 bg-green-100 border-b-2 border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-600 text-white py-4 px-6 rounded-lg inline-block">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">LIPA NA M-PESA</h2>
            <p className="text-lg sm:text-xl font-semibold">TILL NO: 239529</p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8 sm:mb-12 bg-white rounded-lg p-2 shadow-md gap-2">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-xs sm:text-sm ${
                  activeCategory === key
                    ? 'bg-amber-600 text-white'
                    : 'text-amber-700 hover:bg-amber-100'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-6 sm:mb-8 text-center">
              {menuCategories[activeCategory as keyof typeof menuCategories].title}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
                <div key={index} className="border-b border-amber-100 pb-3 last:border-b-0">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="text-sm sm:text-base font-semibold text-amber-800 flex-1">{item.name}</h3>
                    <span className="text-sm sm:text-base font-bold text-amber-600 whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-amber-100 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-800 mb-3 sm:mb-4">Ready to Order?</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 px-4">
                Visit us at Kombani, Likoni–Ukunda Road or call to make a reservation
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a 
                  href="tel:+254729764278"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  Call to Order
                </a>
                <a 
                  href="https://wa.me/254729764278" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer text-sm sm:text-base"
                >
                  WhatsApp Us
                </a>
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
