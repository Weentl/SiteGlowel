
import { ShoppingBag, Globe, Rocket, LayoutGrid, Palette, PiggyBank, Sparkles, ChevronRight, Monitor, Smartphone, Tablet, Zap } from 'lucide-react';

const mainServices = [
  {
    icon: ShoppingBag,
    title: "Catálogos Digitales",
    description: "Presenta tus productos con estilo y facilita la cotización a tus clientes potenciales"
  },
  {
    icon: Globe,
    title: "Tiendas en Línea",
    description: "Vende 24/7 con checkouts seguros y experiencias de compra fluidas"
  },
  {
    icon: Rocket,
    title: "Landing Pages Optimizadas",
    description: "Páginas efectivas para tus campañas publicitarias y generación de leads"
  },
  {
    icon: LayoutGrid,
    title: "Sitios Web Profesionales",
    description: "Presencia online impactante para negocios, restaurantes y más"
  }
];

const services = [
  {
    icon: Globe,
    title: "Diseño de páginas web",
    description: "Expertos en diseño web profesional, creamos el sitio más efectivo y atractivo para tu negocio"
  },
  {
    icon: Smartphone,
    title: "Diseño web de sitio móvil",
    description: "Atraiga más clientes desde sus dispositivos móviles con un diseño eficiente y atractivo"
  },
  {
    icon: ShoppingBag,
    title: "Diseño de Tienda Virtual",
    description: "Desarrollamos tiendas virtuales administrables y exitosas"
  },
  {
    icon: LayoutGrid,
    title: "Administrador de contenidos",
    description: "Edita tu contenido fácilmente con asesoría remota o presencial"
  },
  {
    icon: Rocket,
    title: "Posicionamiento SEO",
    description: "Optimizamos tu sitio para ser encontrado fácilmente en los buscadores"
  }
];

const features = [
  {
    icon: Zap,
    title: "Lanzamiento Express",
    description: "En menos de 1 semana"
  },
  {
    icon: Palette,
    title: "Diseño Único",
    description: "100% personalizado"
  },
  {
    icon: PiggyBank,
    title: "Precio Justo",
    description: "Máximo valor, mínima inversión"
  }
];

const devices = [
  { icon: Monitor, label: "Desktop" },
  { icon: Tablet, label: "Tablet" },
  { icon: Smartphone, label: "Móvil" }
];

export function Services() {
  const whatsappNumber = '522713145187';
  const whatsappMessage = encodeURIComponent('Hola Glowel, me gustaría comenzar mi proyecto digital.');

  return (
    <section id="servicios" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-700 via-teal-700 to-gray-800 bg-clip-text text-transparent">
            Soluciones que Llegan al Mundo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creamos experiencias digitales que funcionan perfectamente en cualquier dispositivo
          </p>
        </div>

        {/* Indicador de Dispositivos */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {devices.map((device, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <device.icon className="w-6 h-6 text-emerald-700" />
              </div>
              <span className="text-sm text-gray-500 font-medium">{device.label}</span>
            </div>
          ))}
        </div>

        {/* Grid de Servicios - Elegante y profesional */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-emerald-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Botón "Ver todos los servicios" */}
        <div className="text-center mb-16">
          <button 
            onClick={() => document.getElementById('servicios-detallados')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-300"
          >
            Ver todos los servicios
          </button>
        </div>

        {/* Sección de Servicios Detallados */}
        <div id="servicios-detallados">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Servicios Detallados</h3>
            <p className="text-gray-600">Explora nuestra gama completa de soluciones digitales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-emerald-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mensaje Central de Alcance Global - Elegante verde */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white mb-16 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Globe className="w-16 h-16 text-white/90" />
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-emerald-200 animate-pulse" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tu Negocio, Disponible Globalmente
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Nuestras soluciones se adaptan automáticamente a cualquier pantalla y dispositivo, 
              <span className="font-semibold"> llevando tu marca a cada rincón del mundo</span>
            </p>
          </div>
        </div>

        {/* Por Qué Elegir Glowel - Más Visual */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            La Ventaja Glowel
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tres pilares que garantizan el éxito de tu proyecto digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-emerald-200"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Principal - Verde elegante */}
        <div className="text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="group relative inline-flex px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center space-x-3">
              <Sparkles className="w-5 h-5" />
              <span>Comenzar Mi Proyecto Digital</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Consulta gratuita • Sin compromiso • Resultados garantizados
          </p>
        </div>
      </div>
    </section>
  );
}