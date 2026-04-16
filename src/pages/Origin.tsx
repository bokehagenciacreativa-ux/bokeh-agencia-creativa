import { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/51907133735?text=Hi%20Bokeh!%20I'm%20interested%20in%20your%20content%20production%20services%20for%20coffee%20and%20cacao%20brands.%20Can%20we%20talk%3F";

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/* ───── Navbar ───── */
const OriginNavbar = () => {
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
              Let's talk
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-bokeh-white"}`}
            aria-label="Open menu"
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
            aria-label="Close menu"
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
            Let's talk
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
const Origin = () => {
  const scrollToCta = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <OriginNavbar />

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
            Your coffee and cacao have a story. We tell it.
          </h1>
          <p className="font-heading font-light text-base md:text-lg text-bokeh-white/90 mb-10 max-w-2xl mx-auto">
            We are a creative communication agency based in northern Peru: the origin. We produce the audiovisual content your brand needs to connect with international buyers, authentically and professionally.
          </p>
          <button
            onClick={scrollToCta}
            className="font-heading font-medium bg-bokeh-yellow text-bokeh-dark px-8 py-3 rounded-full hover:bg-[#f59e1e] transition-all duration-200 hover:scale-105 text-lg"
          >
            Let's talk
          </button>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Your product is exceptional. But does the world know it?
            </h2>
            <div className="chevron-decoration bg-bokeh-yellow absolute -bottom-4 -left-2 opacity-40" />
          </div>
          <p className="font-heading font-light text-lg text-muted-foreground leading-relaxed">
            International buyers want more than quality: they want to see the origin, the people, the process behind what they source. Without compelling visual content, even the best coffee or cacao gets lost in a crowded market.
          </p>
        </FadeIn>
      </section>

      {/* ── Section 3: The Solution ── */}
      <section className="bg-bokeh-dark py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Chevron />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-bokeh-white leading-tight mb-6">
              We bring your origin to life.
            </h2>
            <p className="font-heading font-light text-lg text-bokeh-white/80 leading-relaxed">
              Bokeh produces professional photo and video content from the source: the farms, the cooperatives, the landscapes of Jaén, San Ignacio, Tarapoto and other regions of Peru's cloud forest belt. We give international buyers what they need to trust, choose and proudly showcase your product.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="https://res.cloudinary.com/declwaq4r/image/upload/v1775316498/DSC04786-Mejorado-NR_bmhnig.jpg"
              alt="Coffee origin Peru"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── Section 4: What We Create ── */}
      <section id="services" className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
            What we create for you
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Origin story videos for your brand or cooperative",
              "Professional photography of farms, harvest and processing",
              "Content for international trade fairs and presentations",
              "Social media assets for global audiences",
              "Brand identity and packaging design",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Chevron />
                <p className="font-heading font-light text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── Section 5: How We Work ── */}
      <section className="bg-bokeh-white py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
            How we work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", name: "We listen", desc: "We start by understanding your product, your buyers and your goals." },
              { n: "02", name: "We plan", desc: "We design a content strategy tailored to your market and message." },
              { n: "03", name: "We produce", desc: "Our team goes to the coffee and cacao field to capture the real story." },
              { n: "04", name: "We deliver", desc: "You receive professional, ready-to-use content in your language." },
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

      {/* ── Section 5b: International Cases ── */}
      <section id="portfolio" className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3 text-center">
            Work that speaks for itself
          </h2>
          <p className="font-heading font-light text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Production, branding, packaging and translation for international clients — from origin.
          </p>
          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            <CaseCard label="Audiovisual production" title="Client name placeholder" description="Short description of the international project, one or two lines." tag="International client" />
            <CaseCard label="Branding & packaging" title="Client name placeholder" description="Short description of the international project, one or two lines." tag="International client" />
            <CaseCard label="Translation & transcription" title="Client name placeholder" description="Short description of the international project, one or two lines." tag="International client" />
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portafolio"
              className="font-heading font-medium text-bokeh-green hover:underline transition-colors"
            >
              See full portfolio →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 6: Why Origin ── */}
      <section id="about" className="bg-bokeh-green py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bokeh-white leading-tight mb-6">
            Why producing at origin matters
          </h2>
          <p className="font-heading font-light text-lg text-bokeh-white/90 max-w-3xl mx-auto">
            No one can tell the story of Peruvian coffee and cacao better than someone who lives it. We are local creative talent: we know the land, the culture and the people. That authenticity is something you cannot outsource from a distance.
          </p>
        </FadeIn>
      </section>

      {/* ── Section 7: Who It's For ── */}
      <section className="bg-background py-20 md:py-28">
        <FadeIn className="container mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-14 text-center">
            This is for you if...
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { bold: "You import or distribute", desc: "Peruvian coffee or cacao internationally" },
              { bold: "You need origin content", desc: "for trade fairs, buyers or retail partners" },
              { bold: "You want a stronger visual narrative", desc: "around your sourcing story" },
              { bold: "You are a cooperative or association", desc: "looking to reach global markets" },
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
            Trusted by brands and organizations across the industry
          </h2>
          <p className="font-heading font-light text-muted-foreground text-center mb-10 mx-auto" style={{ maxWidth: 600 }}>
            We have worked with coffee and cacao cooperatives, NGOs and international organizations across northern Peru. We speak your language — literally. Our team includes English-Spanish translation for seamless communication.
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
              Learn more about us →
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 9: CTA Final ── */}
      <section id="contact" className="bg-bokeh-dark py-24 md:py-32">
        <FadeIn className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bokeh-white mb-4">
            Ready to show the world where your product comes from?
          </h2>
          <p className="font-heading font-light text-lg text-bokeh-white/70 mb-10">
            Let's create content that opens doors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Write to us on WhatsApp
              </a>
            </Button>
            <a
              href="mailto:contacto@bokeh.pe"
              className="font-heading font-medium text-bokeh-white border border-bokeh-white/60 px-8 py-3 rounded-full hover:bg-bokeh-white/10 transition-all duration-200"
            >
              Send us an email
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
              {["Home", "Services", "Portfolio", "About us", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="font-heading font-light text-sm text-bokeh-white/60 hover:text-bokeh-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-bokeh-white/60 hover:text-bokeh-yellow transition-colors" aria-label="Social">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="font-heading font-light text-xs text-bokeh-white/40">© 2026 Bokeh. Crafted with love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Origin;
