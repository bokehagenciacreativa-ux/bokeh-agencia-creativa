import { Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bokeh-dark py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <span className="font-heading text-2xl font-bold text-bokeh-white">Bokeh</span>

          {/* Nav links */}
          <ul className="flex items-center gap-6">
            {["Inicio", "Servicios", "Portafolio", "Nosotros"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-sm text-bokeh-white/60 hover:text-bokeh-yellow transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Facebook, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-bokeh-white/60 hover:text-bokeh-yellow transition-colors"
                aria-label="Red social"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-xs text-bokeh-white/40">© Bokeh. Hecho con amor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
