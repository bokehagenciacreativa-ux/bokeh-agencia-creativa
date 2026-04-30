import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export interface TeamMember {
  role: string;
  name: string;
}

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
  team?: TeamMember[];
  tools?: string;
  variant?: "default" | "rrss";
}

const GalleryPlaceholder = ({ ratio }: { ratio: "4/3" | "16/9" }) => (
  <div
    className="w-full flex items-center justify-center rounded-xl"
    style={{
      backgroundColor: "#d4c9ac",
      aspectRatio: ratio,
    }}
  >
    <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, color: "#0c0c0c80", fontSize: 14 }}>
      Imagen del proyecto
    </span>
  </div>
);

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
  team,
  tools,
  variant = "default",
}: CaseStudyProps) => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#e8dfc5", color: "#0c0c0c", fontFamily: "Outfit, sans-serif" }}
    >
      <Navbar />
      <WhatsAppButton />

      {/* Hero image - no dark header */}
      <section className="pt-20" style={{ backgroundColor: "#e8dfc5" }}>
        <img
          src={image}
          alt={title}
          className="w-full object-cover hero-image"
        />
      </section>

      {/* Title block */}
      <section style={{ backgroundColor: "#e8dfc5" }} className="pt-12 md:pt-16 pb-8">
        <div className="mx-auto case-container">
          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className="px-3 py-1 rounded-full"
              style={{ fontWeight: 500, fontSize: 13, border: "1.5px solid #0c0c0c", color: "#0c0c0c" }}
            >
              {serviceTag}
            </span>
            {sectorTags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full"
                style={{ fontWeight: 500, fontSize: 13, border: "1px solid #0c0c0c", color: "#0c0c0c" }}
              >
                {t}
              </span>
            ))}
          </div>
          <h1
            className="mb-3"
            style={{ fontWeight: 700, color: "#0c0c0c", fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.1 }}
          >
            {title}
          </h1>
          <p style={{ fontWeight: 300, fontSize: 16, color: "#0c0c0c99" }}>{clientCategory}</p>

          <div className="mt-10" style={{ height: 1, backgroundColor: "#0c0c0c33" }} />
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#e8dfc5" }} className="pb-12 md:pb-16">
        <div className="mx-auto case-container space-y-12 md:space-y-16">
          {/* El reto */}
          <div>
            <p
              className="mb-4"
              style={{
                fontWeight: 700,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#0c0c0c80",
              }}
            >
              El reto
            </p>
            <p style={{ fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: "#0c0c0c", maxWidth: 680 }}>
              {reto}
            </p>
          </div>

          {/* Lo que hicimos */}
          <div>
            <p
              className="mb-4"
              style={{
                fontWeight: 700,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#0c0c0c80",
              }}
            >
              Lo que hicimos
            </p>
            <p style={{ fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: "#0c0c0c", maxWidth: 680 }}>
              {hicimos}
            </p>

            {/* Gallery */}
            {variant === "rrss" ? (
              <div className="mt-10 space-y-6">
                <div className="flex justify-center">
                  <div
                    className="rrss-tall flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#d4c9ac", aspectRatio: "9/16" }}
                  >
                    <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, color: "#0c0c0c80", fontSize: 14 }}>
                      Video o GIF de la cuenta
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className="w-full flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#d4c9ac", aspectRatio: "4/3" }}
                  >
                    <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, color: "#0c0c0c80", fontSize: 14 }}>
                      Pieza realizada
                    </span>
                  </div>
                  <div
                    className="w-full flex items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#d4c9ac", aspectRatio: "4/3" }}
                  >
                    <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 300, color: "#0c0c0c80", fontSize: 14 }}>
                      Pieza realizada
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GalleryPlaceholder ratio="4/3" />
                  <GalleryPlaceholder ratio="4/3" />
                </div>
                <GalleryPlaceholder ratio="16/9" />
              </div>
            )}
          </div>

          {/* El resultado */}
          <div>
            <p
              className="mb-4"
              style={{
                fontWeight: 700,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#0c0c0c80",
              }}
            >
              El resultado
            </p>
            <p style={{ fontWeight: 300, fontSize: 18, lineHeight: 1.7, color: "#0c0c0c", maxWidth: 680 }}>
              {resultado}
            </p>
          </div>

          {/* Equipo */}
          {team && team.length > 0 && (
            <div>
              <p
                className="mb-4"
                style={{
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#0c0c0c80",
                }}
              >
                Equipo
              </p>
              <div style={{ maxWidth: 680 }} className="space-y-2">
                {team.map((m, i) => (
                  <p key={i} style={{ fontSize: 16, color: "#0c0c0c", lineHeight: 1.6 }}>
                    <span style={{ fontWeight: 500 }}>{m.role}:</span>{" "}
                    <span style={{ fontWeight: 300 }}>{m.name}</span>
                  </p>
                ))}
                {tools && (
                  <p
                    className="pt-4"
                    style={{
                      fontWeight: 300,
                      fontSize: 14,
                      color: "#0c0c0c99",
                      fontStyle: "italic",
                    }}
                  >
                    Herramientas: {tools}
                  </p>
                )}
              </div>
            </div>
          )}

          <div style={{ height: 1, backgroundColor: "#0c0c0c33" }} />
        </div>
      </section>

      {/* Bottom navigation */}
      <section style={{ backgroundColor: "#ffffff", padding: "32px 0" }}>
        <div className="mx-auto case-container">
          <div className="flex flex-col md:flex-row gap-4 md:justify-between">
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
      <section style={{ backgroundColor: "#0c0c0c", padding: "80px 0" }}>
        <div className="container mx-auto px-6 text-center">
          <h2
            className="mb-4 text-white"
            style={{ fontWeight: 700, fontSize: "clamp(28px, 4vw, 36px)" }}
          >
            ¿Te interesa un proyecto similar?
          </h2>
          <p
            className="mb-8 text-white mx-auto"
            style={{ fontWeight: 300, fontSize: 18, maxWidth: 560 }}
          >
            Cuéntanos tu proyecto y encontramos la mejor forma de ayudarte.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{ fontWeight: 500, backgroundColor: "#f8b126", color: "#0c0c0c" }}
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </section>

      <Footer />

      <style>{`
        .hero-image {
          height: 300px;
          max-height: 300px;
        }
        .case-container {
          max-width: 800px;
          padding-left: 24px;
          padding-right: 24px;
        }
        @media (min-width: 768px) {
          .hero-image {
            height: auto;
            max-height: 520px;
          }
          .case-container {
            padding-left: 60px;
            padding-right: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudyPage;
