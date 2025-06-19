import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
	{
		question: '¿Cuánto tiempo toma desarrollar un proyecto?',
		answer:
			'Dependiendo de la complejidad, nuestros proyectos suelen completarse entre 1 a 4 semanas. Un catálogo digital básico puede estar listo en 5-7 días, mientras que un e-commerce completo puede tomar 3-4 semanas.',
	},
	{
		question: '¿Cuáles son sus precios?',
		answer:
			'Nuestros precios varían según las necesidades específicas de cada proyecto. Ofrecemos soluciones desde $1500 para landing pages básicas hasta $6000 para e-commerce completos. Contáctanos para recibir una cotización personalizada.',
	},
	{
		question: '¿Ofrecen soporte post-lanzamiento?',
		answer:
			'¡Sí! Incluimos 30 días de soporte técnico gratuito después del lanzamiento. Además, ofrecemos planes de mantenimiento mensual para mantener tu sitio actualizado y funcionando perfectamente.',
	},
	{
		question: '¿Cómo es el proceso de pago?',
		answer:
			'Trabajamos con un sistema de pagos fraccionados: 20% inicial para comenzar, 60% distribuido en 3 pagos durante el desarrollo (20% cada uno), y 20% final al entregar el proyecto. Aceptamos transferencias bancarias y pagos con tarjeta.',
	},
	{
		question: '¿Trabajan con empresas de cualquier tamaño?',
		answer:
			'¡Absolutamente! Trabajamos con emprendedores individuales, pequeñas empresas y grandes corporaciones. Adaptamos nuestras soluciones a las necesidades y presupuesto de cada cliente.',
	},
	{
		question: '¿Solo desarrollan en las ciudades mencionadas?',
		answer:
			'No, trabajamos con clientes de todo el mundo. Gracias a nuestro proceso de trabajo digital y herramientas de comunicación modernas, podemos colaborar eficientemente desde cualquier ubicación.',
	},
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/40">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 text-blue-700 rounded-full text-sm font-medium mb-6">
						<HelpCircle className="w-4 h-4" />
						Preguntas Frecuentes
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-slate-700 to-purple-800 bg-clip-text text-transparent">
						¿Tienes Preguntas?
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						Aquí encontrarás las respuestas a las preguntas más frecuentes sobre
						nuestros servicios
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/60 overflow-hidden hover:shadow-xl transition-all duration-300"
						>
							<button
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
								className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors duration-300 group"
							>
								<span className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
									{faq.question}
								</span>
								<div className="flex-shrink-0 ml-4">
									{openIndex === index ? (
										<Minus className="w-5 h-5 text-blue-600" />
									) : (
										<Plus className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
									)}
								</div>
							</button>
							<div
								className={`transition-all duration-300 ease-in-out ${
									openIndex === index
										? 'max-h-96 opacity-100'
										: 'max-h-0 opacity-0'
								} overflow-hidden`}
							>
								<div className="px-6 pb-6 border-t border-blue-100/40">
									<p className="text-slate-600 leading-relaxed pt-4">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Decorative elements */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					<div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl"></div>
					<div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/10 rounded-full blur-2xl"></div>
				</div>
			</div>
		</section>
	);
}
