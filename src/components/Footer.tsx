import logo from "@/assets/techbridge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-secondary-foreground/10">
      <div className="container-narrow px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="TechBridge" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm text-secondary-foreground/50 leading-relaxed max-w-xs">
              Bridging Ideas to Innovation in Education. Your trusted partner for modern school infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {["Physics Lab", "Chemistry Lab", "Maths Lab", "Biology Lab", "Computer Lab", "School Furniture"].map((item) => (
                <li key={item}>
                  <a href="#services" className="font-body text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-secondary-foreground mb-4">More</h4>
            <ul className="space-y-2.5">
              {["Kindergarten Setup", "Library", "Sports Courts", "Solar Power", "Boards", "Storage Solutions"].map((item) => (
                <li key={item}>
                  <a href="#services" className="font-body text-sm text-secondary-foreground/50 hover:text-primary transition-colors">{item}</a>
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
