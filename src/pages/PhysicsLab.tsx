import LabPageLayout from "@/components/LabPageLayout";
import physicsImg from "@/assets/physics-lab-setup.png";
import labIntro from "@/assets/lab-intro.png";

const PhysicsLab = () => (
  <LabPageLayout
    title="Physics Lab"
    subtitle="Science Infrastructure"
    description="Physics lab setup for schools with optical benches, measurement instruments, electrical apparatus, demonstration equipment and storage for practical work."
    h1Title="Physics Lab Setup for Schools"
    planningTitle="Plan a Physics Lab Around the Practical Programme"
    planningDescription="A useful physics laboratory is planned around the experiments students perform, the number of groups using equipment and the utilities available in the room. Review the equipment list against the school's current practical syllabus before finalising quantities."
    planningChecks={[
      "List the mechanics, optics, electricity, heat and sound practicals required for the relevant classes.",
      "Choose instrument ranges and apparatus quantities based on student groups, timetable and existing stock.",
      "Plan demonstration space, work benches, electrical access and secure equipment storage.",
      "Check ventilation, fire-safety provisions and first-aid access before the room is put into use.",
    ]}
    faqs={[
      { question: "What equipment is commonly included in a school physics lab?", answer: "The inventory on this page groups examples across electrical measurement, optics and mechanics, waves and sound, general equipment, advanced apparatus, tools and consumables." },
      { question: "How should a school decide the quantity of physics apparatus?", answer: "Start with the practicals to be conducted, the number of students working at the same time, the way groups rotate through experiments and the apparatus already available." },
      { question: "What should be checked before finalising a physics laboratory setup?", answer: "Review the current class-wise practical syllabus, room layout, bench and demonstration space, electrical and heating needs, storage, ventilation and applicable school safety procedures." },
    ]}
    heroImage={physicsImg}
    secondaryImage={labIntro}
    color="hsl(220, 70%, 50%)"
    features={[
      "Room layout planned around practical benches, demonstration space, circulation and storage",
      "Demonstration table and wash-water access considered against room requirements",
      "Lockable storage for apparatus and consumables",
      "Heating arrangements selected for the experiments and site safety requirements",
      "Fire-safety equipment and clearly displayed emergency instructions",
      "Ventilation, first-aid access and waste segregation planned around the room",
      "Display boards for laboratory rules, timetable and emergency contacts",
    ]}
    equipment={[
      {
        category: "Electrical & Measurement",
        items: [
          "Ammeters (different ranges) — 10", "Battery eliminator — 10", "Galvanometer — 10",
          "Voltmeters (different ranges) — 20", "Multimeter digital — 4", "Multimeter manual — 4",
          "Rheostat — 10", "Resistance box (multiple ranges) — 5 each", "Potentiometer — 8",
        ],
      },
      {
        category: "Optics & Mechanics",
        items: [
          "Optical bench (1m long) — 10", "Prism (Indian glass) — 30", "Concave/Convex mirror — 10 each",
          "Convex/Concave lens — 10 each", "Glass slab — 30", "Spherometer — 30",
          "Vernier calipers — 20", "Screw gauge — 20", "Pendulum box — 20",
        ],
      },
      {
        category: "Wave & Sound",
        items: [
          "Sonometer — 8", "Resonance apparatus — 8",
          "Tuning forks (250Hz, 480Hz, 512Hz) — 5 each",
          "Helical spring apparatus with weights — 8",
        ],
      },
      {
        category: "General Equipment",
        items: [
          "Meter bridge — 8", "Daniell cell — 8", "Drawing board — 30", "Friction apparatus — 8",
          "Parallelogram apparatus — 10", "Key (one-way) — 20", "Two-way key — 8",
          "Stopwatches — 8", "Thermometers — 10", "Spring balance — 10",
        ],
      },
      {
        category: "Advanced Apparatus",
        items: [
          "P-N junction diode setup — 4", "Boyle's law apparatus — 2",
          "Young's modulus apparatus — 2", "Spectrometer — 2",
          "Newton's disc — 2", "Telescope — 2", "Gold leaf electroscope — 2",
        ],
      },
      {
        category: "Tools & Consumables",
        items: [
          "Connecting wires ~1kg", "Soldering iron — 4", "Plier, Cutter, Screwdriver — 5 each",
          "Insulated copper wire ~500g", "Charts for display — 20",
          "Beakers — 10", "Cork rubber — 20",
        ],
      },
    ]}
    safetyNotes={[
      "Fire extinguisher(s) must be placed at prominent locations",
      "Exhaust fans ensure proper ventilation during experiments",
      "First aid kits (2) readily accessible at all times",
      "Waste-segregation bins (bio / non-bio) with safe disposal for flammable chemicals",
      "Display boards with Do's & Don'ts, lab timetable, emergency contacts",
    ]}
  />
);

export default PhysicsLab;
