
import React from "react";
import AnimatedBackground from './components/AnimatedBackground';
import { VideoIcon } from './components/icons/VideoIcon';
import { BrushIcon } from './components/icons/BrushIcon';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { WhatsappIcon } from './components/icons/WhatsappIcon';
import { MailIcon } from './components/icons/MailIcon';
import { LocationIcon } from './components/icons/LocationIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';

const services = [
  {
    icon: <VideoIcon className="h-10 w-10 mb-4 text-cyan-400" />,
    title: "PRODUCCIÓN AUDIOVISUAL",
    imageUrl: "https://images.unsplash.com/photo-1578916375242-1c6416a1e3b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      "Filmación profesional para eventos, comerciales y proyectos artísticos.",
      "Fotografía comercial, artística y de retrato.",
      "Cobertura completa de eventos especiales.",
      "Post-producción y edición profesional.",
    ],
  },
  {
    icon: <BrushIcon className="h-10 w-10 mb-4 text-cyan-400" />,
    title: "ARTE CORPORAL",
    imageUrl: "https://images.unsplash.com/photo-1622228362842-30335a4a5b48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      "Tatuajes personalizados con diseños únicos.",
      "Consultoría artística y desarrollo de conceptos.",
      "Técnicas profesionales con los más altos estándares de seguridad e higiene.",
      "Seguimiento post-procedimiento incluido.",
    ],
  },
  {
    icon: <SparklesIcon className="h-10 w-10 mb-4 text-cyan-400" />,
    title: "GRILLZ ARTESANALES",
    imageUrl: "https://images.unsplash.com/photo-1616690184936-a35f0f498c86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: ["Diseños únicos y personalizados.", "Materiales de alta calidad disponibles.", "Moldes precisos para ajuste perfecto.", "Acabados: Oro, plata con incrustaciones.", "Proceso de toma de medidas incluido."],
  },
  {
    icon: <SparklesIcon className="h-10 w-10 mb-4 text-cyan-400" />,
    title: "ROPA PERSONALIZADA",
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6d5f9650d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: ["Camisetas oversize con diseños únicos.", "Hoodies personalizados.", "Técnicas: Serigrafía, bordado, DTF, sublimación.", "Pedidos desde 1 pieza hasta producciones grandes."],
  },
  {
    icon: <SparklesIcon className="h-10 w-10 mb-4 text-cyan-400" />,
    title: "ESPEJOS",
    imageUrl: "https://images.unsplash.com/photo-1595738254384-8874391a3848?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: ["Diseños únicos y personalizados.", "Precios flexibles desde 70.000."],
  },
];

const processSteps = [
  { title: 'Consulta', description: 'Analizamos tu idea, diseño y especificaciones.' },
  { title: 'Cotización', description: 'Recibes una cotización detallada según la complejidad del proyecto.' },
  { title: 'Aprobación', description: 'Revisas y apruebas el diseño final o boceto antes de producir.' },
  { title: 'Producción', description: 'Damos vida a tu proyecto con materiales y técnicas de alta calidad.' },
  { title: 'Entrega', description: 'Recibes tu producto final mediante entrega local o envío seguro.' },
];


