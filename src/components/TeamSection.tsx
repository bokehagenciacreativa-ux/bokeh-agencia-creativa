import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section id="nosotros" className="bg-background py-20 md:py-28">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">
          Las personas detrás de Bokeh.
        </h2>
        <div className="rounded-2xl overflow-hidden aspect-[21/9] mb-8">
          <img src="https://res.cloudinary.com/declwaq4r/image/upload/v1776317926/DSC04786-Mejorado-NR_bmhnig_bhzwxu.jpg" alt="Equipo Bokeh" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="text-center">
          <Link
            to="/nosotros"
            className="font-heading text-lg font-semibold text-bokeh-yellow hover:underline"
          >
            Conócenos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
