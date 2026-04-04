import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Link } from "react-router-dom";

const projects = [
  { title: "Aromas del Valle", category: "Branding", accent: "bg-bokeh-red", description: "Identidad visual completa para una marca de cacao de especialidad.", image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775316520/MESTIZA_INGLES-05_m3hpnu.jpg" },
  { title: "Video institucional Colinsa", category: "Audiovisual", accent: "bg-bokeh-green", description: "Producción audiovisual institucional para Colinsa.", image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317631/4_1.18.4_bu9h0w.jpg" },
  { title: "Gestión de RRSS", category: "Social Media", accent: "bg-bokeh-blue", description: "Estrategia de contenido digital y gestión de redes sociales.", image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775323142/GT_-_Consejos_safge_Bond_1_onbi8a.png" },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="portafolio" className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
          Algo de lo que hemos hecho.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-video bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground font-body text-sm">Imagen 16:9</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-bokeh-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-bokeh-white font-body text-sm text-center">{p.description}</p>
                </div>
              </div>
              <div className="p-5 bg-bokeh-white">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-bokeh-white ${p.accent} mb-2`}>
                  {p.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/portafolio"
            className="font-heading text-lg font-semibold text-bokeh-yellow hover:underline"
          >
            Ver portafolio completo →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
