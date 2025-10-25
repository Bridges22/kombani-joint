
export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254729764278', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 cursor-pointer pulse-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
        <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
      </div>
    </button>
  );
}
