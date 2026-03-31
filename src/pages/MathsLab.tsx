import LabPageLayout from "@/components/LabPageLayout";
import chemImg from "@/assets/chemistry-lab-setup.png";
import labIntro from "@/assets/lab-intro.png";

const MathsLab = () => (
  <LabPageLayout
    title="Maths Lab"
    subtitle="Interactive Learning"
    description="A Mathematics Laboratory dedicated to promoting experiential learning, logical reasoning, and problem-solving. Includes 3D models, geometry kits, algebra tools, and technology-supported learning materials as per CBSE guidelines."
    heroImage={chemImg}
    secondaryImage={labIntro}
    color="hsl(45, 80%, 50%)"
    features={[
      "Hands-on teaching aids and 3D geometric models",
      "Activity kits for geometry, algebra, trigonometry, and mensuration",
      "Technology-supported learning with calculators and digital tools",
      "Age-appropriate models and activity cards",
      "Interactive exploration of mathematical concepts",
      "Promotes visual and experiential mathematics learning",
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
