import LabPageLayout from "@/components/LabPageLayout";
import chemImg from "@/assets/chemistry-lab-setup.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const ChemistryLab = () => (
  <LabPageLayout
    title="Chemistry Lab"
    subtitle="Science Infrastructure"
    description="Chemistry lab equipment for schools, including balances, heating apparatus, stands, glassware, reagent storage and safety essentials for practical work."
    h1Title="Chemistry Lab Setup for Schools"
    planningTitle="Plan Chemistry Equipment, Storage and Safety Together"
    planningDescription="Chemistry laboratory planning needs to consider the practical programme as well as glassware, heating equipment, reagent storage, ventilation and waste handling. Match the equipment list to the school's current experiments and the room's facilities."
    planningChecks={[
      "Map the glassware, measuring equipment and apparatus required for each practical.",
      "Plan chemical storage, clear labels, segregation and access controls with the school's safety procedures.",
      "Check ventilation and extraction needs against the substances and experiments being used.",
      "Include appropriate protective equipment, first-aid access and waste-disposal arrangements.",
    ]}
    faqs={[
      { question: "What equipment is listed for a school chemistry lab?", answer: "The page inventory includes balances and durable apparatus, heating and support equipment, common laboratory glassware, and tools such as test-tube stands, brushes, funnels and pestles." },
      { question: "How should schools plan chemistry glassware quantities?", answer: "Use the class-wise practical list, student group size and experiment timetable. Check existing usable glassware before deciding what needs to be added or replaced." },
      { question: "What safety points matter when planning a chemistry laboratory?", answer: "Review chemical labelling and storage, ventilation, protective equipment, fire-safety provisions, first-aid access and disposal procedures with the school's designated safety staff." },
    ]}
    heroImage={chemImg}
    secondaryImage={labIntro2}
    color="hsl(150, 60%, 40%)"
    features={[
      "Balances, burners, stands and heating apparatus for school practicals",
      "Glassware including beakers, flasks, burettes and test tubes",
      "Ventilation and extraction planned for intended experiments and room layout",
      "Storage arranged for labelled chemicals and laboratory materials",
      "Fire-safety and first-aid provisions",
      "Apparatus and reagent quantities reviewed against the school's current practical programme",
      "Clear work areas for supervised chemistry activities",
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
