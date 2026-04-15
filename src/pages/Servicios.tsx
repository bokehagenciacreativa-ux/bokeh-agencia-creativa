import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const WHATSAPP_BASE = "https://wa.me/51907133735";

interface ProjectCard {
  title: string;
  category: string;
  image: string | null;
  portfolioTag: string;
}

interface ServiceData {
  id: string;
  label: string;
  heading: string;
  paragraph: string;
  accentClass: string;
  accentBg: string;
  image: string;
  imagePosition: "left" | "right";
  whatsappMsg: string;
  projects: ProjectCard[];
}

const services: ServiceData[] = [
  {
    id: "audiovisual",
    label: "Producción audiovisual",
    heading: "Videos y fotografía que mueven a la acción.",
    paragraph:
      "Creamos video y fotografía con identidad narrativa no solo se ven bien, sino que cuentan algo que vale la pena escuchar. Desde la planificación hasta la entrega final, cuidamos cada detalle para que tu marca o proyecto tenga claridad y fuerza.",
    accentClass: "text-bokeh-green",
    accentBg: "bg-bokeh-green",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317633/AUDIOVISUAL_tzimlo.jpg",
    imagePosition: "left",
    whatsappMsg: "Hola%20Bokeh%2C%20me%20interesa%20su%20servicio%20de%20producci%C3%B3n%20audiovisual.%20%C2%BFPodemos%20conversar%3F",
    projects: [
      { title: "Video institucional Colinsa", category: "Audiovisual", image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317631/4_1.18.4_bu9h0w.jpg", portfolioTag: "audiovisual" },
      { title: "Proyecto 2", category: "Audiovisual", image: null, portfolioTag: "audiovisual" },
      { title: "Proyecto 3", category: "Audiovisual", image: null, portfolioTag: "audiovisual" },
    ],
  },
  {
    id: "branding",
    label: "Branding & diseño",
    heading: "Identidades visuales que dicen quién eres.",
    paragraph:
      "Diseñamos con estrategia: cada color, tipografía y forma tiene un por qué detrás que conecta con tu audiencia y te diferencia en tu mercado.",
    accentClass: "text-bokeh-red",
    accentBg: "bg-bokeh-red",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317635/DISEN%CC%83O_ESTRATE%CC%81GICO_eehsgo.jpg",
    imagePosition: "right",
    whatsappMsg: "Hola%20Bokeh%2C%20me%20interesa%20su%20servicio%20de%20branding%20y%20dise%C3%B1o.%20%C2%BFPodemos%20conversar%3F",
    projects: [
      { title: "Aromas del valle", category: "Branding", image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775316520/MESTIZA_INGLES-05_m3hpnu.jpg", portfolioTag: "branding" },
      { title: "Proyecto 2", category: "Branding", image: null, portfolioTag: "branding" },
      { title: "Proyecto 3", category: "Branding", image: null, portfolioTag: "branding" },
    ],
  },
  {
    id: "rrss",
    label: "Gestión de redes sociales",
    heading: "Tu voz digital, constante y estratégica.",
    paragraph:
      "Gestionamos tu presencia digital con consistencia, criterio y estrategia. Construimos una voz propia para tu marca y la mantenemos activa, relevante y fiel a lo que eres en cada plataforma.",
    accentClass: "text-bokeh-blue",
    accentBg: "bg-bokeh-blue",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317845/REDES_SOCIALES_te3fbn.jpg",
    imagePosition: "left",
    whatsappMsg: "Hola%20Bokeh%2C%20me%20interesa%20su%20servicio%20de%20gesti%C3%B3n%20de%20redes%20sociales.%20%C2%BFPodemos%20conversar%3F",
    projects: [
      { title: "Gestión de redes sociales", category: "RRSS", image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775323142/GT_-_Consejos_safge_Bond_1_onbi8a.png", portfolioTag: "rrss" },
      { title: "Proyecto 2", category: "RRSS", image: null, portfolioTag: "rrss" },
      { title: "Proyecto 3", category: "RRSS", image: null, portfolioTag: "rrss" },
    ],
  },
];

const ServiceBox = ({ service }: { service: ServiceData }) => {
  const { ref, isVisible } = useScrollFadeIn();
  const borderClass = service.accentClass === "text-bokeh-green"
    ? "border-l-bokeh-green"
    : service.accentClass === "text-bokeh-red"
    ? "border-l-bokeh-red"
    : "border-l-bokeh-blue";

  const imageBlock = (
    <div className="w-full md:w-1/3 shrink-0">
      <img
        src={service.image}
        alt={service.label}
        className="w-full h-full object-cover min-h-[240px] md:min-h-full"
        loading="lazy"
      />
    </div>
  );

  const contentBlock = (
    <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col gap-5">
      <span className={`font-body text-xs font-semibold uppercase tracking-widest ${service.accentClass}`}>
        {service.label}
      </span>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{service.heading}</h3>
      <p className="font-body text-muted-foreground leading-relaxed">{service.paragraph}</p>

      <div>
        <p className="font-body text-xs text-muted-foreground mb-3">Proyectos destacados</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {service.projects.map((proj, i) => (
            <a
              key={i}
              href={`/portafolio?categoria=${proj.portfolioTag}`}
              className="rounded-lg overflow-hidden shadow-sm bg-bokeh-white hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">Próximamente</div>
                )}
              </div>
              <div className="p-3">
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold text-bokeh-white ${service.accentBg} mb-1`}>
                  {proj.category}
                </span>
                <p className="font-heading text-sm font-bold text-foreground">{proj.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <a
          href={`${WHATSAPP_BASE}?text=${service.whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block w-full sm:w-auto text-center px-8 py-3 rounded-full font-heading font-semibold text-bokeh-white ${service.accentBg} hover:opacity-90 hover:scale-105 transition-all duration-200`}
        >
          Hablemos de tu proyecto
        </a>
        <a
          href="/portafolio"
          className={`font-body text-sm font-semibold ${service.accentClass} hover:underline self-center`}
        >
          Ver portafolio completo →
        </a>
      </div>
    </div>
  );

  return (
    <div
      id={service.id}
      ref={ref}
      className={`rounded-xl overflow-hidden bg-bokeh-white border-l-4 ${borderClass} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDuration: "700ms" }}
    >
      <div className="flex flex-col md:flex-row">
        {service.imagePosition === "left" ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  );
};

const Servicios = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [location.hash]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="bg-bokeh-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-bokeh-white mb-4">Lo que hacemos</h1>
          <p className="font-body text-lg text-bokeh-white/70 max-w-2xl mx-auto">
            Tres áreas de trabajo, un solo enfoque: historias que conectan y comunican.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col gap-12">
          {services.map((svc) => (
            <ServiceBox key={svc.label} service={svc} />
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
