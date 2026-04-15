import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/51999999999?text=Hola%20Bokeh%2C%20vi%20su%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.%20%C2%BFPodemos%20hablar%3F";

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

type ServiceTag = "Branding & Diseño" | "Producción Audiovisual" | "Gestión de RRSS";

const SERVICE_ACCENTS: Record<ServiceTag, string> = {
  "Branding & Diseño": "#e52936",
  "Producción Audiovisual": "#48824a",
  "Gestión de RRSS": "#387dab",
};

const SERVICE_FILTER_MAP: Record<string, ServiceTag> = {
  branding: "Branding & Diseño",
  audiovisual: "Producción Audiovisual",
  rrss: "Gestión de RRSS",
};

interface Project {
  slug: string;
  image: string;
  serviceTags: ServiceTag[];
  sectorTags: string[];
  title: string;
  result: string;
}

const projects: Project[] = [
  {
    slug: "jaenitos-point",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256097/Isologo_-_Eggshell_xy2xd2.jpg",
    serviceTags: ["Branding & Diseño"],
    sectorTags: ["Café", "Emprendimiento local"],
    title: "Jaenitos Point: Una marca que huele a campo.",
    result: "Sistema de identidad completo para cafetería local en Jaén.",
  },
  {
    slug: "chacra-branding",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776255988/Captura_de_pantalla_2026-04-15_070551_bohnei.png",
    serviceTags: ["Branding & Diseño"],
    sectorTags: ["Café", "Internacional"],
    title: "CHACRA Coffee: Una marca que abre mercados.",
    result: "Identidad completa orientada a exportación y comercio justo.",
  },
  {
    slug: "wilder-garcia",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256193/Captura_de_pantalla_2026-04-15_072943_nnocpt.png",
    serviceTags: ["Branding & Diseño"],
    sectorTags: ["Café", "Internacional"],
    title: "Wilder García: Del campo al mundo, con nombre propio.",
    result: "Identidad visual escalable para productor y exportador de café.",
  },
  {
    slug: "gran-mirador-video",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317631/4_1.18.4_bu9h0w.jpg",
    serviceTags: ["Producción Audiovisual"],
    sectorTags: ["Café", "Internacional"],
    title: "Gran Mirador Coffee: Del campo al mundo en un video.",
    result: "Video institucional para asociación de más de 300 productores.",
  },
  {
    slug: "calandria",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256236/SE6_un3gbc.jpg",
    serviceTags: ["Producción Audiovisual"],
    sectorTags: ["ONG"],
    title: "Seamos de esos: Un teaser que impulsa el cambio.",
    result: "Teaser publicitario de 40 segundos para televisión nacional.",
  },
  {
    slug: "colinsa",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256312/1_1.18.7_qpt6jf.jpg",
    serviceTags: ["Producción Audiovisual"],
    sectorTags: ["Café", "Internacional"],
    title: "COLINSA: El origen que convence a quienes conocen.",
    result: "Video institucional para cooperativa de café especial en Cajamarca.",
  },
  {
    slug: "gran-mirador-woc",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256398/GRAN_MIRADOR_3_e1h3sq.jpg",
    serviceTags: ["Producción Audiovisual"],
    sectorTags: ["Café", "Internacional"],
    title: "Gran Mirador Coffee: Origen peruano en San Diego.",
    result: "Serie de reels para feria internacional World of Coffee.",
  },
  {
    slug: "gran-mirador-rrss",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256247/GRAN_MIRADOR_2_tb3yu7.jpg",
    serviceTags: ["Gestión de RRSS"],
    sectorTags: ["Café", "Internacional"],
    title: "Gran Mirador Coffee: Instagram como herramienta comercial.",
    result: "Reels con hasta 2,000 vistas orgánicas. Presencia digital sólida.",
  },
  {
    slug: "chacra-rrss",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256523/Captura_de_pantalla_2026-04-15_073418_sdk12p.png",
    serviceTags: ["Gestión de RRSS"],
    sectorTags: ["Café", "Internacional"],
    title: "CHACRA Coffee: Contenido que cruza fronteras.",
    result: "Estrategia bilingüe con producción mensual en campo.",
  },
  {
    slug: "aromas-del-valle",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256521/Captura_de_pantalla_2026-04-15_073502_oxasc8.png",
    serviceTags: ["Gestión de RRSS"],
    sectorTags: ["Café", "Internacional"],
    title: "Aromas del Valle: Vitrina digital para clientes internacionales.",
    result: "Contenido de campo orientado a compradores internacionales.",
  },
  {
    slug: "grain-global",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256625/Captura_de_pantalla_2026-04-15_073654_dohl3p.png",
    serviceTags: ["Gestión de RRSS"],
    sectorTags: ["Café", "Cacao", "Internacional"],
    title: "Grain Global Perú: Origen peruano para el mundo.",
    result: "Narrativa de marca en 4 etapas con producción en campo.",
  },
  {
    slug: "grupo-troya",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776256626/Captura_de_pantalla_2026-04-15_073615_jusgx5.png",
    serviceTags: ["Gestión de RRSS"],
    sectorTags: ["Hidrocarburos con sazón local"],
    title: "Grupo Troya: Confianza y cercanía para tus viajes en carretera.",
    result: "Estrategia de contenido para red de estaciones en el nororiente.",
  },
];

