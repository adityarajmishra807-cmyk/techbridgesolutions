import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/techbridge-logo.png";
import { Link } from "react-router-dom";

const EMAIL = "techbridgesolutions2k25@gmail.com";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-secondary-foreground/10">
      <div className="container-narrow px-4 sm:px-6 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="TechBridge" className="h-10 w-auto mb-4 rounded-md" style={{ filter: "brightness(0) invert(1)" }} />
            <p className="font-body text-xs sm:text-sm text-secondary-foreground/50 leading-relaxed max-w-xs mb-4">
              Bridging Ideas to Innovation in Education. Your trusted partner for modern school infrastructure.
            </p>
            <div className="space-y-2">
              <a href="tel:+918800883727" className="flex items-center gap-2 font-body text-xs text-secondary-foreground/40 hover:text-primary transition-colors">
                <Phone className="w-3 h-3 shrink-0" /> +91 88008 83727
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 font-body text-xs text-secondary-foreground/40 hover:text-primary transition-colors">
                <Mail className="w-3 h-3 shrink-0" /> <span className="truncate">{EMAIL}</span>
              </a>
              <span className="flex items-center gap-2 font-body text-xs text-secondary-foreground/40">
                <MapPin className="w-3 h-3 shrink-0" /> Pan India Coverage
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold text-secondary-foreground mb-3 sm:mb-4">Lab Solutions</h4>
            <ul className="space-y-2">
              {[
                { label: "Physics Lab", to: "/labs/physics" },
                { label: "Chemistry Lab", to: "/labs/chemistry" },
                { label: "Maths Lab", to: "/labs/maths" },
                { label: "Biology Lab", to: "/labs/biology" },
                { label: "Computer Lab", to: "/labs/computer" },
                { label: "Composite Lab", to: "/labs/composite" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="font-body text-xs sm:text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold text-secondary-foreground mb-3 sm:mb-4">More Solutions</h4>
            <ul className="space-y-2">
              {["Kindergarten", "Library", "Sports Courts", "Solar Power", "Boards", "Storage"].map((item) => (
                <li key={item}>
                  <a href="/#services" className="font-body text-xs sm:text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold text-secondary-foreground mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/#home" },
                { label: "About Us", href: "/#about" },
                { label: "Services", href: "/#services" },
                { label: "Products", href: "/#products" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-body text-xs sm:text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center">
          <p className="font-body text-[10px] sm:text-xs text-secondary-foreground/30">
            © {new Date().getFullYear()} TechBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
