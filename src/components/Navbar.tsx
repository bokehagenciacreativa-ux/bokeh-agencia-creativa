import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contacto");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "#contacto") return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
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

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href === "#contacto" ? (
                  <a
                    href="#contacto"
                    onClick={handleContactClick}
                    className={`font-body text-sm font-medium transition-colors duration-200 hover:text-bokeh-yellow relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-bokeh-yellow after:origin-bottom-right after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                      scrolled ? "text-foreground" : "text-bokeh-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-body text-sm font-medium transition-colors duration-200 hover:text-bokeh-yellow relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-bokeh-yellow after:origin-bottom-right after:transition-transform after:duration-300 ${
                      isActive(link.href)
                        ? "text-bokeh-yellow after:scale-x-100 after:origin-bottom-left"
                        : `after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left ${scrolled ? "text-foreground" : "text-bokeh-white"}`
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-bokeh-white"}`}
            aria-label="Abrir menú"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-bokeh-dark flex flex-col items-center justify-center gap-8 animate-fade-up">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-bokeh-white"
            aria-label="Cerrar menú"
          >
            <X size={32} />
          </button>
          {navLinks.map((link) =>
            link.href === "#contacto" ? (
              <a
                key={link.href}
                href="#contacto"
                onClick={handleContactClick}
                className="font-heading text-3xl font-bold text-bokeh-white hover:text-bokeh-yellow transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-heading text-3xl font-bold transition-colors ${
                  isActive(link.href) ? "text-bokeh-yellow" : "text-bokeh-white hover:text-bokeh-yellow"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
