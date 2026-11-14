import LabPageLayout from "@/components/LabPageLayout";
import bioImg from "@/assets/bio-lab-setup.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const BiologyLab = () => (
  <LabPageLayout
    title="Biology Lab"
    subtitle="Life Sciences"
    description="Biology lab equipment for schools, including microscopes, prepared slides, specimen jars, glassware, anatomical models, charts and practical safety essentials."
    h1Title="Biology Lab Setup for Schools"
    planningTitle="Plan Biology Lab Equipment for Observation and Practical Work"
    planningDescription="Biology laboratory requirements vary with the classes and practical activities being taught. Plan microscopes, slides, models, specimen materials, glassware and protective equipment together, while checking the school's policies for specimens and dissection."
    planningChecks={[
      "List microscopy, cell study, botany, anatomy and other practical activities for the relevant classes.",
      "Choose microscope quantities and magnification needs according to the number of student groups.",
      "Plan slide, specimen and model storage, including labels and handling instructions.",
      "Check school policies for preserved specimens, dissection activities, protective equipment and bio-waste disposal.",
    ]}
    faqs={[
      { question: "What equipment is commonly included in a school biology lab?", answer: "The listed categories include microscopes, prepared slides, glass slides and cover slips, specimen jars, dissection tools, botany apparatus, glassware, anatomical models and charts." },
      { question: "How many microscopes does a school biology lab need?", answer: "The quantity depends on the class size, practical timetable, group rotation and whether students work individually or in teams. Confirm the number after reviewing the school's practical plan." },
      { question: "What should schools consider when selecting specimens and dissection materials?", answer: "Check the school's current curriculum, institutional policies and applicable rules. Where suitable, models and prepared slides can support observation without requiring dissection." },
    ]}
    heroImage={bioImg}
    secondaryImage={labIntro2}
    color="hsl(140, 50%, 40%)"
    features={[
      "Compound and simple microscopes for observation activities",
      "Prepared slides, slide storage and specimen containers",
      "Dissection tools and protective equipment where permitted by school policy",
      "Preserved specimens, anatomical models and biology charts",
      "Botany apparatus and materials for plant-study activities",
      "Appropriate storage, ventilation and bio-waste arrangements",
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
