import React, { useState } from 'react';
import {
  Menu,
  X,
  Code,
  Laptop,
  Settings,
  Users,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import ServiceCard from './components/ServiceCard';
import PortfolioCard from './components/PortfolioCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: 'Desarrollo Web',
      description:
        'Creamos sitios web modernos y responsivos que destacan tu marca y mejoran tu presencia digital.',
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Aplicaciones Web',
      description:
        'Desarrollamos aplicaciones web personalizadas que optimizan tus procesos empresariales.',
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: 'Software Empresarial',
      description:
        'Soluciones de software a medida para automatizar y mejorar la eficiencia de tu negocio.',
    },
  ];

  const portfolio = [
    {
      image: './components/SanPedroPortafolio',
      screenshot: './components/SanPedroPortafolio',
      title: 'Maderas San Pedro',
      description:
        'Sitio web corporativo para empresa líder en venta de madera y productos forestales. Incluye catálogo de productos, sistema de cotizaciones y diseño responsivo.',
      features: [
        'Catálogo de productos',
        'Sistema de cotizaciones',
        'Diseño responsivo',
        'Optimización SEO',
      ],
      url: 'https://maderassanpedro.netlify.app/',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Glowel</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600">
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-700 hover:text-blue-600"
              >
                Servicios
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-blue-600">
                Nosotros
              </a>
              <a
                href="#portafolio"
                className="text-gray-700 hover:text-blue-600"
              >
                Portafolio
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600">
                Contacto
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Nosotros
              </a>
              <a
                href="#portafolio"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Portafolio
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-20 pb-32 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simplificamos tus procesos,
              <br />
              potenciamos tu negocio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Con Glowel, transforma tus ideas en soluciones digitales
            </p>
            <a
              href="#contacto"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Comienza ahora
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automatización inteligente para negocios en crecimiento
            </h2>
            <p className="text-xl text-gray-600">
              Te ayudamos a que tu emprendimiento sea más fácil
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nosotros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Glowel, nos apasiona crear soluciones tecnológicas que impulsan
              el crecimiento de las pequeñas y medianas empresas. Nuestra misión
              es simplificar la transformación digital de tu negocio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Misión</h3>
              <p className="text-gray-600">
                Proporcionar soluciones digitales innovadoras que impulsen el
                éxito de nuestros clientes.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser líderes en la transformación digital de pequeñas y medianas
                empresas.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Valores</h3>
              <p className="text-gray-600">
                Innovación, compromiso, excelencia y orientación al cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Portafolio
            </h2>
            <p className="text-xl text-gray-600">
              Descubre cómo hemos ayudado a otros negocios a crecer
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {portfolio.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte a hacer crecer tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-3" />
                    <span>contacto@glowel.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    <span>Ciudad, País</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Glowel</h2>
            <p className="text-gray-400 mb-8">
              Automatiza y avanza: Glowel está contigo
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#portafolio">Portafolio</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
