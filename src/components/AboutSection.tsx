import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const AboutSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Sabemos que tu marca tiene algo que contar.
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mt-6">
            Acompañamos a emprendedores, organizaciones y marcas que quieren llegar a su audiencia con propósito. Conectamos contigo: entendemos tu contexto, tu audiencia y tus objetivos antes de hacer que la magia suceda.
          </p>
          <div className="chevron-decoration bg-bokeh-yellow absolute -bottom-4 -left-2 opacity-40" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://res.cloudinary.com/declwaq4r/image/upload/v1775316485/DSC02292_deo3cu.jpg"
            alt="Equipo Bokeh trabajando"
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
