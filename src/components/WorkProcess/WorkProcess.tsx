import React from 'react';
import { 
  Headphones, 
  FileText,
  Play,
  MessageSquare, 
  Award,
  ChevronRight,
  Sparkles,
  CreditCard
} from 'lucide-react';

const steps = [
  {
    icon: Headphones,
    title: "Conexión y Descubrimiento",
    step: "01",
    description: "Iniciamos con una conversación detallada para entender tu visión, objetivos y necesidades específicas. ¡Queremos escucharte!",
    paymentAmount: "0%",
    paymentLabel: "Consulta Gratuita",
    paymentColor: "emerald"
  },
  {
    icon: FileText,
    title: "Propuesta y Planificación",
    step: "02",
    description: "Te presentamos una propuesta estratégica y un presupuesto claro y detallado. Aquí definimos el alcance y los pasos a seguir. Sin sorpresas.",
    paymentAmount: "0%",
    paymentLabel: "Propuesta Sin Costo",
    paymentColor: "emerald"
  },
  {
    icon: Play,
    title: "Inicio del Desarrollo",
    step: "03",
    description: "Con la aprobación del presupuesto y el pago inicial, tu proyecto cobra vida. Nuestro equipo comienza a construir la base de tu solución digital.",
    paymentAmount: "20%",
    paymentLabel: "Pago Inicial",
    paymentColor: "blue"
  },
  {
    icon: MessageSquare,
    title: "Avances y Colaboración",
    step: "04",
    description: "Te entregamos 4 avances estratégicos de tu proyecto. Tras cada avance satisfactorio, solicitamos una nueva aportación. Tu feedback es clave en cada etapa.",
    paymentAmount: "20%",
    paymentLabel: "Por Cada Avance (x4)",
    paymentColor: "amber"
  },
  {
    icon: Award,
    title: "Lanzamiento Final",
    step: "05",
    description: "Una vez completado y aprobado el 100% del proyecto, realizas el pago final. Tu solución digital es lanzada con soporte inicial incluido.",
    paymentAmount: "20%",
    paymentLabel: "Pago Final",
    paymentColor: "purple"
  }
];

const getPaymentColorClasses = (color: string) => {
  const colors = {
    emerald: {
      bg: "bg-emerald-500",
      bgLight: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      gradient: "from-emerald-500 to-emerald-600"
    },
    blue: {
      bg: "bg-blue-500",
      bgLight: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      gradient: "from-blue-500 to-blue-600"
    },
    amber: {
      bg: "bg-amber-500",
      bgLight: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      gradient: "from-amber-500 to-amber-600"
    },
    purple: {
      bg: "bg-purple-500",
      bgLight: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      gradient: "from-purple-500 to-purple-600"
    }
  };
  return colors[color] || colors.blue;
};

export function WorkProcess() {
  const whatsappNumber = '522713145187';
  const whatsappMessage = encodeURIComponent('Hola Glowel, me gustaría comenzar un proyecto.');

  return (
    <section id="proceso" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Proceso Transparente
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent leading-tight">
            Tu Proyecto,<br />
            <span className="text-slate-900">Paso a Paso</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso transparente y colaborativo para convertir tu visión en una solución digital exitosa.
            <span className="block mt-2 font-semibold text-slate-700">Sabrás exactamente dónde estamos y qué pagas en cada etapa.</span>
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-orange-200 via-amber-300 to-orange-200"></div>

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => {
              const paymentColors = getPaymentColorClasses(step.paymentColor);
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden w-3 h-3 bg-orange-500 rounded-full absolute -left-6 top-8"></div>
                  
                  {/* Content Card */}
                  <div className="flex-1 w-full lg:max-w-lg">
                    <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 hover:border-orange-200 relative overflow-hidden">
                      {/* Card Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Step Number & Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-shadow duration-300">
                                <step.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                {step.step}
                              </div>
                            </div>
                          </div>
                          
                          {/* Payment Badge */}
                          <div className={`flex flex-col items-end gap-1`}>
                            <div className={`flex items-center gap-2 px-4 py-2 ${paymentColors.bgLight} ${paymentColors.border} border rounded-full`}>
                              <CreditCard className={`w-4 h-4 ${paymentColors.text}`} />
                              <span className={`font-bold text-lg ${paymentColors.text}`}>
                                {step.paymentAmount}
                              </span>
                            </div>
                            <span className={`text-xs font-medium ${paymentColors.text} text-center`}>
                              {step.paymentLabel}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Node */}
                  <div className="hidden lg:flex w-6 h-6 bg-white rounded-full border-4 border-orange-500 shadow-lg z-10 flex-shrink-0">
                    <div className="w-full h-full bg-orange-500 rounded-full"></div>
                  </div>
                  
                  {/* Desktop Spacer */}
                  <div className="hidden lg:block flex-1 lg:max-w-lg"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Resumen de Pagos
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Distribuimos los pagos para que tengas control total sobre tu inversión y veas resultados reales en cada etapa.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { label: "Consulta", amount: "0%", color: "emerald" },
                { label: "Propuesta", amount: "0%", color: "emerald" },
                { label: "Inicio", amount: "20%", color: "blue" },
                { label: "Avances", amount: "60%", color: "amber" },
                { label: "Final", amount: "20%", color: "purple" }
              ].map((payment, index) => {
                const colors = getPaymentColorClasses(payment.color);
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-2`}>
                      {payment.amount}
                    </div>
                    <div className="text-white/80 text-sm font-medium">
                      {payment.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full text-lg md:text-xl shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              <span>¡Empecemos tu Proyecto!</span>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
          
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            Sin compromisos en la consulta inicial. Hablemos de tu proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}