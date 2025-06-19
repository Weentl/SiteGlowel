import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Facebook, MapPin } from 'lucide-react';

const locations = [
  {
    city: "Angelópolis",
    state: "Puebla",
    address: "San Andrés Cholula, Puebla"
  },
  {
    city: "Orizaba",
    state: "Veracruz",
    address: "Centro, Orizaba, Veracruz"
  },
  {
    city: "Monterrey",
    state: "Nuevo León",
    address: "San Pedro Garza García, Nuevo León"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      });
    }
  };

  const whatsappNumber = '522713145187';
  const whatsappMessage = encodeURIComponent('Hola Glowel, me gustaría obtener más información sobre sus servicios.');
  const email = 'glowel.dev@gmail.com';

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-purple-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            ¡Conversemos sobre tu Próximo Gran Proyecto!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu visión digital. Elige tu método de contacto preferido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulario de Contacto */}
          <div className="backdrop-blur-sm bg-white/80 p-8 rounded-3xl shadow-lg border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
            
            {status.success && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl">
                {status.message}
              </div>
            )}
            
            {status.error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl">
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  placeholder="¿Cómo podemos llamarte?"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono (opcional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  placeholder="+52 (XXX) XXX-XXXX"
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  required
                  value={formData.message}
                  placeholder="Cuéntanos sobre tu proyecto o idea. ¿Qué podemos hacer por ti?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white/50 backdrop-blur-sm transition-all duration-300"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full py-4 bg-gradient-to-r from-purple-600 via-orange-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5" />
                {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>

          {/* Opciones Alternativas de Contacto */}
          <div className="space-y-8">
            <div className="text-2xl font-bold text-gray-900 mb-8">
              Contacto Directo
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-emerald-500 text-white rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <div className="font-bold text-lg">WhatsApp</div>
                  <div className="text-emerald-100">+52 271 314 5187</div>
                </div>
              </div>
            </a>

            {/* Messenger */}
            <a
              href="https://m.me/537574656111827" // Reemplazar con tu URL de Messenger
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-blue-500 text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <Facebook className="w-8 h-8" />
                <div>
                  <div className="font-bold text-lg">Messenger</div>
                  <div className="text-blue-100">Envíanos un mensaje</div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="block p-6 bg-gray-900 text-white rounded-2xl hover:shadow-lg hover:shadow-gray-900/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8" />
                <div>
                  <div className="font-bold text-lg">Email</div>
                  <div className="text-gray-300">{email}</div>
                </div>
              </div>
            </a>

            {/* Ubicaciones */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nuestras Ubicaciones
              </h3>
              <div className="grid gap-6">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{location.city}, {location.state}</h4>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
