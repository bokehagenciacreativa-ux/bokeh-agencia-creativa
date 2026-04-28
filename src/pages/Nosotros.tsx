import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/51907133735?text=Hola%20Bokeh%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.%20%C2%BFPodemos%20hablar%3F";

const FadeIn = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const founders = [
  {
    name: "Tatiana Alarcón",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776227199/DSC02185_mhbsq4.jpg",
    roleColor: "#824f13",
    role: "Gerente General",
    formal: "Comunicadora y consultora especializada en planes de comunicación para empresas públicas y privadas. Produce proyectos audiovisuales con enfoque en soluciones claras y resultados concretos.",
    personal: "De familia productora de café y con una mirada global.",
    linkedin: "https://www.linkedin.com/in/tatianaalarconcarrion/",
  },
  {
    name: "Harold Espinoza",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776227199/DSC01908_1_sfaqce.jpg",
    roleColor: "#48824a",
    role: "Dirección de Producción Audiovisual",
    formal: "Comunicador y filmmaker con experiencia en empresas públicas, privadas y proyectos musicales. Director, guionista y editor con una convicción: la imaginación puede cambiar el futuro del mundo.",
    personal: "Cantante y compositor. Búscalo como Haxae.",
    linkedin: "https://www.linkedin.com/in/harold-espinoza-nu%C3%B1ez-25773920b/",
  },
  {
    name: "Angie Díaz",
    image: "https://res.cloudinary.com/declwaq4r/image/upload/v1776227199/DSC01995_lbnhbp.jpg",
    roleColor: "#e52936",
    role: "Dirección de Branding y Diseño",
    formal: "Comunicadora y diseñadora con más de 8 años de experiencia creando marcas únicas y memorables para empresas públicas, privadas y startups.",
    personal: "Cuando tú no te ves, ella ve tu potencial.",
    linkedin: "https://www.linkedin.com/in/angie-nikol-diaz-valdez-59005320a/",
  },
];

const stats = [
  { number: "+4", label: "Años en la industria" },
  { number: "+25", label: "Clientes atendidos" },
  { number: "+300", label: "Piezas producidas" },
  { number: "9", label: "Regiones del Perú" },
];

const teamMembers = [
  { name: "Seyci Sugey Arias (Sui)", role: "Diseñadora e ilustradora gráfica", specialty: "Cuenta historias con ilustraciones estratégicas." },
  { name: "Carlos", role: "Diseñador gráfico", specialty: "Ojo fresco y trazo preciso." },
  { name: "Jahaira Alvarado (Jaha)", role: "Practicante audiovisual", specialty: "Identifica y captura momentos especiales." },
  { name: "Sofía Quiñones (Sofie)", role: "Comunicadora y editora", specialty: "Creadora de contenidos virales. Y sí, familia del héroe nacional." },
  { name: "Banny Huaccha (Ban Ban)", role: "Asistente de producción", specialty: "Experta en logística y gestión del tiempo." },
  { name: "Andrea Díaz Valdez", role: "Practicante de marketing digital", specialty: "Excepcional en orden y programación de contenido." },
];

const values = [
  { color: "#f8b126", name: "Autenticidad", desc: "Entendemos tu contexto, tu audiencia y tus objetivos antes de producir una sola pieza. Tu historia es única — la tratamos como tal." },
  { color: "#48824a", name: "Equidad", desc: "Cada decisión creativa tiene una razón estratégica detrás. Trabajamos con transparencia, respeto y compromiso real con cada cliente." },
  { color: "#387dab", name: "Equilibrio", desc: "Somos locales con visión global. Combinamos creatividad y estrategia para que tu marca resuene donde necesita resonar." },
];

const testimonials = [
  { quote: "Trabajar con Bokeh cambió la manera en que nuestra marca se presenta al mundo. Entendieron nuestra historia desde el primer día y la convirtieron en contenido que realmente conecta con nuestros compradores.", name: "Carlos Mendoza", role: "Gerente General · Cooperativa Cafetalera del Norte" },
  { quote: "Lo que más valoro de Bokeh es que llegaron a entender nuestra realidad. El resultado habla solo.", name: "María Torres", role: "Directora · Asociación de Productores de Cacao, Amazonas" },
];

