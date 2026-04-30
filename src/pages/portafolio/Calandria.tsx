import CaseStudyPage from "@/components/CaseStudyPage";

const Calandria = () => (
  <CaseStudyPage
    image="https://res.cloudinary.com/declwaq4r/image/upload/v1776256236/SE6_un3gbc.jpg"
    serviceTag="Producción Audiovisual"
    sectorTags={["ONG"]}
    title="Seamos de esos"
    clientCategory="Calandria (ONG) · Video Publicitario — Teaser TV 40s"
    reto="Una ONG dedicada a promover la reflexión sobre violencia de género necesitaba una pieza de alto impacto para televisión. El reto no era explicar ni convencer: era incomodar. Mostrar que el cambio es posible, y que ya está ocurriendo, sin caer en el mensaje obvio ni en el tono panfletario."
    hicimos="Bokeh desarrolló una producción integral a gran escala. La pieza construye una narrativa fragmentada de múltiples historias breves: situaciones cotidianas, acoso, roles de género, afectividad, cuidado, filmadas con estética cinematográfica, slow motion y dirección de actores enfocada en emociones contenidas. El rodaje cubrió múltiples locaciones (calle, transporte público, universidad, aeropuerto, hogar), con casting y dirección de más de 20 talentos en escena, desarrollo de storyboard, dirección de arte y gestión logística completa."
    resultado="Una pieza de 40 segundos que detiene, incomoda y abre conversación. El mensaje llega progresivo y culmina en una imagen colectiva: 'Seamos de esos'."
    team={[
      { role: "Producción General", name: "Tatiana Alarcón" },
      { role: "Producción en campo", name: "Angie Díaz Valdez" },
      { role: "Dirección y guión", name: "Harold Espinoza" },
      { role: "Dirección de fotografía", name: "Harold Espinoza" },
      { role: "Asistencia de foto", name: "Giuseppe Mancilla" },
      { role: "Edición y montaje", name: "Harold Espinoza" },
    ]}
    tools="DaVinci Resolve · After Effects · Adobe Premiere"
    whatsappUrl="https://wa.me/51907133735?text=Hola%20Bokeh%2C%20vi%20el%20proyecto%20de%20Calandria%20y%20me%20interesa%20algo%20similar.%20%C2%BFPodemos%20conversar%3F"
    nextHref="/portafolio/colinsa"
  />
);

export default Calandria;
