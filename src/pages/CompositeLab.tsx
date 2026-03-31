import LabPageLayout from "@/components/LabPageLayout";
import labIntro from "@/assets/lab-intro.png";
import physicsImg from "@/assets/physics-lab-setup.png";

const CompositeLab = () => (
  <LabPageLayout
    title="Composite Lab"
    subtitle="Multi-Disciplinary Science"
    description="A Composite Science Laboratory supporting integrated learning of Physics, Chemistry, and Biology for Classes 6–10 as per CBSE standards. Ideal for schools with limited space while fulfilling all essential curricular requirements."
    heroImage={physicsImg}
    secondaryImage={labIntro}
    color="hsl(280, 50%, 50%)"
    features={[
      "Integrated Physics, Chemistry, and Biology in one lab",
      "Balanced mix of apparatus, glassware, models, and charts",
      "Structured for safety, easy storage, and smooth execution",
      "Proper ventilation, water supply, and gas supply",
      "First-aid arrangements and safety equipment",
      "Ideal for schools with limited space",
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
