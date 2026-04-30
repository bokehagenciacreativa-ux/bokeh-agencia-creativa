import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export interface CaseStudyProps {
  image: string;
  serviceTag: string;
  sectorTags: string[];
  title: string;
  clientCategory: string;
  reto: string;
  hicimos: string;
  resultado: string;
  whatsappUrl: string;
  nextHref: string;
}

const CaseStudyPage = ({
  image,
  serviceTag,
  sectorTags,
  title,
  clientCategory,
  reto,
  hicimos,
  resultado,
  whatsappUrl,
  nextHref,
}: CaseStudyProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e8dfc5", color: "#0c0c0c", fontFamily: "Outfit, sans-serif" }}>
      <Navbar />
      <WhatsAppButton />

      {/* Header */}
      <section style={{ backgroundColor: "#0c0c0c" }} className="pt-20">
        <img
          src={image}
          alt={title}
          className="w-full object-cover"
          style={{ maxHeight: 480, height: "auto" }}
        />
      </section>

      {/* Title block */}
      <section style={{ backgroundColor: "#e8dfc5" }} className="pt-10 md:pt-14 pb-6">
        <div className="mx-auto px-6" style={{ maxWidth: 740 }}>
          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="px-3 py-1 rounded-full text-[13px]"
              style={{ fontWeight: 500, border: "1.5px solid #0c0c0c", color: "#0c0c0c" }}
            >
              {serviceTag}
            </span>
            {sectorTags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[13px]"
                style={{ fontWeight: 500, border: "1px solid #0c0c0c66", color: "#0c0c0c" }}
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3" style={{ fontWeight: 700, color: "#0c0c0c" }}>
            {title}
          </h1>
          <p className="text-base md:text-lg" style={{ fontWeight: 300, color: "#0c0c0c99" }}>
            {clientCategory}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#e8dfc5" }} className="py-10 md:py-16">
        <div className="mx-auto px-6 space-y-10 md:space-y-12" style={{ maxWidth: 740 }}>
          {[
            { label: "El reto", body: reto },
            { label: "Lo que hicimos", body: hicimos },
            { label: "El resultado", body: resultado },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="text-xs uppercase tracking-wider mb-3"
                style={{ fontWeight: 500, color: "#0c0c0c99", letterSpacing: "0.1em" }}
              >
                {s.label}
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ fontWeight: 300, color: "#0c0c0c" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom navigation */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 md:justify-between max-w-4xl mx-auto">
            <Link
              to="/portafolio"
              className="px-6 py-3 rounded-full text-center transition-all hover:scale-105 w-full md:w-auto"
              style={{ fontWeight: 500, border: "1.5px solid #0c0c0c", color: "#0c0c0c" }}
            >
              ← Volver al portafolio
            </Link>
            <Link
              to={nextHref}
              className="px-6 py-3 rounded-full text-center transition-all hover:scale-105 w-full md:w-auto"
              style={{ fontWeight: 500, backgroundColor: "#0c0c0c", color: "#ffffff" }}
            >
              Siguiente proyecto →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0c0c0c" }} className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-white" style={{ fontWeight: 700 }}>
            ¿Te interesa un proyecto similar?
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full transition-all hover:scale-105 w-full md:w-auto"
            style={{ fontWeight: 500, backgroundColor: "#f8b126", color: "#0c0c0c" }}
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
