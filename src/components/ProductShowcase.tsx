import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import labSetup from "@/assets/lab-setup.png";
import physicsLab from "@/assets/physics-lab.png";
import kindergarten from "@/assets/kindergarten.jpg";
import library from "@/assets/library.jpg";
import sportsImg from "@/assets/sports-court.jpg";
import solarImg from "@/assets/solar.jpg";
import sportsImg1 from "@/assets/sports-court-1.jpg";
import sportsImg2 from "@/assets/sports-court-2.jpg";
import furnitureImg from "@/assets/furniture.png";
import labIntroImg from "@/assets/lab-intro.png";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

const products = [
  { image: labSetup, title: "Lab Table Units", desc: "Heavy-duty powder-coated steel frame with chemical-resistant laminated tops.", category: "Lab Infrastructure" },
  { image: physicsLab, title: "Physics Lab Setup", desc: "Complete setup with optical benches, meters, electrical equipment for 40+ students.", category: "Science Labs" },
  { image: kindergarten, title: "Kindergarten Playroom", desc: "Safe, colorful play areas with age-appropriate furniture and educational toys.", category: "Early Education" },
  { image: library, title: "Library Solutions", desc: "Full library setups with bookshelves, reading tables, and organized cataloguing.", category: "Learning Spaces" },
  { image: sportsImg, title: "Sports Courts", desc: "Professional indoor and outdoor courts for basketball, badminton, volleyball.", category: "Sports" },
  { image: solarImg, title: "Solar Power Plants", desc: "Rooftop solar installations helping schools reduce energy costs.", category: "Green Energy" },
  { image: sportsImg1, title: "Indoor Courts", desc: "High-quality indoor surfaces for year-round multi-sport training.", category: "Sports" },
  { image: sportsImg2, title: "Outdoor Courts", desc: "Durable weather-resistant outdoor court installations.", category: "Sports" },
  { image: furnitureImg, title: "School Furniture", desc: "Ergonomic benches, desks, chairs and almirahs for comfort and durability.", category: "Furniture" },
  { image: labIntroImg, title: "Teacher Demo Table", desc: "6×3 ft tabletop for demonstrations with built-in drawers and power access.", category: "Lab Infrastructure" },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="products" className="section-padding relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(180deg, hsl(38 50% 92%), hsl(34 45% 94%))" }}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 sm:mb-4 block">Product Showcase</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
            Crafted for <span className="text-gradient-warm">Excellence</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg">
            Every product is designed with safety, durability and aesthetics in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <motion.a
              key={product.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-premium)] transition-all duration-400 active:scale-[0.98]"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="px-2.5 py-1 sm:px-3 rounded-full bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs font-body font-medium text-foreground">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{product.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-body font-medium text-primary">
                  Enquire Now
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
