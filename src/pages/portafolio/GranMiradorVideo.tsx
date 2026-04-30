import CaseStudyPage from "@/components/CaseStudyPage";

const GranMiradorVideo = () => (
  <CaseStudyPage
    image="https://res.cloudinary.com/declwaq4r/image/upload/v1775317631/4_1.18.4_bu9h0w.jpg"
    serviceTag="Producción Audiovisual"
    sectorTags={["Café", "Internacional"]}
    title="Gran Mirador Coffee"
    clientCategory="Gran Mirador Coffee · Video Institucional"
    reto="Una asociación que representa a más de 300 productores necesitaba un video que estuviera a la altura de su escala: mostrar no solo el café, sino el ecosistema humano, social y territorial detrás de él. El reto era construir una pieza que funcionara tanto para audiencias nacionales como internacionales, combinando impacto emocional con solidez institucional."
    hicimos="Bokeh produjo un video narrativo que recorre el viaje completo del café, desde la finca hasta la exportación. La pieza combina imágenes contemplativas del entorno natural, registro documental del proceso productivo, cultivo, cosecha, postcosecha y análisis, y testimonios reales de productores y productoras, articulados por una voz en off institucional. El relato no solo informa: humaniza el café y presenta a Gran Mirador como agente de transformación social, destacando sus pilares de sostenibilidad, equidad de género, acceso a salud y financiamiento."
    resultado="El resultado es una pieza que convierte la escala de la cooperativa en algo tangible y emocionalmente cercano, sin perder rigor ni credibilidad institucional."
    team={[
      { role: "Producción General", name: "Tatiana Alarcón" },
      { role: "Producción en campo", name: "Angie Díaz Valdez" },
      { role: "Curaduría de información", name: "Harold Espinoza y Tatiana Alarcón" },
      { role: "Dirección y guión", name: "Harold Espinoza" },
      { role: "Dirección de fotografía", name: "Harold Espinoza" },
      { role: "Edición y montaje", name: "Sofía Quiñonez" },
      { role: "Locución", name: "Naty Rivera Rojas" },
    ]}
    tools="DaVinci Resolve · After Effects · Adobe Premiere"
    whatsappUrl="https://wa.me/51907133735?text=Hola%20Bokeh%2C%20vi%20el%20proyecto%20de%20Gran%20Mirador%20Coffee%20y%20me%20interesa%20algo%20similar.%20%C2%BFPodemos%20conversar%3F"
    nextHref="/portafolio/calandria"
  />
);

export default GranMiradorVideo;
