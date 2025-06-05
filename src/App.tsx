import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaCode, FaCogs, FaEnvelope, FaMapPin, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import ContactForm from '../src/components/ContactForm';
import MaderasSanPedroPreview from '../src/components/MaderasSanpedro.tsx'


// Fuentes
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&family=Nunito:wght@400&display=swap');
`;

// Componente de Navegación
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#F0F4F8] text-[#2C3E50] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-extrabold text-[#1E88E5] font-['Outfit']"
          >
            Glowel
          </motion.div>
          <div className="hidden md:flex space-x-10">
            {['Inicio', 'Servicios', 'Nosotros', 'Proceso', 'Compromiso', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-[#2C3E50] hover:text-[#1E88E5] transition-colors duration-300 font-['Nunito']"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-[#E8F0F2]"
        >
          <div className="px-6 pt-4 pb-6 space-y-4">
            {['Inicio', 'Servicios', 'Nosotros', 'Proceso', 'Compromiso', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="block text-[#2C3E50] hover:text-[#1E88E5] transition-colors duration-300 font-['Nunito']"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Componente Hero
const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-48 text-[#0A2540] text-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F7FAFC 0%, #E0F4FA 100%)' }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <circle cx="200" cy="100" r="150" fill="#00A3E0" fillOpacity="0.2" />
          <path fill="#E0F4FA" fillOpacity="0.1" d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,186.7C840,192,960,181,1080,170.7C1200,160,1320,149,1380,144L1440,139L1440,320L0,320Z" />
        </svg>
      </div>
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold mb-6 font-['Outfit'] tracking-tight"
        >
          Transforma tu Futuro Digital
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl md:text-3xl mb-8 font-['Nunito']"
        >
          Creamos soluciones digitales que inspiran y conectan.
        </motion.p>
        <motion.a
          href="#contacto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-[#00A3E0] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-[#0083B0] hover:scale-105 transition-all duration-300"
        >
          Comienza Hoy
        </motion.a>
      </div>
    </section>
  );
};
// Componente de Servicios
const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Diseño Web Único',
    description: 'Sitios personalizados que capturan tu esencia.',
    details: 'Creamos sitios web únicos y personalizados que reflejan la identidad de tu marca, optimizados para todos los dispositivos.',
  },
  {
    icon: <FaCode />,
    title: 'Apps Innovadoras',
    description: 'Soluciones web modernas y escalables.',
    details: 'Desarrollamos aplicaciones web innovadoras con tecnologías modernas, garantizando rendimiento y escalabilidad.',
  },
  {
    icon: <FaCogs />,
    title: 'Automatización',
    description: 'Sistemas que optimizan tu negocio.',
    details: 'Implementamos soluciones de automatización para optimizar procesos y reducir costos operativos.',
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="py-24"
      style={{ background: 'linear-gradient(to bottom, #D1E9F6 0%, #F7FAFC 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#2C3E50] mb-12 font-['Outfit']">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="text-5xl text-[#1E88E5] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2 font-['Outfit']">{service.title}</h3>
              <p className="text-[#7F8C8D] font-['Nunito']">{service.description}</p>
              <motion.div
                initial={false}
                animate={{
                  height: expandedService === index ? 'auto' : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
                className="mt-4 text-[#7F8C8D] font-['Nunito']"
              >
                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                  >
                    {service.details}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Sobre Glowel
const About = () => (
  <section
    id="nosotros"
    className="py-24"
    style={{ background: 'linear-gradient(to bottom, #F7FAFC 0%, #D1E9F6 100%)' }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-6 font-['Outfit']">Sobre Glowel</h2>
          <p className="text-lg text-[#7F8C8D] mb-4 font-['Nunito']">
            Somos un equipo joven y emergente, comprometido con impulsar tu presencia digital con soluciones innovadoras.
          </p>
          <p className="text-lg text-[#7F8C8D] font-['Nunito']">
            Aunque estamos comenzando, nuestra pasión y dedicación nos impulsan a crecer contigo. Cada proyecto es una oportunidad para demostrar nuestro potencial y crear soluciones excepcionales.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="/Glowel.png"
              alt="Logo de Glowel"
              className="w-full max-w-[350px] h-auto transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Componente Proceso
const processSteps = [
  {
    step: 1,
    title: 'Recepción',
    description: 'Confirmamos tu consulta y programamos una reunión.',
    details: 'En esta etapa, recibimos tu mensaje y te contactamos para entender mejor tus necesidades y agendar una reunión inicial.',
  },
  {
    step: 2,
    title: 'Análisis',
    description: 'Discutimos tus necesidades y objetivos.',
    details: 'Nos reunimos contigo para analizar en detalle tus requerimientos, objetivos y visión del proyecto.',
  },
  {
    step: 3,
    title: 'Presupuesto',
    description: 'Te proporcionamos un presupuesto y propuesta.',
    details: 'Basándonos en el análisis, te enviamos un presupuesto detallado y una propuesta de trabajo que incluye plazos y entregables.',
  },
  {
    step: 4,
    title: 'Desarrollo',
    description: 'Comenzamos el desarrollo con revisiones regulares.',
    details: 'Nuestro equipo empieza a trabajar en el proyecto, manteniéndote informado con revisiones periódicas para asegurar que todo va según lo planeado.',
  },
  {
    step: 5,
    title: 'Entrega',
    description: 'Entregamos el proyecto y ofrecemos soporte.',
    details: 'Una vez completado, te entregamos el proyecto final y proporcionamos soporte continuo para cualquier ajuste o mejora futura.',
  },
];

const Process = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section
      id="proceso"
      className="py-24"
      style={{ background: 'linear-gradient(to bottom, #E0F4FA 0%, #F7FAFC 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0A2540] mb-12 font-['Outfit']">Nuestro Proceso</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
              >
                <div className="w-16 h-16 bg-[#00A3E0] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540] mb-2 font-['Outfit']">{step.title}</h3>
                <p className="text-[#7F8C8D] font-['Nunito']">{step.description}</p>
                {/* Solo renderizar el cuadro si está expandido */}
                {expandedStep === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ height: { duration: 0.3, ease: 'easeInOut' }, opacity: { duration: 0.2, delay: 0.15 } }}
                    style={{ overflow: 'hidden' }}
                    className="mt-4 text-[#7F8C8D] font-['Nunito'] bg-white p-4 rounded-lg shadow-md"
                  >
                    {step.details}
                  </motion.div>
                )}
              </motion.div>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block">
                  <svg className="w-8 h-8 text-[#00A3E0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Portafolio
const portfolio = [
  {
    PreviewComponent: MaderasSanPedroPreview, // Componente de vista previa en lugar de una imagen
    title: 'Maderas San Pedro',
    description: 'Nuestro primer proyecto: un sitio corporativo con catálogo interactivo y diseño responsivo. ¡Confía en nosotros para que tu proyecto sea el próximo en nuestro portafolio!',
    url: 'https://maderassanpedro.com/',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    features: [
      'Catálogo interactivo de productos con filtros dinámicos.',
      'Diseño responsivo optimizado para dispositivos móviles.',
      'Integración con Firebase para gestión de datos en tiempo real.',
    ],
  },
];

const Portfolio = () => (
  <section
    id="portafolio"
    className="py-24 relative overflow-hidden"
    style={{ background: 'linear-gradient(to bottom, #F7FAFC 0%, #D1E9F6 100%)' }}
  >
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-['Outfit']">Nuestro Primer Proyecto</h2>
        <p className="text-lg text-[#7F8C8D] font-['Nunito']">
          Un paso inicial que marca el comienzo de nuestra journey digital.
        </p>
      </div>
      <div className="flex justify-center">
        {portfolio.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 15px 30px rgba(30, 136, 229, 0.3)' }}
            className="bg-white p-8 rounded-xl shadow-2xl border border-[#4A90E2] relative overflow-hidden w-full max-w-3xl"
          >
            <div className="w-full h-64 sm:h-96 mb-6 relative">
              <project.PreviewComponent />
            </div>
            <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3 font-['Outfit']">{project.title}</h3>
            <p className="text-[#7F8C8D] mb-4 font-['Nunito']">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#2C3E50] font-['Outfit']">Tecnologías:</h4>
              <p className="text-[#7F8C8D] font-['Nunito']">{project.technologies.join(', ')}</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#2C3E50] font-['Outfit']">Características:</h4>
              <ul className="text-[#7F8C8D] font-['Nunito'] list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 space-y-4 sm:space-y-0">
              <a href={project.url} className="text-[#4A90E2] hover:underline font-['Nunito']">Ver Proyecto</a>
              <a
                href="#contacto"
                className="bg-[#4A90E2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#357ABD] transition-all duration-300 shadow-lg"
              >
                ¿Quieres tu sitio web? ¡Desarrollalo con nostros!
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Componente Compromiso
const Commitment = () => (
  <section
    id="compromiso"
    className="py-24 text-[#2C3E50] text-center"
    style={{ background: 'linear-gradient(to right, #D1E9F6 0%, #F7FAFC 100%)' }}
  >
    <div className="max-w-3xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 font-['Outfit']"
      >
        Creciendo Contigo
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8 font-['Nunito']"
      >
        Somos pequeños pero ambiciosos. Cada proyecto nos lleva más lejos.
      </motion.p>
      <motion.a
        href="#contacto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-[#1E88E5] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#1565C0] transition-all duration-300"
      >
        Únete Ahora
      </motion.a>
    </div>
  </section>
);

// Componente Contacto
const Contact = () => (
  <section
    id="contacto"
    className="py-24"
    style={{ background: 'linear-gradient(to bottom, #F7FAFC 0%, #D1E9F6 100%)' }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-['Outfit']">
          ¡Solicita tu Cotización!
        </h2>
        <p className="text-lg text-[#7F8C8D] font-['Nunito']">
          Comparte tu idea con nosotros y déjanos ayudarte a hacerla realidad. Completa el formulario y recibe una propuesta personalizada para tu empresa.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          {/* ContactForm espera los mismos campos, solo cambia los labels y placeholders */}
          <ContactForm
            labels={{
              name: "Nombre completo",
              email: "Correo electrónico",
              company: "Empresa",
              phone: "Teléfono",
              message: "Cuéntanos tu idea"
            }}
            placeholders={{
              name: "Ej. Juan Pérez",
              email: "Ej. juan@email.com",
              company: "Ej. Mi Empresa S.A. de C.V.",
              phone: "Ej. 555 123 4567",
              message: "Describe tu proyecto, necesidades o cualquier idea que tengas en mente. ¡Entre más detalles, mejor!"
            }}
            submitText="Solicitar Cotización"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col justify-center space-y-6"
        >
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-[#1E88E5]" />
            <span className="text-lg text-[#7F8C8D] font-['Nunito']">glowel.dev@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapPin className="text-2xl text-[#1E88E5]" />
            <span className="text-lg text-[#7F8C8D] font-['Nunito']">Puebla, México</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-2xl text-[#1E88E5]" />
            <a
              href="https://wa.me/2721176573?text=¡Hola!%20Me%20gustaría%20hablar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#7F8C8D] hover:text-[#1E88E5] font-['Nunito']"
            >
              +272 117 6573
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Componente Footer
const Footer = () => (
  <footer className="bg-[#F7FAFC] text-[#2C3E50] py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-2xl font-bold font-['Outfit']">Glowel</div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {['Inicio', 'Servicios', 'Nosotros', 'Proceso', 'Compromiso', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              className="text-sm hover:text-[#1E88E5] font-['Nunito']"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-[#7F8C8D] mt-6 text-sm font-['Nunito']">
        © {new Date().getFullYear()} Glowel. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);


// Componente Principal App
function App() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] overflow-x-hidden">
      <style>{fontStyles}</style>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Commitment />
      <Contact />
      <Footer />
      {/* Botones flotantes de WhatsApp y Messenger */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">
        <a
          href="https://wa.me/2721176573?text=¡Hola!%20Me%20gustaría%20cotizar%20un%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
          title="Contactar por WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <a
          href="https://m.me/100094695337249"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0084FF] hover:bg-[#006fd6] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
          title="Contactar por Messenger"
        >
          <FaFacebookMessenger className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default App;