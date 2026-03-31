import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";
const EMAIL = "techbridgesolutions2k25@gmail.com";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding bg-secondary" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-4 block">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight mb-6">
              Ready to Transform Your <span className="text-gradient-warm">School?</span>
            </h2>
            <p className="font-body text-secondary-foreground/60 text-base md:text-lg leading-relaxed mb-8">
              Get a free consultation and custom quote for your institution. Our team will design the perfect solution tailored to your space, budget, and requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold font-body text-lg hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-secondary-foreground/20 text-secondary-foreground font-semibold font-body text-lg hover:bg-secondary-foreground/5 transition-colors"
              >
                <Mail className="w-6 h-6" />
                Email Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 88008 83727", href: "tel:+918800883727" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 88008 83727", href: WHATSAPP_URL },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Service Area", value: "Pan India Coverage", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-body font-medium text-secondary-foreground/40 uppercase tracking-wider">{item.label}</div>
                  <div className="font-body text-base font-medium text-secondary-foreground">{item.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
