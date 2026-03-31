import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import ParallaxImage from "./ParallaxImage";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";
const EMAIL = "techbridgesolutions2k25@gmail.com";

interface LabPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  secondaryImage?: string;
  color: string;
  features: string[];
  equipment: { category: string; items: string[] }[];
  safetyNotes?: string[];
}

const LabPageLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  secondaryImage,
  color,
  features,
  equipment,
  safetyNotes,
}: LabPageProps) => {
  const heroRef = useRef(null);
  const equipRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const equipInView = useInView(equipRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage src={heroImage} alt={title} className="absolute inset-0 h-full" speed={0.2} />
          <div className="absolute inset-0 bg-secondary/80" />
          <motion.div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, hsl(220 20% 14% / 0.9), ${color}40)` }}
          />
        </div>
        <div className="relative container-narrow section-padding pt-32 pb-16" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary font-body text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 block"
          >
            {subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-[1.1] mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8"
              >
                Key <span className="text-gradient-warm">Features</span>
              </motion.h2>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-foreground leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {secondaryImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  <img src={secondaryImage} alt={title} className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="section-padding bg-muted/50" ref={equipRef}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={equipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 block">Equipment List</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Complete <span className="text-gradient-warm">Inventory</span>
            </h2>
            <p className="font-body text-muted-foreground">Everything included in our standard setup for 40 students.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={equipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-6 rounded-xl bg-background border border-border"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notes */}
      {safetyNotes && safetyNotes.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-narrow max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            >
              Safety & <span className="text-gradient-warm">Best Practices</span>
            </motion.h2>
            <div className="space-y-3">
              {safetyNotes.map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-lg bg-accent/50 border border-border font-body text-sm text-foreground leading-relaxed"
                >
                  {note}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6"
          >
            Ready to Set Up Your <span className="text-gradient-warm">{title}?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-secondary-foreground/60 text-lg mb-10 max-w-xl mx-auto"
          >
            Get a free consultation and custom quote tailored to your school's space and budget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold font-body text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-secondary-foreground/20 text-secondary-foreground font-semibold font-body text-lg hover:bg-secondary-foreground/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default LabPageLayout;
