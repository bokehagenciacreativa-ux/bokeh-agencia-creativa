import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/51999999999?text=Hola%20Bokeh%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.%20%C2%BFPodemos%20hablar%3F";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video placeholder background */}
      <div className="absolute inset-0 bg-bokeh-dark">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        >
          <source src="https://res.cloudinary.com/declwaq4r/video/upload/v1775319374/VIDEO_HERO-_BOKEH2_xtzphh.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-bokeh-dark/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-bokeh-white leading-tight mb-6">
          Hacemos brillar tu marca, contando sus historias.
        </h1>
        <p className="font-body text-base md:text-lg text-bokeh-white/90 mb-10 max-w-2xl mx-auto">
          Somos una agencia de comunicación creativa y estratégica con base en el norte del Perú. Conectamos marcas con sus audiencias a través de contenido auténtico, novedoso y de alta calidad.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Hablemos de tu proyecto
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
