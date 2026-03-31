import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";
import AnimatedCounter from "./AnimatedCounter";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";
const EMAIL = "techbridgesolutions2k25@gmail.com";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern school laboratory" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(220 20% 14% / 0.85), hsl(32 80% 50% / 0.2))" }} />
      </div>

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border border-primary/20 rounded-2xl"
        animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-primary/10 rounded-full"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-24 h-24 border border-primary/10 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container-narrow section-padding pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-body font-medium text-primary-foreground/90 tracking-wide uppercase">
              Trusted by 500+ Schools
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-secondary-foreground mb-6"
          >
            Building{" "}
            <span className="text-gradient-warm">Future-Ready</span>
            <br />
            Learning Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl font-body text-secondary-foreground/70 max-w-xl mb-10 leading-relaxed"
          >
            End-to-end school infrastructure solutions — from STEM labs and smart classrooms to sports courts and solar installations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold font-body text-base hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-secondary-foreground/20 text-secondary-foreground font-semibold font-body text-base hover:bg-secondary-foreground/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-secondary-foreground/20 text-secondary-foreground font-semibold font-body text-base hover:bg-secondary-foreground/5 transition-colors"
            >
              Explore Solutions
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Stats bar with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
        >
          {[
            { value: 500, suffix: "+", label: "Schools Served" },
            { value: 15, suffix: "+", label: "Product Categories" },
            { value: 10, suffix: "+", label: "Years Experience" },
            { value: 0, label: "Pan India", display: "Pan India" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                {stat.display ? stat.display : <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-sm font-body text-secondary-foreground/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
