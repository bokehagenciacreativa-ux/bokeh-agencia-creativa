import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const row1Logos = [
  { name: "Grupo Troya", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316788/Grupo_Troya_mbbn9v.svg" },
  { name: "Calandria", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316790/Recurso_9_ijerii.svg" },
  { name: "ExpoCafé", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316785/Expocafe_%C3%BCCajamarca2023_mua4m7.svg" },
  { name: "Falkon Coffees", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316786/Falcon_Coffees_bvtlhs.svg" },
  { name: "Enseña Perú", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316785/Ensen_%C3%A2a_Peru_%C3%BC_aq5oob.svg" },
  { name: "GALE Arquitectos", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316787/GALE_mlcvot.svg" },
  { name: "Cenfrocafé", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316783/Cenfro_cafe_%C3%BC_vldqi9.svg" },
];

const row2Logos = [
  { name: "Grain Global", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316787/Grain_global_qzi5jd.svg" },
  { name: "CHACRA", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316783/Chacra_gjxhpl.svg" },
  { name: "COLINSA", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316790/Recurso_8_dojrlo.svg" },
  { name: "Rikolto", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316791/Rikolto_j6g5m3.svg" },
  { name: "Grupo Troya", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316788/Grupo_Troya_mbbn9v.svg" },
  { name: "ExpoCafé", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316785/Expocafe_%C3%BCCajamarca2023_mua4m7.svg" },
  { name: "Falkon Coffees", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316786/Falcon_Coffees_bvtlhs.svg" },
];

const MarqueeRow = ({
  logos,
  direction,
}: {
  logos: { name: string; src: string }[];
  direction: "left" | "right";
}) => {
  // Repeat 3x for seamless loop
  const repeated = [...logos, ...logos, ...logos];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)" }}>
      <div className={`flex items-center ${animClass}`} style={{ gap: "48px", width: "max-content" }}>
        {repeated.map((logo, i) => (
          <img
            key={`${logo.name}-${i}`}
            src={logo.src}
            alt={logo.name}
            className="h-8 md:h-8 max-h-6 md:max-h-8 w-auto shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            style={{ minWidth: 0 }}
          />
        ))}
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="bg-bokeh-white py-10">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-base font-medium text-foreground mb-8 text-center">
          Conoce a quienes han confiado en nosotros.
        </h2>
        <div className="flex flex-col gap-4">
          <MarqueeRow logos={row1Logos} direction="left" />
          <MarqueeRow logos={row2Logos} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
