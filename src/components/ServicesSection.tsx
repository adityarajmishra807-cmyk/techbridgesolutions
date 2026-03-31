import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, FlaskConical, Calculator, Dna, Monitor, Layers, Home, BookOpen, Armchair, PanelTop, Trophy, Sun, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

const services = [
  { icon: Microscope, title: "Physics Lab", desc: "Complete physics lab setups with optical benches, meters, electrical equipment and demonstration tables.", link: "/labs/physics" },
  { icon: FlaskConical, title: "Chemistry Lab", desc: "Fully equipped chemistry labs with glassware, reagent storage, fume hoods and safety systems.", link: "/labs/chemistry" },
  { icon: Calculator, title: "Maths Lab", desc: "Interactive maths labs with 3D models, geometry kits, algebra tools and digital learning aids.", link: "/labs/maths" },
  { icon: Dna, title: "Biology Lab", desc: "Biology labs with microscopes, specimen jars, dissection kits and anatomical models.", link: "/labs/biology" },
  { icon: Monitor, title: "Computer Lab", desc: "Modern computer labs with networking, UPS systems, ergonomic furniture and licensed software.", link: "/labs/computer" },
  { icon: Layers, title: "Composite Lab", desc: "Multi-disciplinary science labs combining Physics, Chemistry and Biology for Classes 6–10.", link: "/labs/composite" },
  { icon: Home, title: "Kindergarten Setup", desc: "Safe, colorful play areas with age-appropriate furniture, toys and educational materials." },
  { icon: BookOpen, title: "Library Setup", desc: "Complete library solutions with shelving, reading tables, and organized storage systems." },
  { icon: Armchair, title: "School Furniture", desc: "Benches, desks, chairs, almirahs and storage solutions built for durability and comfort." },
  { icon: PanelTop, title: "Classroom Boards", desc: "Black boards, green boards, white boards and smart interactive boards for modern classrooms." },
  { icon: Trophy, title: "Sports Courts", desc: "Indoor and outdoor sports court installations for basketball, badminton, volleyball and more." },
  { icon: Sun, title: "Solar Power Plants", desc: "Rooftop solar installations to help schools reduce energy costs and go green." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(135deg, hsl(220 22% 12%), hsl(220 18% 16%))" }}>
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "var(--gradient-warm)" }} />
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-10" style={{ background: "hsl(32 80% 50%)", filter: "blur(80px)" }} />
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 sm:mb-4 block">Our Solutions</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight mb-3 sm:mb-4">
            Complete School <span className="text-gradient-warm">Infrastructure</span>
          </h2>
          <p className="font-body text-secondary-foreground/60 text-sm sm:text-base md:text-lg">
            From science labs to solar panels — everything your institution needs under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {services.map((service, i) => {
            const CardContent = (
              <>
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-accent flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/10 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1 sm:mb-2">{service.title}</h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3 line-clamp-3">{service.desc}</p>
                {service.link && (
                  <span className="inline-flex items-center gap-1 text-xs font-body font-medium text-primary">
                    View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.04 }}
              >
                {service.link ? (
                  <Link
                    to={service.link}
                    className="group block p-4 sm:p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/40 hover:bg-secondary-foreground/10 hover:shadow-[var(--shadow-premium)] transition-all duration-300 h-full active:scale-[0.98]"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div className="group p-4 sm:p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/40 hover:bg-secondary-foreground/10 hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default h-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold font-body text-sm sm:text-base hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
