import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CoffeeCacaoSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="bg-bokeh-dark py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="chevron-decoration bg-bokeh-green" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-bokeh-white leading-tight mb-6">
            Contenido desde el origen.
          </h2>
          <p className="font-body text-lg text-bokeh-white/80 leading-relaxed">
            El cacao y café peruano es calidad, tradición y también un ecosistema de historias por contar. Somos parte de la industria del café y cacao: producimos contenido que hace justicia a su origen, su gente, su diversidad y su calidad.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden aspect-[4/3] bg-bokeh-dark/50 border border-bokeh-white/10 flex items-center justify-center">
          <span className="text-bokeh-white/30 font-body text-sm">Imagen placeholder</span>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCacaoSection;
