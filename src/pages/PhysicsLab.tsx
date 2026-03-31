import LabPageLayout from "@/components/LabPageLayout";
import physicsImg from "@/assets/physics-lab-setup.png";
import labIntro from "@/assets/lab-intro.png";

const PhysicsLab = () => (
  <LabPageLayout
    title="Physics Lab"
    subtitle="Science Infrastructure"
    description="Complete physics lab setups with optical benches, meters, electrical equipment, demonstration tables, and storage for 40+ students. Designed as per CBSE safety and infrastructure norms."
    heroImage={physicsImg}
    secondaryImage={labIntro}
    color="hsl(220, 70%, 50%)"
    features={[
      "Minimum lab room size: ≈600 sq.ft (9m × 6m)",
      "Demonstration table with sink & tap; 8 sinks recommended",
      "Storage (lockable cupboards) for consumables & non-consumables",
      "Gas/heating: preferably piped gas (2 burners) + one heater for heat experiments",
      "Fire extinguisher(s) at prominent places",
      "Exhaust fans (2), 2 first aid kits, waste-segregation bins",
      "Display boards: Do's & Don'ts, lab timetable, emergency contacts",
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