const Nosotros = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <section className="bg-bokeh-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-bokeh-white mb-4">Somos Bokeh.</h1>
          <p className="font-heading font-light text-lg md:text-xl text-bokeh-white/80 max-w-3xl mx-auto">
            Una agencia creativa nacida en el norte del Perú, con las raíces bien puestas y la mirada en el mundo.
          </p>
        </div>
      </section>

      {/* Section 1 — Manifiesto */}
      <section className="bg-background py-20 md:py-28">
        <FadeIn>
          <div className="max-w-[680px] mx-auto px-6 text-center space-y-6">
            <p className="font-heading font-light text-base md:text-lg text-foreground leading-relaxed whitespace-pre-line">
              Nuestro equipo cree en el poder de los sueños, de tus sueños.{"\n"}Narramos el valor de las ideas, las marcas y los lugares que visitamos. Tratamos cada proyecto como propio, porque sabemos que detrás de cada marca hay una historia que merece ser contada de la manera correcta. Investigamos, planificamos y creamos con un estándar de calidad que combina estrategia, diseño y escucha, para que tu historia sea recordada.
            </p>
            <p className="font-heading font-light text-base md:text-lg text-foreground leading-relaxed">
              Construimos puentes entre marcas y sus audiencias a través de piezas que emocionan, informan y conectan. Somos autenticidad, estrategia y mucho cuidado en cada detalle.
            </p>
            <p className="font-heading font-light text-base md:text-lg text-foreground leading-relaxed">
              Hacemos parte de la industria del café y el cacao. Conocemos el territorio, la gente, el espíritu emprendedor y las historias que hay detrás de cada producto. Eso nos hace diferentes — y eso es exactamente lo que ponemos al servicio de nuestros clientes de alcance internacional.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Section 2 — Números clave */}
      <section className="bg-bokeh-white py-20 md:py-28">
        <FadeIn>
          <div className="container mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-heading text-5xl md:text-6xl font-bold" style={{ color: "#f8b126" }}>{s.number}</span>
                <p className="font-heading font-medium text-sm md:text-base text-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Section 3 — Socios fundadores */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">Humanos detrás de Bokeh.</h2>
            <p className="font-heading font-light text-lg text-muted-foreground mb-12">Un equipo creativo, todoterreno, talentoso y con corazón.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {founders.map((f) => (
              <FadeIn key={f.name}>
                <div className="flex flex-col">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img src={f.image} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{f.name}</h3>
                  <p className="font-heading font-medium text-sm mt-1" style={{ color: f.roleColor }}>{f.role}</p>
                  <p className="font-heading font-light text-sm text-foreground mt-3 leading-relaxed">{f.formal}</p>
                  <p className="font-heading font-light text-sm text-muted-foreground italic mt-2">{f.personal}</p>
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 text-muted-foreground hover:text-foreground transition-colors inline-flex">
                    <Linkedin size={18} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Team photo */}
          <FadeIn>
            <div className="rounded-xl overflow-hidden aspect-[21/7] mb-4">
              <img
                src="https://res.cloudinary.com/declwaq4r/image/upload/v1776227490/DSC04752-Mejorado-NR_enz18r.jpg"
                alt="Equipo Bokeh"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <p className="font-heading font-medium text-sm text-muted-foreground text-center mb-10">El equipo</p>
          </FadeIn>

          {/* Team members grid */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((m) => (
                <div key={m.name}>
                  <p className="font-heading text-sm font-bold text-foreground">{m.name}</p>
                  <p className="font-heading font-medium text-xs text-muted-foreground mt-0.5">{m.role}</p>
                  <p className="font-heading font-light text-xs text-muted-foreground italic mt-1">{m.specialty}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 — Valores */}
      <section className="bg-bokeh-dark py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-10">
              {values.map((v) => (
                <div key={v.name} className="flex gap-4">
                  <div className="chevron-decoration shrink-0 mt-1" style={{ backgroundColor: v.color }} />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-bokeh-white">{v.name}</h3>
                    <p className="font-heading font-light text-sm text-bokeh-white/70 mt-2 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 5 — Testimonios */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
              Lo que dicen quienes han trabajado con nosotros.
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <FadeIn key={t.name}>
                <div className="bg-bokeh-white rounded-xl p-8 border-l-4" style={{ borderColor: "#f8b126" }}>
                  <p className="font-heading font-light text-sm text-foreground italic leading-relaxed mb-6">"{t.quote}"</p>
                  <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                  <p className="font-heading font-medium text-xs text-muted-foreground">{t.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA final */}
      <section className="bg-bokeh-dark py-24 md:py-32">
        <FadeIn>
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-bokeh-white mb-4">
              ¿Quieres trabajar con nosotros?
            </h2>
            <p className="font-heading font-light text-lg text-bokeh-white/70 mb-10">Estamos listos para escucharte.</p>
            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp</a>
            </Button>
          </div>
        </FadeIn>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nosotros;
