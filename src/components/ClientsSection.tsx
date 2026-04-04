import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const ClientsSection = () => {
  const { ref, isVisible } = useScrollFadeIn();
  const logos = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="bg-bokeh-white py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
          Conoce a quienes han confiado en nosotros.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {logos.map((n) => (
            <div
              key={n}
              className="aspect-[3/2] rounded-xl bg-secondary/50 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md"
            >
              <span className="text-muted-foreground font-body text-xs">Logo {n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
