import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Producción audiovisual",
    description: "Video y fotografía que comunican con identidad y mueven a la acción.",
    accent: "border-l-bokeh-green",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317633/AUDIOVISUAL_tzimlo.jpg",
  },
  {
    title: "Branding & diseño",
    description: "Identidades visuales que dicen quién eres antes de que digas una sola palabra.",
    accent: "border-l-bokeh-red",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317635/DISEN%CC%83O_ESTRATE%CC%81GICO_eehsgo.jpg",
  },
  {
    title: "Gestión de redes sociales",
    description: "Presencia digital constante, estratégica y fiel a tu voz.",
    accent: "border-l-bokeh-blue",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1775317845/REDES_SOCIALES_te3fbn.jpg",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
          ¿Qué podemos hacer por ti?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`bg-bokeh-white rounded-xl overflow-hidden border-l-4 ${svc.accent} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="aspect-video overflow-hidden">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{svc.title}</h3>
              <p className="font-body text-muted-foreground mb-6">{svc.description}</p>
              <Link
                to="/servicios"
                className="font-body text-sm font-semibold text-bokeh-yellow hover:underline"
              >
                Ver más →
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
