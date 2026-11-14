import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lightbulb, Wrench, GraduationCap } from "lucide-react";
import classroomImg from "@/assets/classroom.png";

const values = [
  { icon: Shield, title: "Safety First", desc: "Rounded edges, high-quality fittings, and layouts planned for safe movement." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern, future-ready designs that inspire curiosity and exploration." },
  { icon: Wrench, title: "Durability", desc: "Product choices consider durability and everyday use in school environments." },
  { icon: GraduationCap, title: "End-to-End", desc: "Complete design, supply, and installation — one partner for everything." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(180deg, hsl(34 45% 94%), hsl(38 40% 96%))" }}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 sm:mb-4 block">About TechBridge</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              Bridging Ideas to{" "}
              <span className="text-gradient-warm">Innovation</span> in Education
            </h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              TechBridge Solutions supports schools with laboratory equipment and wider campus infrastructure. Its listed solutions include physics, chemistry, maths, biology, computer and composite science labs, alongside school furniture, classroom boards, play materials, sports courts, solar power solutions and other educational supplies.
            </p>
            <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              Based in Gorakhpur, TechBridge works with school infrastructure requirements across Uttar Pradesh, Bihar, Delhi and Uttarakhand. Equipment selection should be matched to the school's classes, practical programme, available space and existing inventory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-premium)]">
              <motion.img
                src={classroomImg}
                alt="Modern classroom by TechBridge"
                className="w-full h-auto object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 sm:w-28 h-20 sm:h-28 rounded-2xl bg-primary/10 -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-accent -z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-20">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="p-4 sm:p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-card)] hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{item.title}</h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
