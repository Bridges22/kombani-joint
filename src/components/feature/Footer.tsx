
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              Kombani Joint Pub & Grill
            </h3>
            <p className="text-sm sm:text-base text-amber-200 mb-4">
              The heart of coastal flavor and fun. Experience authentic Kenyan cuisine, comfortable lodging, 
              reliable car hire services, and memorable moments at the beautiful Kenyan coast.
            </p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-3 text-amber-100">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/kombani.joint" target="_blank" rel="noopener noreferrer" 
                   className="text-amber-200 hover:text-white transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-800 hover:bg-amber-700 rounded-full transition-colors">
                    <i className="ri-facebook-fill text-lg"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/kombani.joint.bar" target="_blank" rel="noopener noreferrer" 
                   className="text-amber-200 hover:text-white transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-800 hover:bg-amber-700 rounded-full transition-colors">
                    <i className="ri-instagram-fill text-lg"></i>
                  </div>
                </a>
                <a href="https://twitter.com/kombani_joint" target="_blank" rel="noopener noreferrer" 
                   className="text-amber-200 hover:text-white transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-800 hover:bg-amber-700 rounded-full transition-colors">
                    <i className="ri-twitter-x-fill text-lg"></i>
                  </div>
                </a>
                <a href="https://wa.me/254729764278" target="_blank" rel="noopener noreferrer" 
                   className="text-amber-200 hover:text-white transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-800 hover:bg-amber-700 rounded-full transition-colors">
                    <i className="ri-whatsapp-fill text-lg"></i>
                  </div>
                </a>
                <a href="tel:+254729764278" className="text-amber-200 hover:text-white transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-800 hover:bg-amber-700 rounded-full transition-colors">
                    <i className="ri-phone-fill text-lg"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/menu" className="text-amber-200 hover:text-white transition-colors cursor-pointer">Menu</Link></li>
              <li><Link to="/car-hire" className="text-amber-200 hover:text-white transition-colors cursor-pointer">Car Hire</Link></li>
              <li><Link to="/lodge" className="text-amber-200 hover:text-white transition-colors cursor-pointer">Lodge & Conference</Link></li>
              <li><Link to="/gallery" className="text-amber-200 hover:text-white transition-colors cursor-pointer">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 text-amber-200 text-sm sm:text-base">
              <p className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>Kombani, Likoni–Ukunda Road, Kenya</span>
              </p>
              <p className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                <span>0729 764278</span>
              </p>
              <p className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  <i className="ri-time-line"></i>
                </div>
                <span>Daily 8 AM – 12 Midnight</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-amber-200 text-xs sm:text-sm">
          <p>&copy; 2025 Kombani Joint Pub & Grill. All rights reserved. | 
            <a href="https://bridgeswebsolutions.top/" target="_blank" rel="noopener noreferrer" 
               className="hover:text-white transition-colors cursor-pointer ml-1">
              Powered by BWS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
