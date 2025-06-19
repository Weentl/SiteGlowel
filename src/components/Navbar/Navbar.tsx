import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(7);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const interval = setInterval(() => {
      setAvailableSlots(prev => {
        if (prev > 3) return prev - 1;
        return Math.floor(Math.random() * 3) + 3;
      });
    }, 30000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const whatsappNumber = '522713145187';
  const whatsappMessage = 'Hola Glowel, me gustaría obtener más información sobre sus soluciones digitales.';

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nuestro Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="text-sm md:text-base font-semibold">
            🚀 ¡Promoción de Lanzamiento! 50% de descuento - Solo {availableSlots} cupos disponibles
          </span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
          : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo con efecto glow sutil */}
            <div className="flex items-center flex-shrink-0 group">
              <div className="relative">
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                <span className="text-2xl font-black bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent tracking-tight leading-snug hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 transition-all duration-300">
                  Glowel
                </span>
              </div>
            </div>

            {/* Enlaces de navegación Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="relative px-4 py-2 text-gray-700 hover:text-orange-600 transition-all duration-300 font-medium text-base rounded-lg group overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </a>
              ))}
              
              {/* Botón de WhatsApp Desktop mejorado */}
              <div className="ml-8">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative px-6 py-3 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 text-white rounded-full text-sm font-semibold 
                           shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center space-x-2 group overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-600 before:to-emerald-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                >
                  <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">WhatsApp</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl"></div>
                </a>
              </div>
            </div>

            {/* Botón de Menú Móvil mejorado */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 group"
              >
                <span className="sr-only">Abrir menú principal</span>
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil mejorado */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-out origin-top ${
            isMenuOpen 
              ? 'scale-y-100 opacity-100 translate-y-0' 
              : 'scale-y-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="block px-4 py-3 text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 rounded-xl font-medium text-base group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <div className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                  </span>
                </a>
              ))}
              
              {/* Botón de WhatsApp Móvil mejorado */}
              <div className="pt-4 border-t border-gray-100/50">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-full px-6 py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 text-white rounded-2xl text-base font-semibold 
                           shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center space-x-3 group overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-600 before:to-emerald-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                >
                  <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Contactar por WhatsApp</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Espaciador para compensar el navbar fijo */}
      <div className="h-18"></div>
    </header>
  );
}