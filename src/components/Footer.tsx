import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-steel-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-heading">MS</span>
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight font-heading">MANUFACTURERS</h2>
                <span className="font-bold text-lg font-heading">STEEL</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted family owned and operated steel service center. Serving clients with quality, competitive pricing, and exceptional customer service.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:8402427954" className="flex items-center gap-3 footer-link">
                <Phone className="w-5 h-5 text-primary" />
                <span>840-242-7954</span>
              </a>
              <a 
                href="https://maps.google.com/?q=31259+Wiegman+Rd+Hayward+CA+94544" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 footer-link"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>31259 Wiegman Rd<br />Hayward, CA 94544</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Hours of Operation</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-primary-foreground/80 text-sm">
                <p>Monday – Thursday: 8:30 AM – 6:30 PM</p>
                <p>Friday: 8:30 AM – 5:30 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-heading">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="footer-link text-sm">About Us</Link>
              <Link to="/products" className="footer-link text-sm">Products</Link>
              <Link to="/services" className="footer-link text-sm">Services</Link>
              <Link to="/contact" className="footer-link text-sm">Contact Us</Link>
              <Link to="/privacy" className="footer-link text-sm">Privacy Policy</Link>
              <Link to="/terms" className="footer-link text-sm">Terms of Service</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Manufacturers Steel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
