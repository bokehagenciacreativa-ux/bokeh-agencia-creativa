import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/51907133735?text=Hola%20Bokeh!%20Me%20interesa%20su%20servicio%20de%20producci%C3%B3n%20de%20contenido%20para%20marcas%20de%20caf%C3%A9%20y%20cacao.%20%C2%BFPodemos%20conversar%3F";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "International", href: "/international" },
  { label: "Exportación", href: "/exportacion" },
  { label: "Nosotros", href: "/nosotros" },
];

/* ───── Navbar ───── */
const ExportacionNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-bokeh-cream shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
            <span className={scrolled ? "text-foreground" : "text-bokeh-white"}>Bokeh</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-heading font-medium text-sm transition-colors duration-200 hover:text-bokeh-yellow ${
                  scrolled ? "text-foreground" : "text-bokeh-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToCta}
              className="font-heading font-medium text-sm bg-bokeh-yellow text-bokeh-dark px-5 py-2 rounded-full hover:bg-[#f59e1e] transition-all hover:scale-105"
            >
              Conversemos
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-bokeh-white"}`}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-bokeh-dark flex flex-col items-center justify-center gap-8 animate-fade-up">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-bokeh-white"
            aria-label="Cerrar menú"
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-3xl font-bold text-bokeh-white hover:text-bokeh-yellow transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-heading text-xl font-medium bg-bokeh-yellow text-bokeh-dark px-8 py-3 rounded-full"
          >
            Conversemos
          </button>
        </div>
      )}
    </>
  );
};

/* ───── Fade wrapper ───── */
const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
};

/* ───── Chevron icon ───── */
const Chevron = ({ color = "bg-bokeh-green" }: { color?: string }) => (
  <div className={`chevron-decoration ${color} inline-block`} />
);

/* ───── Case card ───── */
const CaseCard = ({
  label,
  title,
  description,
  tag,
}: {
  label: string;
  title: string;
  description: string;
  tag: string;
}) => (
  <div className="flex flex-col md:flex-row bg-bokeh-cream rounded-xl overflow-hidden border-l-4 border-bokeh-green hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="md:w-1/3 aspect-video md:aspect-auto bg-secondary/50 flex items-center justify-center">
      <span className="text-muted-foreground font-body text-xs">Imagen</span>
    </div>
    <div className="md:w-2/3 p-6 md:p-8 flex flex-col gap-2">
      <span className="font-heading font-medium text-xs uppercase tracking-wider text-bokeh-green">{label}</span>
      <h3 className="font-heading font-bold text-xl text-foreground">{title}</h3>
      <p className="font-heading font-light text-muted-foreground">{description}</p>
      <span className="font-heading font-medium text-xs text-muted-foreground mt-2">{tag}</span>
    </div>
  </div>
);

