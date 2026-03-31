import { useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import labSetup from "@/assets/lab-setup.png";
import physicsLab from "@/assets/physics-lab.png";
import physicsLabSetup from "@/assets/physics-lab-setup.png";
import chemistryLab from "@/assets/chemistry-lab.png";
import chemistryLabSetup from "@/assets/chemistry-lab-setup.png";
import bioLabSetup from "@/assets/bio-lab-setup.png";
import classroom from "@/assets/classroom.png";
import kindergarten from "@/assets/kindergarten.jpg";
import library from "@/assets/library.jpg";
import sportsCourtImg from "@/assets/sports-court.jpg";
import sportsCourt1 from "@/assets/sports-court-1.jpg";
import sportsCourt2 from "@/assets/sports-court-2.jpg";
import sportsCourt3 from "@/assets/sports-court-3.jpg";
import sportsCourt4 from "@/assets/sports-court-4.jpg";
import solarImg from "@/assets/solar.jpg";
import furnitureImg from "@/assets/furniture.png";
import labIntro from "@/assets/lab-intro.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const galleryItems = [
  { src: labSetup, title: "Lab Table Units", category: "Lab Infrastructure" },
  { src: physicsLab, title: "Physics Lab", category: "Science Labs" },
  { src: physicsLabSetup, title: "Physics Lab Setup", category: "Science Labs" },
  { src: chemistryLab, title: "Chemistry Lab", category: "Science Labs" },
  { src: chemistryLabSetup, title: "Chemistry Lab Setup", category: "Science Labs" },
  { src: bioLabSetup, title: "Biology Lab Setup", category: "Science Labs" },
  { src: classroom, title: "Smart Classroom", category: "Classrooms" },
  { src: kindergarten, title: "Kindergarten Playroom", category: "Early Education" },
  { src: library, title: "Library Setup", category: "Learning Spaces" },
  { src: sportsCourtImg, title: "Sports Court", category: "Sports" },
  { src: sportsCourt1, title: "Indoor Court", category: "Sports" },
  { src: sportsCourt2, title: "Outdoor Court", category: "Sports" },
  { src: sportsCourt3, title: "Multi-Sport Court", category: "Sports" },
  { src: sportsCourt4, title: "Court Equipment", category: "Sports" },
  { src: solarImg, title: "Solar Power Plant", category: "Green Energy" },
  { src: furnitureImg, title: "School Furniture", category: "Furniture" },
  { src: labIntro, title: "Lab Infrastructure", category: "Lab Infrastructure" },
  { src: labIntro2, title: "Teacher Demo Table", category: "Lab Infrastructure" },
];

const categories = ["All", ...Array.from(new Set(galleryItems.map((i) => i.category)))];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % filtered.length : null);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);
  }, [filtered.length]);

  // Touch swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? goNext() : goPrev(); }
  };

  return (
    <>
      <section id="gallery" className="section-padding relative overflow-hidden" ref={ref} style={{ background: "linear-gradient(180deg, hsl(220 22% 12%), hsl(220 18% 18%))" }}>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10" style={{ background: "hsl(32 80% 50%)", filter: "blur(100px)" }} />
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            <span className="text-xs font-body font-semibold tracking-widest uppercase text-primary mb-3 sm:mb-4 block">Gallery</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground leading-tight mb-3 sm:mb-4">
              Our <span className="text-gradient-warm">Installations</span>
            </h2>
            <p className="font-body text-secondary-foreground/60 text-sm sm:text-base md:text-lg">
              A showcase of completed school infrastructure projects across India.
            </p>
          </motion.div>

          {/* Filter tabs - scrollable on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs font-body font-medium transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95 ${
                activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "bg-secondary-foreground/10 border border-secondary-foreground/15 text-secondary-foreground/70 hover:border-primary/30 hover:text-secondary-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer active:scale-[0.97] transition-transform"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors duration-300 flex items-end p-2 sm:p-4">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] sm:text-xs font-body text-primary mb-0.5 block">{item.category}</span>
                      <span className="font-display text-xs sm:text-sm font-semibold text-secondary-foreground">{item.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox with swipe */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 sm:left-8 w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 sm:right-8 w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-[92vw] sm:max-w-[90vw] max-h-[85vh] flex flex-col items-center px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-w-full max-h-[70vh] sm:max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-3 sm:mt-4 text-center">
                <span className="text-xs font-body text-primary">{filtered[lightboxIndex].category}</span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-secondary-foreground">{filtered[lightboxIndex].title}</h3>
                <span className="text-xs font-body text-secondary-foreground/40 mt-1 block">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
