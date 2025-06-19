import React from 'react';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';
import { MessageCircle, PhoneCall } from 'lucide-react';

export function FloatingButtons() {
  const whatsappNumber = '522713145187';
  const whatsappMessage = encodeURIComponent('Hola Glowel, me gustaría iniciar/cotizar un proyecto.');
  
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <BsWhatsapp className="w-6 h-6" />
      </a>

      {/* Messenger Button */}
      <a
        href="https://m.me/537574656111827"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <BsMessenger className="w-6 h-6" />
      </a>
    </div>
  );
}
