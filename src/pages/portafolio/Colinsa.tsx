import CaseStudyPage from "@/components/CaseStudyPage";

const Colinsa = () => (
  <CaseStudyPage
    image="https://res.cloudinary.com/declwaq4r/image/upload/v1776256312/1_1.18.7_qpt6jf.jpg"
    serviceTag="Producción Audiovisual"
    sectorTags={["Café", "Internacional"]}
    title="Cooperativa COLINSA"
    clientCategory="Cooperativa COLINSA · Video Institucional"
    reto="COLINSA produce café especial en Cajamarca y quería un video que les abriera puertas en el extranjero: una pieza que mostrara su calidad, visibilizara a sus productores y funcionara como herramienta real de venta en mercados internacionales. El reto era equilibrar lo comercial y lo emocional sin que ninguno de los dos perdiera peso."
    hicimos="Bokeh asumió la producción de inicio a fin: investigación del mensaje con el cliente, desarrollo de guion y guion técnico, grabación en campo con registro documental real de productores y procesos, edición y montaje narrativo, y hasta tres rondas de revisión. El resultado se entregó en versiones adaptadas para distintos usos."
    resultado="Una pieza que no solo informa, sino que invita a la reflexión y genera conexión. El café de COLINSA deja de ser una ficha técnica y se convierte en una historia con rostro y origen."
    team={[
      { role: "Producción General", name: "Tatiana Alarcón" },
      { role: "Dirección", name: "Tatiana Alarcón y Harold Espinoza" },
      { role: "Dirección de Fotografía, Edición y Montaje", name: "Harold Espinoza" },
      { role: "Producción en campo", name: "Angie Díaz Valdez" },
      { role: "Producción musical", name: "Jhonny Alonso Cruz Noriega" },
    ]}
    tools="DaVinci Resolve · After Effects · Adobe Premiere"
    whatsappUrl="https://wa.me/51907133735?text=Hola%20Bokeh%2C%20vi%20el%20proyecto%20de%20COLINSA%20y%20me%20interesa%20algo%20similar.%20%C2%BFPodemos%20conversar%3F"
    nextHref="/portafolio/gran-mirador-woc"
  />
);

export default Colinsa;
