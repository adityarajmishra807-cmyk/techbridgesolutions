import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, FlaskConical, Calculator, Dna, Monitor, Layers, Home, BookOpen, Armchair, PanelTop, Trophy, Sun, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

const services = [
  { icon: Microscope, title: "Physics Lab", desc: "Complete physics lab setups with optical benches, meters, electrical equipment and demonstration tables." },
  { icon: FlaskConical, title: "Chemistry Lab", desc: "Fully equipped chemistry labs with glassware, reagent storage, fume hoods and safety systems." },
  { icon: Calculator, title: "Maths Lab", desc: "Interactive maths labs with 3D models, geometry kits, algebra tools and digital learning aids." },
  { icon: Dna, title: "Biology Lab", desc: "Biology labs with microscopes, specimen jars, dissection kits and anatomical models." },
  { icon: Monitor, title: "Computer Lab", desc: "Modern computer labs with networking, UPS systems, ergonomic furniture and licensed software." },
  { icon: Layers, title: "Composite Lab", desc: "Multi-disciplinary science labs combining Physics, Chemistry and Biology for Classes 6–10." },
  { icon: Home, title: "Kindergarten Setup", desc: "Safe, colorful play areas with age-appropriate furniture, toys and educational materials." },
  { icon: BookOpen, title: "Library Setup", desc: "Complete library solutions with shelving, reading tables, and organized storage systems." },
  { icon: Armchair, title: "School Furniture", desc: "Benches, desks, chairs, almirahs and storage solutions built for durability and comfort." },
  { icon: PanelTop, title: "Classroom Boards", desc: "Black boards, green boards, white boards and smart interactive boards for modern classrooms." },
  { icon: Trophy, title: "Sports Courts", desc: "Indoor and outdoor sports court installations for basketball, badminton, volleyball and more." },
  { icon: Sun, title: "Solar Power Plants", desc: "Rooftop solar installations to help schools reduce energy costs and go green." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-muted/50" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 block">Our Solutions</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Complete School <span className="text-gradient-warm">Infrastructure</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            From science labs to solar panels — everything your institution needs under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold font-body hover:opacity-90 transition-opacity"
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
