import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormProps {
  labels?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
  };
  submitText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  labels = {},
  placeholders = {},
  submitText = 'Enviar Mensaje',
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    try {
      const response = await fetch('https://glowel.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok && !result.success) {
        throw new Error(result.message || 'Error al enviar el correo');
      }
      setStatus({
        type: 'success',
        message:
          '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.type && (
        <div
          className={`p-4 rounded-md ${
            status.type === 'success'
              ? 'bg-green-50 text-green-800'
              : 'bg-red-50 text-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          {labels.name || 'Nombre'} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={placeholders.name || ''}
          className="mt-1 block w-full px-4 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 
          placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {labels.email || 'Correo Electrónico'} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={placeholders.email || ''}
          className="mt-1 block w-full px-4 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 
          placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          {labels.company || 'Empresa'} (Opcional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={placeholders.company || ''}
          className="mt-1 block w-full px-4 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 
          placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          {labels.phone || 'Teléfono'} (Opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={placeholders.phone || ''}
          className="mt-1 block w-full px-4 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 
          placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          {labels.message || 'Mensaje'} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          placeholder={placeholders.message || ''}
          className="mt-1 block w-full px-4 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 
          placeholder:text-gray-400 placeholder:text-sm placeholder:font-light"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
          ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
          } 
          transition-colors`}
      >
        {isSubmitting ? 'Enviando...' : submitText}
      </button>
    </form>
  );
};

export default ContactForm;
