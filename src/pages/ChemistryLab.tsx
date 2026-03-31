import LabPageLayout from "@/components/LabPageLayout";
import chemImg from "@/assets/chemistry-lab-setup.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const ChemistryLab = () => (
  <LabPageLayout
    title="Chemistry Lab"
    subtitle="Science Infrastructure"
    description="A well-equipped Chemistry Laboratory essential for developing scientific aptitude and practical skills. Designed as per CBSE safety and infrastructure norms with durable equipment, proper ventilation, and safety tools."
    heroImage={chemImg}
    secondaryImage={labIntro2}
    color="hsl(150, 60%, 40%)"
    features={[
      "Durable equipment: balances, burners, stands, and heating devices",
      "Essential glassware: beakers, flasks, burettes, test tubes",
      "Proper ventilation and fume extraction systems",
      "Storage cabinets for safe chemical handling",
      "Fire extinguishers and first-aid kits",
      "Supports all mandatory experiments for Classes 9–12",
      "Secure environment for hands-on chemistry learning",
    ]}
    equipment={[
      {
        category: "Durable Apparatus",
        items: [
          "Reagent bottles (glass/plastic)", "Chemical balance", "Gas collection jars",
          "Blow pipe (iron)", "Delivery tubes (glass)", "Burette stand (wooden)",
          "Cork borer & presser (iron)", "Crucible tongs (iron)", "Distillation apparatus (complete)",
        ],
      },
      {
        category: "Heating & Support",
        items: [
          "Bunsen burners / spirit lamps", "Retort stand with rings and clamps",
          "Tripod stand (iron)", "Wire-gauze (iron)", "Sand-bath",
          "Spirit lamp (brass)", "Stove / Hot plate",
        ],
      },
      {
        category: "Glassware",
        items: [
          "Beakers (various sizes)", "Test tubes (various sizes)", "Boiling tubes",
          "Conical flasks", "Volumetric flasks", "Burettes", "Pipettes",
          "Measuring cylinders", "Watch glasses", "Funnels", "Glass rods",
        ],
      },
      {
        category: "Lab Tools",
        items: [
          "Test tube brush", "Test tube stand (wooden)", "Test-tube holder (iron)",
          "Funnel stand / filter stand", "Pestle and mortar", "Deflagrating spoon",
          "Drying cones (iron)", "Weight-box (wooden)",
        ],
      },
    ]}
    safetyNotes={[
      "All chemicals must be properly labeled and stored in ventilated cabinets",
      "Fire extinguisher (CO₂ type recommended) at accessible location",
      "Lab coats, gloves, and safety goggles mandatory during experiments",
      "Proper waste disposal protocols for chemical waste",
      "Adequate ventilation and exhaust systems required",
    ]}
  />
);

export default ChemistryLab;
