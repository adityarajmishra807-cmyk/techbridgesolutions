import LabPageLayout from "@/components/LabPageLayout";
import labIntro from "@/assets/lab-intro.png";
import physicsImg from "@/assets/physics-lab-setup.png";

const CompositeLab = () => (
  <LabPageLayout
    title="Composite Lab"
    subtitle="Multi-Disciplinary Science"
    description="Composite science lab setup for schools combining physics, chemistry and biology equipment in one shared learning space, with apparatus, glassware, models, storage and safety essentials."
    h1Title="Composite Science Lab Setup for Schools"
    planningTitle="Balance Shared Equipment Across Science Subjects"
    planningDescription="A composite science lab brings multiple subject activities into one room. Plan the shared inventory so physics, chemistry and biology equipment is accessible, safely stored and available when classes rotate through practical sessions."
    planningChecks={[
      "Map the physics, chemistry and biology practical activities that will use the shared room.",
      "Separate common equipment from subject-specific apparatus, glassware and materials.",
      "Plan storage, labels and access so different classes can move between activities safely.",
      "Check water, power, ventilation, fire-safety and first-aid arrangements against the experiments planned.",
    ]}
    faqs={[
      { question: "What is a composite science laboratory?", answer: "A composite science lab is a shared learning space that organises equipment for more than one science subject, such as physics, chemistry and biology, within one room." },
      { question: "What equipment is included in a composite science lab?", answer: "The page inventory groups examples under general infrastructure, physics equipment, chemistry glassware and chemicals, biology instruments, and models and safety materials." },
      { question: "How should a school plan quantities for a shared composite lab?", answer: "Use the class timetable and practical programme to estimate how many groups will use each item at the same time. Keep common equipment and subject-specific materials clearly inventoried and stored." },
    ]}
    heroImage={physicsImg}
    secondaryImage={labIntro}
    color="hsl(280, 50%, 50%)"
    features={[
      "Shared learning space for physics, chemistry and biology activities",
      "Combined inventory of apparatus, glassware, models and charts",
      "Storage planned to keep equipment organised by subject and activity",
      "Room utilities and ventilation checked against the planned experiments",
      "First-aid provisions and appropriate laboratory safety equipment",
      "Useful where a school needs to organise several science activities in one room",
    ]}
    equipment={[
      {
        category: "General Infrastructure",
        items: [
          "Lab tables with reagent racks", "Lab stools", "Sinks with water supply",
          "Gas burners / spirit lamps", "Exhaust fan / ventilation", "Fire extinguisher",
          "First-aid box", "Chemical & specimen storage cabinets",
        ],
      },
      {
        category: "Physics Equipment",
        items: [
          "Vernier caliper, screw gauge, metre scale",
          "Spring balance, beam balance, weights box",
          "Glass prism, lenses, mirrors", "Optical bench (junior)",
          "Magnets, compass, wires, resistors",
          "Rheostat, galvanometer, ammeter, voltmeter",
        ],
      },
      {
        category: "Chemistry Glassware",
        items: [
          "Test tubes, beakers, conical flasks", "Volumetric flasks, burettes, pipettes",
          "Measuring cylinders, watch glasses", "Funnels, glass rods, reagent bottles",
          "Evaporating dishes, crucibles",
        ],
      },
      {
        category: "Chemistry Chemicals",
        items: [
          "Acids (HCl, H₂SO₄, HNO₃ – diluted)", "Bases (NaOH, KOH)",
          "Salts for qualitative analysis", "Indicators (phenolphthalein, methyl orange, litmus)",
          "Distilled water", "pH paper/kit",
        ],
      },
      {
        category: "Biology Instruments",
        items: [
          "Compound & simple microscope", "Slides & cover slips",
          "Scalpel, scissors, forceps", "Petri dishes, specimen jars",
          "Stains (safranin, methylene blue)", "Permanent prepared slides",
        ],
      },
      {
        category: "Models & Safety",
        items: [
          "Human organ models (heart, lungs, digestive)", "Plant/animal cell models",
          "Life cycle charts", "Lab coats, gloves, masks, goggles",
          "Logbooks & observation notebooks",
        ],
      },
    ]}
    safetyNotes={[
      "Proper ventilation, water supply, gas supply, and first-aid arrangements",
      "Chemical storage in ventilated cabinets with proper labeling",
      "Bio-waste disposal following ethical norms",
      "Lab coats, gloves, masks, and goggles mandatory",
    ]}
  />
);

export default CompositeLab;
