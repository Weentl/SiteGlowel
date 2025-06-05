import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaCode, FaCogs, FaEnvelope, FaMapPin, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Menu, X, MessageCircle } from 'lucide-react';
import ContactForm from '../src/components/ContactForm';
import MaderasSanPedroPreview from '../src/components/MaderasSanpedro.tsx'

// ... (keep all existing imports and components until Services component)

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

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
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
              style={{ minHeight: expandedService === index ? 'auto' : '250px' }}
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="text-5xl text-[#1E88E5] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2 font-['Outfit']">{service.title}</h3>
              <p className="text-[#7F8C8D] font-['Nunito']">{service.description}</p>
              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-[#7F8C8D] font-['Nunito']"
                  >
                    {service.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ... (keep all existing components until Process component)

const Process = () => {
  const [expandedStep, setExpandedStep] = useState(null);

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
                className="flex flex-col items-center cursor-pointer relative"
                style={{ minHeight: expandedStep === index ? 'auto' : '200px' }}
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
              >
                <div className="w-16 h-16 bg-[#00A3E0] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#0A2540] mb-2 font-['Outfit']">{step.title}</h3>
                <p className="text-[#7F8C8D] font-['Nunito']">{step.description}</p>
                <AnimatePresence>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-[#7F8C8D] font-['Nunito'] bg-white p-4 rounded-lg shadow-md"
                    >
                      {step.details}
                    </motion.div>
                  )}
                </AnimatePresence>
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

// ... (keep all existing components)

// Add new FloatingButtons component
const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
    <motion.a
      href="https://wa.me/2721176573?text=¡Hola!%20Me%20gustaría%20hablar%20sobre%20un%20proyecto."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="text-2xl" />
    </motion.a>
    <motion.a
      href="https://m.me/glowel.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#0084FF] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  </div>
);

// Update App component to include FloatingButtons
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
      <FloatingButtons />
    </div>
  );
}

export default App;