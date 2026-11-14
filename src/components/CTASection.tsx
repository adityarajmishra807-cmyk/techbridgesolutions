import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";
const EMAIL = "techbridgesolutions2k25@gmail.com";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 sm:mb-4 block">Get In Touch</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight mb-4 sm:mb-6">
              Ready to Transform Your <span className="text-gradient-warm">School?</span>
            </h2>
            <p className="font-body text-secondary-foreground/60 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Get a free consultation and custom quote for your institution. Our team will design the perfect solution tailored to your space, budget, and requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold font-body text-sm sm:text-lg hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-secondary-foreground/20 text-secondary-foreground font-semibold font-body text-sm sm:text-lg hover:bg-secondary-foreground/5 transition-all duration-200 active:scale-[0.98]"
              >
                <Mail className="w-5 sm:w-6 h-5 sm:h-6" />
                Email Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 88008 83727", href: "tel:+918800883727" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 88008 83727", href: WHATSAPP_URL },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Service Area", value: "UP • Bihar • Delhi • Uttarakhand", href: "#" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 hover:bg-secondary-foreground/8 transition-all duration-200 group active:scale-[0.98]"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:shadow-[var(--shadow-glow)] transition-shadow duration-300">
                  <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-body font-medium text-secondary-foreground/40 uppercase tracking-wider">{item.label}</div>
                  <div className="font-body text-sm sm:text-base font-medium text-secondary-foreground truncate">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
