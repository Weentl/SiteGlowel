import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo y Descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Glowel
            </h3>
            <p className="text-slate-400 mb-4">
              Transformamos ideas en experiencias digitales extraordinarias
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-orange-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-orange-400 transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#proceso" className="text-slate-400 hover:text-orange-400 transition-colors">Nuestro Proceso</a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 hover:text-orange-400 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Ubicaciones */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ubicaciones</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Angelópolis, Puebla</p>
                  <p className="text-sm text-slate-400">San Andrés Cholula</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Orizaba, Veracruz</p>
                  <p className="text-sm text-slate-400">Centro</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Monterrey, Nuevo León</p>
                  <p className="text-sm text-slate-400">San Pedro Garza García</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <a href="mailto:glowel.dev@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>glowel.dev@gmail.com</span>
              </a>
              <a href="tel:+522713145187" className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+52 271 314 5187</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Glowel. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacidad" className="text-sm text-slate-400 hover:text-orange-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-sm text-slate-400 hover:text-orange-400 transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
