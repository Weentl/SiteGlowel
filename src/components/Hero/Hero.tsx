import  { useState, useEffect } from 'react';
import { ChevronRight, Calendar } from 'lucide-react';
import { Navbar } from '../Navbar/Navbar';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = '522713145187';
  const whatsappMessage = encodeURIComponent('Hola Glowel, me gustaría agendar una consulta gratuita.');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-slate-50 overflow-hidden pt-[108px]">
      {/* Navbar */}
      <Navbar />

      {/* Animated Background Elements - Elegante verde esmeralda */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-emerald-300/20 to-teal-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-slate-400/10 to-emerald-400/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-200/15 to-emerald-200/12 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Geometric patterns - Sutiles y sofisticados */}
        <div className="absolute top-32 right-1/4 w-32 h-32 border border-gray-300/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-100/25 to-gray-100/25 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-108px)] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main Headline - Gradiente elegante verde-gris */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block">Creamos soluciones digitales</span>
            <span className="block bg-gradient-to-r from-emerald-700 via-teal-700 to-gray-800 bg-clip-text text-transparent font-black">
              que inspiran y conectan
            </span>
          </h1>

          {/* Subtitle - Texto elegante y legible */}
          <div className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
              Transformamos ideas en experiencias digitales extraordinarias
            </p>
          </div>

          {/* CTA Buttons - Paleta verde elegante */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-emerald-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>¡Agenda tu Consulta Gratuita!</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>

            {/* Botón Secundario - Elegante y minimalista */}
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full text-lg hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Ver Nuestros Servicios
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}