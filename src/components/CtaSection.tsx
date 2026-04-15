import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/51907133735?text=Hola%20Bokeh%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.%20%C2%BFPodemos%20hablar%3F";

const CtaSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="contacto" className="bg-bokeh-dark py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bokeh-white mb-4">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="font-body text-lg text-bokeh-white/70 mb-10">
          Estamos listos para escucharte.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Escribirnos por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
