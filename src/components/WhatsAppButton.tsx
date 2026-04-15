import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/51907133735?text=Hola%20Bokeh%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.%20%C2%BFPodemos%20hablar%3F";

const WhatsAppButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) setShow(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-pulse-whatsapp"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-bokeh-white" />
    </a>
  );
};

export default WhatsAppButton;
