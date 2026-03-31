import LabPageLayout from "@/components/LabPageLayout";
import bioImg from "@/assets/bio-lab-setup.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const BiologyLab = () => (
  <LabPageLayout
    title="Biology Lab"
    subtitle="Life Sciences"
    description="Complete biology lab with microscopes, specimen jars, dissection kits, anatomical models, and all apparatus needed for Classes 9–12 as per CBSE guidelines."
    heroImage={bioImg}
    secondaryImage={labIntro2}
    color="hsl(140, 50%, 40%)"
    features={[
      "Compound and simple microscopes for detailed observation",
      "Complete dissection kits with safety equipment",
      "Preserved specimens and 3D anatomical models",
      "Botany apparatus for plant study",
      "Proper chemical storage for stains and reagents",
      "Ventilated and hygienic lab environment",
    ]}
    equipment={[
      {
        category: "Microscopy & Observation",
        items: [
          "Compound microscopes (multiple magnifications)", "Simple microscopes / hand lenses",
          "Prepared slides (animals, plants, tissues, cells)", "Glass slides and cover slips",
          "Slide boxes / slide trays", "Glass petri dishes", "Specimen jars with lids",
        ],
      },
      {
        category: "Dissection Tools",
        items: [
          "Dissecting trays with kits", "Scalpels, scissors, forceps, tweezers",
          "Probes, needles, dissecting pins", "Gloves, lab coats, aprons",
          "Pasteur pipettes / droppers",
        ],
      },
      {
        category: "Botany Apparatus",
        items: [
          "Herbarium shelf / preserved plant samples", "Fresh specimen trays",
          "Plant dissection kits", "Rulers / measuring scales",
          "Magnifying lenses for macro-observation",
        ],
      },
      {
        category: "Glassware",
        items: [
          "Beakers (various sizes)", "Test tubes + racks", "Measuring cylinders",
          "Droppers / pipettes", "Wash bottles", "Glass funnels and rods",
        ],
      },
      {
        category: "Models & Charts",
        items: [
          "Human heart, lungs, digestive system models",
          "Plant cell and animal cell models", "Human skeleton / torso",
          "Life cycle charts (frog, mosquito, butterfly)",
          "Wall charts (anatomy, plant structure, cell diagrams)",
        ],
      },
      {
        category: "Safety & Storage",
        items: [
          "Lab benches with sinks and running water",
          "Chemical storage cabinets with labeling",
          "Safety goggles, gloves, lab coats",
          "First-aid kit", "Exhaust / ventilation system",
          "Bio-waste disposal containers",
        ],
      },
    ]}
    safetyNotes={[
      "Specimen collection and dissection should follow ethical norms and institutional rules",
      "Prefer preserved specimens or models where possible for ethical considerations",
      "All chemicals, stains, and preservation fluids must be properly labeled and stored",
      "Provide gloves, lab-coats, goggles; ensure proper washing and disposal facilities",
      "Lab must have good ventilation/exhaust and waste disposal protocols",
    ]}
  />
);

export default BiologyLab;