/* ───── Page ───── */
const Exportacion = () => {
  const scrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <ExportacionNavbar />

      {/* ── Section 1: Hero ── */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-bokeh-dark">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="https://res.cloudinary.com/declwaq4r/video/upload/v1775319374/VIDEO_HERO-_BOKEH2_xtzphh.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-bokeh-dark/40" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-bokeh-white leading-tight mb-6">
            Tu café y cacao tienen una historia. Nosotros la contamos.
          </h1>
          <p className="font-heading font-light text-base md:text-lg text-bokeh-white/90 mb-10 max-w-2xl mx-auto">
            Somos una agencia creativa de comunicación basada en el norte del Perú: el origen. Producimos el contenido audiovisual que tu marca necesita para conectar con compradores internacionales, de manera auténtica y profesional.
          </p>
          <button
            onClick={scrollToCta}
            className="font-heading font-medium bg-bokeh-yellow text-bokeh-dark px-8 py-3 rounded-full hover:bg-[#f59e1e] transition-all duration-200 hover:scale-105 text-lg"
          >
            Conversemos
          </button>
        </div>
      </section>

      {/* ── Section 2: El Problema ── */}
      <section className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Tu producto es excepcional. Pero, ¿el mundo lo sabe?
            </h2>
            <div className="chevron-decoration bg-bokeh-yellow absolute -bottom-4 -left-2 opacity-40" />
          </div>
          <p className="font-heading font-light text-lg text-muted-foreground leading-relaxed">
            Los compradores internacionales quieren más que calidad: quieren ver el origen, las personas, el proceso detrás de lo que adquieren. Sin contenido visual potente, incluso el mejor café o cacao se pierde en un mercado saturado.
          </p>
        </FadeIn>
      </section>

      {/* ── Section 3: La Solución ── */}
      <section className="bg-bokeh-dark py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Chevron />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-bokeh-white leading-tight mb-6">
              Damos vida a tu origen.
            </h2>
            <p className="font-heading font-light text-lg text-bokeh-white/80 leading-relaxed">
              Bokeh produce contenido fotográfico y audiovisual profesional desde la fuente: las fincas, las cooperativas y los paisajes de Jaén, San Ignacio, Tarapoto y otras regiones del cinturón de selva alta del Perú. Le damos a los compradores internacionales lo que necesitan para confiar, elegir y mostrar con orgullo tu producto.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://res.cloudinary.com/declwaq4r/image/upload/v1775316498/DSC04786-Mejorado-NR_bmhnig.jpg"
              alt="Origen del café peruano"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Section 4: Lo que creamos ── */}
      <section id="services" className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
            Lo que creamos para ti
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Videos de historia de origen para tu marca o cooperativa",
              "Fotografía profesional de fincas, cosecha y procesamiento",
              "Contenido para ferias internacionales y presentaciones",
              "Piezas para redes sociales orientadas a audiencias globales",
              "Identidad de marca y diseño de packaging",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Chevron />
                <p className="font-heading font-light text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 5: Cómo trabajamos ── */}
      <section className="bg-bokeh-white py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
            Cómo trabajamos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", name: "Escuchamos", desc: "Empezamos por entender tu producto, tus compradores y tus objetivos." },
              { n: "02", name: "Planificamos", desc: "Diseñamos una estrategia de contenido a la medida de tu mercado y mensaje." },
              { n: "03", name: "Producimos", desc: "Nuestro equipo va al campo de café y cacao a capturar la historia real." },
              { n: "04", name: "Entregamos", desc: "Recibes contenido profesional, listo para usar en tu idioma." },
            ].map((step) => (
              <div key={step.n} className="text-center md:text-left">
                <span className="font-heading font-bold text-5xl text-bokeh-yellow">{step.n}</span>
                <h3 className="font-heading font-medium text-xl text-foreground mt-3 mb-2">{step.name}</h3>
                <p className="font-heading font-light text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 5b: Casos internacionales ── */}
      <section id="portfolio" className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3 text-center">
            Trabajo que habla por sí mismo
          </h2>
          <p className="font-heading font-light text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Producción, branding, packaging y traducción para clientes internacionales — desde el origen.
          </p>
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            <CaseCard label="Producción audiovisual" title="Nombre del cliente" description="Breve descripción del proyecto internacional, una o dos líneas." tag="Cliente internacional" />
            <CaseCard label="Branding & packaging" title="Nombre del cliente" description="Breve descripción del proyecto internacional, una o dos líneas." tag="Cliente internacional" />
            <CaseCard label="Traducción y transcripción" title="Nombre del cliente" description="Breve descripción del proyecto internacional, una o dos líneas." tag="Cliente internacional" />
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portafolio"
              className="font-heading font-medium text-bokeh-green hover:underline transition-colors"
            >
              Ver portafolio completo →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 6: Por qué el origen ── */}
      <section id="about" className="bg-bokeh-green py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bokeh-white leading-tight mb-6">
            Por qué importa producir en el origen
          </h2>
          <p className="font-heading font-light text-lg text-bokeh-white/90 max-w-3xl mx-auto">
            Nadie puede contar la historia del café y cacao peruano mejor que quien la vive. Somos talento creativo local: conocemos la tierra, la cultura y la gente. Esa autenticidad no se puede tercerizar a la distancia.
          </p>
        </FadeIn>
      </section>

      {/* ── Section 7: Para quién es ── */}
      <section className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
            Esto es para ti si...
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { bold: "Importas o distribuyes", desc: "café o cacao peruano internacionalmente" },
              { bold: "Necesitas contenido de origen", desc: "para ferias, compradores o socios retail" },
              { bold: "Quieres una narrativa visual más fuerte", desc: "alrededor de tu historia de abastecimiento" },
              { bold: "Eres una cooperativa o asociación", desc: "que busca llegar a mercados globales" },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-bokeh-yellow pl-5 py-3">
                <h3 className="font-heading font-bold text-lg text-foreground">{item.bold}</h3>
                <p className="font-heading font-light text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 8: Trust Signals ── */}
      <section className="bg-bokeh-white" style={{ padding: "40px 0" }}>
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
            La confianza de marcas y organizaciones de la industria
          </h2>
          <p className="font-heading font-light text-muted-foreground text-center mb-10 mx-auto" style={{ maxWidth: 600 }}>
            Hemos trabajado con cooperativas de café y cacao, ONGs y organizaciones internacionales en todo el norte del Perú. Hablamos tu idioma — literalmente. Nuestro equipo incluye traducción inglés-español para una comunicación fluida.
          </p>
          {(() => {
            const trustLogos = [
              { name: "Falkon Coffees", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316786/Falcon_Coffees_bvtlhs.svg" },
              { name: "Cenfrocafé", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316783/Cenfro_cafe_%C3%BC_vldqi9.svg" },
              { name: "Grain Global", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316787/Grain_global_qzi5jd.svg" },
              { name: "CHACRA", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316783/Chacra_gjxhpl.svg" },
              { name: "COLINSA", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316790/Recurso_8_dojrlo.svg" },
              { name: "Rikolto", src: "https://res.cloudinary.com/declwaq4r/image/upload/v1776316791/Rikolto_j6g5m3.svg" },
            ];
            const repeated = [...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos];
            return (
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)",
                }}
              >
                <div className="flex items-center animate-marquee-left" style={{ gap: "clamp(40px, 5vw, 64px)", width: "max-content", animationDuration: "30s" }}>
                  {repeated.map((logo, i) => (
                    <img
                      key={`${logo.name}-${i}`}
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-6 md:max-h-8 w-auto shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            );
          })()}
          <div className="text-center mt-8">
            <Link
              to="/nosotros"
              className="font-heading font-medium text-muted-foreground hover:text-foreground hover:underline transition-colors"
            >
              Conoce más sobre nosotros →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 9: CTA Final ── */}
      <section id="contact" className="bg-bokeh-dark py-24 md:py-32">
        <FadeIn className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bokeh-white mb-4">
            ¿Listo para mostrarle al mundo de dónde viene tu producto?
          </h2>
          <p className="font-heading font-light text-lg text-bokeh-white/70 mb-10">
            Creemos contenido que abre puertas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </a>
            </Button>
            <a
              href="mailto:contacto@bokeh.pe"
              className="font-heading font-medium text-bokeh-white border border-bokeh-white/60 px-8 py-3 rounded-full hover:bg-bokeh-white/10 transition-all duration-200"
            >
              Envíanos un correo
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-bokeh-dark py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="font-heading text-2xl font-bold text-bokeh-white">Bokeh</span>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-heading font-light text-sm text-bokeh-white/60 hover:text-bokeh-yellow transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/bokeh_agencia/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/bokeh-agencia-creativa/" },
                { Icon: Facebook, href: "https://www.facebook.com/Bokeh2022agencia/" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-bokeh-white/60 hover:text-bokeh-yellow transition-colors" aria-label="Social">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="font-heading font-light text-xs text-bokeh-white/40">© 2026 Bokeh. Hecho con cariño.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Exportacion;
