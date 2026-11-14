import LabPageLayout from "@/components/LabPageLayout";
import chemImg from "@/assets/chemistry-lab-setup.png";
import labIntro from "@/assets/lab-intro.png";

const MathsLab = () => (
  <LabPageLayout
    title="Maths Lab"
    subtitle="Interactive Learning"
    description="Maths lab equipment for schools, including 3D geometry models, manipulatives, algebra and number-system kits, mensuration tools, trigonometry models and logic activities."
    h1Title="Maths Lab Setup for Schools"
    planningTitle="Choose Maths Lab Materials by Concept and Class Level"
    planningDescription="A maths laboratory is most useful when its models and manipulatives connect to the concepts students are learning. Group the equipment by class level and topic, then plan enough shared sets for the activities and student groups."
    planningChecks={[
      "Map geometry, number systems, algebra, mensuration, trigonometry, statistics and logic activities.",
      "Select models and manipulatives for the age and class levels using the laboratory.",
      "Estimate set quantities from the number of student groups working at once.",
      "Organise small models, boards and kits so teachers can store and retrieve them easily.",
    ]}
    faqs={[
      { question: "What equipment is commonly used in a school maths lab?", answer: "The inventory on this page includes 2D and 3D geometry models, geoboards, algebra kits, abacus and base-ten materials, mensuration tools, trigonometry models, graph kits and logic puzzles." },
      { question: "How can a school choose maths lab kits for different classes?", answer: "Start with the topics and activities taught at each level. Select manipulatives that help students represent those concepts and plan quantities for the group size and classroom rotation." },
      { question: "Does a maths laboratory need computers?", answer: "Not every activity requires a computer. Start with the physical models and manipulatives needed for the school's maths activities, then add calculators or digital tools where they support the teaching plan." },
    ]}
    heroImage={chemImg}
    secondaryImage={labIntro}
    color="hsl(45, 80%, 50%)"
    features={[
      "Hands-on teaching aids and three-dimensional geometric models",
      "Activity materials for geometry, algebra, trigonometry and mensuration",
      "Calculators and digital learning tools where required",
      "Models and activity cards selected for the classes being taught",
      "Visual exploration of mathematical concepts and relationships",
      "Practical resources for reasoning, patterns and problem-solving activities",
    ]}
    equipment={[
      {
        category: "Geometry & Shapes",
        items: [
          "2D geometric shape cut-outs (triangles, squares, polygons)",
          "3D models (sphere, cylinder, cube, cone, cuboid, pyramid, prism)",
          "Geometric solids with removable nets", "Geoboards", "Geometry box sets",
          "Symmetry mirrors and reflection tools", "Coordinate geometry boards",
        ],
      },
      {
        category: "Algebra & Number System",
        items: [
          "Algebraic identity kits", "Polynomial kits", "Factorization and expansion tiles",
          "Number line models", "Integer kit (positive–negative counters)",
          "Abacus (junior and senior)", "Base-10 block set (place value kit)",
        ],
      },
      {
        category: "Mensuration & Measurement",
        items: [
          "Measuring tapes", "Rulers and scale sets", "Vernier calipers",
          "Measuring cylinders and containers", "Area and perimeter activity boards",
          "Fractional parts and fraction circles",
        ],
      },
      {
        category: "Trigonometry",
        items: [
          "Trigonometric circle model", "Height & distance demonstration model",
          "Sine/cosine curve model", "Protractors and clinometers",
        ],
      },
      {
        category: "Statistics & Data",
        items: [
          "Graph boards", "Bar graph and pie chart kits",
          "Probability tools (dice, spinners, coins, cards)",
        ],
      },
      {
        category: "Puzzles & Logic",
        items: [
          "Tangram sets", "Sudoku boards", "Pattern blocks",
          "Logical reasoning puzzles", "Magic squares", "Counting beads / Colour cubes",
        ],
      },
    ]}
  />
);

export default MathsLab;