const SERVICE_FILTERS: ServiceTag[] = ["Branding & Diseño", "Producción Audiovisual", "Gestión de RRSS"];
const SECTOR_FILTERS = ["Café", "Cacao", "ONG", "Emprendimiento local", "Internacional"];

const Portafolio = () => {
  const [searchParams] = useSearchParams();
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  // Apply URL params on mount
  useEffect(() => {
    const cat = searchParams.get("categoria");
    if (cat && SERVICE_FILTER_MAP[cat]) {
      setActiveFilters(new Set([SERVICE_FILTER_MAP[cat]]));
    }
  }, [searchParams]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  };

  const clearFilters = () => setActiveFilters(new Set());

  const filtered = useMemo(() => {
    if (activeFilters.size === 0) return projects;
    return projects.filter((p) => {
      const allTags = [...p.serviceTags, ...p.sectorTags];
      return [...activeFilters].every((f) => allTags.includes(f));
    });
  }, [activeFilters]);

  const isAll = activeFilters.size === 0;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e8dfc5", color: "#0c0c0c" }}>
      <Navbar />
      <WhatsAppButton />

      {/* Header */}
      <section style={{ backgroundColor: "#0c0c0c" }} className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Nuestro trabajo
          </h1>
          <p className="font-heading font-light text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Proyectos que cuentan historias desde el norte del Perú y para el mundo.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-6 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={clearFilters}
              className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-all duration-200"
              style={
                isAll
                  ? { backgroundColor: "#0c0c0c", color: "#ffffff" }
                  : { border: "1.5px solid #0c0c0c", color: "#0c0c0c", backgroundColor: "transparent" }
              }
            >
              Todos
            </button>
            {SERVICE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => toggleFilter(f)}
                className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-all duration-200"
                style={
                  activeFilters.has(f)
                    ? { backgroundColor: "#0c0c0c", color: "#ffffff" }
                    : { border: "1.5px solid #0c0c0c", color: "#0c0c0c", backgroundColor: "transparent" }
                }
              >
                {f}
              </button>
            ))}
            {SECTOR_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => toggleFilter(f)}
                className="px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-all duration-200"
                style={
                  activeFilters.has(f)
                    ? { backgroundColor: "#0c0c0c", color: "#ffffff" }
                    : { border: "1.5px solid #0c0c0c", color: "#0c0c0c", backgroundColor: "transparent" }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#e8dfc5" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => {
                const accent = SERVICE_ACCENTS[p.serviceTags[0]];
                return (
                  <div
                    key={p.slug}
                    className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {p.serviceTags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-xs font-heading font-medium text-white"
                            style={{ backgroundColor: SERVICE_ACCENTS[t] }}
                          >
                            {t}
                          </span>
                        ))}
                        {p.sectorTags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded-full text-xs font-heading font-medium"
                            style={{ border: "1px solid #0c0c0c", color: "#0c0c0c" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-heading font-bold text-lg leading-snug mb-1" style={{ color: "#0c0c0c" }}>
                        {p.title}
                      </h3>
                      <p className="font-heading font-light text-sm mb-3" style={{ color: "#0c0c0c99" }}>
                        {p.result}
                      </p>
                      <Link
                        to={`/portafolio/${p.slug}`}
                        className="font-heading font-medium text-sm hover:underline"
                        style={{ color: accent }}
                      >
                        Ver proyecto →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {filtered.length === 0 && (
            <p className="text-center font-heading font-light text-lg mt-12" style={{ color: "#0c0c0c99" }}>
              No hay proyectos con esos filtros. Prueba otra combinación.
            </p>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section style={{ backgroundColor: "#0c0c0c" }} className="py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="font-heading font-light text-lg text-white/70 mb-10">
              Estamos listos para escucharte.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Hablemos por WhatsApp
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portafolio;
