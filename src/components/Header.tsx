import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "ABOUT US", path: "/about" },
    { name: "PRODUCTS", path: "/products" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-heading">MS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-steel-dark font-bold text-xl leading-tight font-heading">MANUFACTURERS</h1>
              <div className="flex items-center gap-2">
                <span className="text-steel-dark font-bold text-xl font-heading">STEEL</span>
                <div className="w-12 h-1 bg-primary"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? "text-primary" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone Button */}
          <a
            href="tel:8402427954"
            className="hidden md:flex btn-phone rounded"
          >
            <Phone className="w-5 h-5" />
            <span>840-242-7954</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-steel-dark"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link ${isActive(link.path) ? "text-primary" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:8402427954"
                className="btn-phone rounded w-fit"
              >
                <Phone className="w-5 h-5" />
                <span>840-242-7954</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
