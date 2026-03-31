import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/techbridge-logo.png";
import { Link } from "react-router-dom";

const EMAIL = "techbridgesolutions2k25@gmail.com";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-secondary-foreground/10">
      <div className="container-narrow px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="TechBridge" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm text-secondary-foreground/50 leading-relaxed max-w-xs mb-4">
              Bridging Ideas to Innovation in Education. Your trusted partner for modern school infrastructure.
            </p>
            <div className="space-y-2">
              <a href="tel:+918800883727" className="flex items-center gap-2 font-body text-xs text-secondary-foreground/40 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" /> +91 88008 83727
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 font-body text-xs text-secondary-foreground/40 hover:text-primary transition-colors">
                <Mail className="w-3 h-3" /> {EMAIL}
              </a>
              <span className="flex items-center gap-2 font-body text-xs text-secondary-foreground/40">
                <MapPin className="w-3 h-3" /> Pan India Coverage
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground mb-4">Lab Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Physics Lab", to: "/labs/physics" },
                { label: "Chemistry Lab", to: "/labs/chemistry" },
                { label: "Maths Lab", to: "/labs/maths" },
                { label: "Biology Lab", to: "/labs/biology" },
                { label: "Computer Lab", to: "/labs/computer" },
                { label: "Composite Lab", to: "/labs/composite" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="font-body text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground mb-4">More Solutions</h4>
            <ul className="space-y-2.5">
              {["Kindergarten Setup", "Library", "Sports Courts", "Solar Power", "Boards", "Storage Solutions"].map((item) => (
                <li key={item}>
                  <a href="/#services" className="font-body text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Products", href: "/#products" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-body text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-10 pt-8 text-center">
          <p className="font-body text-xs text-secondary-foreground/30">
            © {new Date().getFullYear()} TechBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
