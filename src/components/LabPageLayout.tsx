import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, MessageCircle, Mail, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";
import ParallaxImage from "./ParallaxImage";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";
const EMAIL = "techbridgesolutions2k25@gmail.com";

interface LabPageProps {
  title: string;
  h1Title: string;
  planningTitle: string;
  planningDescription: string;
  planningChecks: string[];
  faqs: { question: string; answer: string }[];
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
  h1Title,
  planningTitle,
  planningDescription,
  planningChecks,
  faqs,
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
        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 z-10"
          style={{ background: `linear-gradient(90deg, ${color}, hsl(32 80% 50%))` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4"
            style={{ background: `${color}15` }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {subtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-[1.1] mb-6"
          >
            {h1Title}
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

      {/* Features - warm tinted background */}
      <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(34 45% 94%), hsl(38 50% 92%))" }}>
        {/* Decorative orb */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20" style={{ background: color, filter: "blur(80px)" }} />
        <div className="container-narrow relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background/70 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}20` }}>
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
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
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-premium)]">
                  <img src={secondaryImage} alt={title} className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                  style={{ background: `${color}20` }}
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 rounded-full -z-10"
                  style={{ background: `${color}15` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* School lab planning - practical buyer guidance */}
      <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(38 50% 92%), hsl(34 45% 94%))" }}>
        <div className="container-narrow max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">School Lab Planning</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{planningTitle}</h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">{planningDescription}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {planningChecks.map((check, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background/70 border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="font-body text-sm text-foreground leading-relaxed">{check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment List - dark navy section */}
      <section className="section-padding relative overflow-hidden" ref={equipRef} style={{ background: "linear-gradient(135deg, hsl(220 22% 12%), hsl(220 18% 18%))" }}>
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${color}, hsl(32 80% 50%))` }} />
        {/* Glow orbs */}
        <div className="absolute -top-32 right-10 w-64 h-64 rounded-full opacity-10" style={{ background: color, filter: "blur(100px)" }} />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full opacity-8" style={{ background: "hsl(32 80% 50%)", filter: "blur(80px)" }} />

        <div className="container-narrow relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={equipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 block">Equipment List</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground leading-tight mb-4">
              Complete <span className="text-gradient-warm">Inventory</span>
            </h2>
            <p className="font-body text-secondary-foreground/50">The list below shows equipment categories and examples for this laboratory. Check final selection and quantities against the school's class levels, practical programme and existing inventory.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {equipment.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={equipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-5 sm:p-6 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 hover:bg-secondary-foreground/8 transition-all duration-300 group"
              >
                <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-4 pb-3 border-b" style={{ borderColor: `${color}30` }}>
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="font-body text-sm text-secondary-foreground/60 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notes - warm amber section */}
      {safetyNotes && safetyNotes.length > 0 && (
        <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(38 50% 92%), hsl(34 45% 94%))" }}>
          <div className="container-narrow max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">Guidelines</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Safety & <span className="text-gradient-warm">Best Practices</span>
              </h2>
            </motion.div>
            <div className="space-y-3">
              {safetyNotes.map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background/70 backdrop-blur-sm border border-primary/15 font-body text-sm text-foreground leading-relaxed hover:border-primary/30 transition-all duration-300"
                >
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  {note}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subject-specific FAQs */}
      {faqs.length > 0 && (
        <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(34 45% 94%), hsl(38 50% 92%))" }}>
          <div className="container-narrow max-w-4xl">
            <div className="text-center mb-8">
              <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 block">Common Questions</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title} Setup FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl bg-background/80 border border-border p-4 sm:p-5">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display text-base sm:text-lg font-semibold text-foreground">
                    {faq.question}
                    <span className="text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mt-3 pr-6">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-secondary">
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-warm)" }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-8" style={{ background: "hsl(32 80% 50%)", filter: "blur(120px)" }} />
        <div className="container-narrow text-center relative">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold font-body text-lg hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-secondary-foreground/20 text-secondary-foreground font-semibold font-body text-lg hover:bg-secondary-foreground/5 transition-all duration-200 active:scale-[0.98]"
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