const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`py-12 md:py-20 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-cyan-300 text-glow tracking-widest uppercase">{title}</h2>
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      <AnimatedBackground />
      <main className="relative z-10">
        <header className="h-screen min-h-[600px] flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white text-glow uppercase animate-fade-in-down" style={{ animation: 'fade-in-down 1s ease-out' }}>
              EXPANSSSION
            </h1>
            <p className="mt-4 text-lg md:text-xl text-cyan-200 max-w-2xl mx-auto animate-fade-in-up" style={{ animation: 'fade-in-up 1s ease-out 0.5s', animationFillMode: 'backwards' }}>
              Soluciones creativas que combinan expresión visual, arte corporal y productos personalizados de alta calidad.
            </p>
          </div>
        </header>

        <Section title="Sobre Nosotros" className="bg-black bg-opacity-20">
          <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
            <p>
              Somos una empresa especializada en servicios creativos y artísticos que combina expresión visual, arte corporal y productos personalizados de alta calidad. Nuestro enfoque integral nos permite ofrecer soluciones creativas completas para nuestros clientes.
            </p>
          </div>
        </Section>

        <Section title="Portafolio de Servicios">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/20 rounded-lg overflow-hidden transform hover:scale-105 hover:border-cyan-400 transition-all duration-300 flex flex-col">
                <div className="aspect-video">
                  <img src={service.imageUrl} alt={`Imagen de ${service.title}`} className="w-full h-full object-cover" />

                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-bold text-center mb-4 text-cyan-300 uppercase tracking-wider">{service.title}</h3>
                    {service.items && <ul className="space-y-2 text-gray-400 flex-grow">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">&#9679;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>}
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        <div className="bg-black bg-opacity-20">
          <Section title="Nuestro Proceso">
            <div className="relative max-w-5xl mx-auto px-4">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-cyan-900" style={{ zIndex: 0 }}></div>
              <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-50" style={{ zIndex: 0 }}></div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12 md:gap-y-0">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative group text-center">
                    <div className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-full bg-gray-950 border-2 border-cyan-700 flex items-center justify-center text-3xl font-bold text-cyan-400 group-hover:bg-cyan-900/70 group-hover:border-cyan-400 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                      <span className="z-10">{i + 1}</span>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-bold text-lg text-cyan-300 mb-2 uppercase tracking-wider">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>

        <Section title="Información Clave">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Tiempos de Entrega</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><strong>Diseños digitales:</strong> 3-5 días hábiles.</li>
                    <li><strong>Ropa personalizada:</strong> 7-10 días hábiles.</li>
                    <li><strong>Grillz personalizados:</strong> 10-15 días hábiles.</li>
                    <li><strong>Proyectos complejos:</strong> Tiempo a convenir.</li>
                  </ul>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Formas de Pago</h3>
                  <ul className="space-y-2 text-gray-400">
                      <li>Efectivo</li>
                      <li>Transferencia bancaria</li>
                      <li>Otros métodos a convenir</li>
                      <li>Facilidades de pago para proyectos grandes</li>
                  </ul>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">Envíos y Entregas</h3>
                  <ul className="space-y-2 text-gray-400">
                      <li>Entregas locales (costo adicional)</li>
                      <li>Envíos nacionales disponibles</li>
                      <li>Empaque seguro garantizado</li>
                      <li>Seguimiento de pedido incluido</li>
                  </ul>
              </div>
          </div>
        </Section>
        
        <footer className="bg-black bg-opacity-40 py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-cyan-300 text-glow tracking-widest uppercase">Contacto</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 mb-8 text-lg">
                <div className="flex items-center"><LocationIcon className="h-6 w-6 mr-2 text-cyan-400" /> BOGOTA D.C</div>
                <a href="https://wa.me/573046199264" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors"><WhatsappIcon className="h-6 w-6 mr-2" /> 304 619 9264</a>
                <a href="mailto:gabriel0130leuro@gmail.com" className="flex items-center hover:text-cyan-400 transition-colors"><MailIcon className="h-6 w-6 mr-2" /> gabriel0130leuro@gmail.com</a>
              </div>
              <div className="mb-4">
                  <p className="text-gray-400">Horarios de Atención: 24 Horas</p>
              </div>
              <div className="flex justify-center items-center space-x-6">
                  <a href="https://www.instagram.com/expansssion?utm_source=ig_web_button_share_sheet&igsh=MTh2MjgwOHU5dmVsdA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="h-8 w-8"/></a>
                  <a href="https://l.instagram.com/?u=https%3A%2F%2Fsites.google.com%2Fview%2Fexpansssion%2Fhome%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaclTnVc0Y4BpJ83aDF80Lh_kfGiEtlJJaXatkYGsaDxKZO64ulkmb8AzkoQTQ_aem_KRW0ZsKTzLJe563UGEzioQ&e=AT0h0b8fDryskCncydNFWcRGeH3NanB4MR93sLyu5Tk-yi1sZdn-9gZMQjqL5_zyAtx-3V9ItJ9Zs_GmOkDS_TcIHf0M0afGQfOpUODZAg" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">Otro Link</a>
              </div>
              <p className="text-gray-600 mt-8 text-sm">&copy; {new Date().getFullYear()} EXPANSSSION. Todos los derechos reservados.</p>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
