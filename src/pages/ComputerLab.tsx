import LabPageLayout from "@/components/LabPageLayout";
import labIntro from "@/assets/lab-intro.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const ComputerLab = () => (
  <LabPageLayout
    title="Computer Lab"
    subtitle="Digital Infrastructure"
    description="Modern computer labs with networking, UPS systems, ergonomic furniture, and licensed software. Complete digital learning environments as per CBSE ICT curriculum requirements."
    heroImage={labIntro}
    secondaryImage={labIntro2}
    color="hsl(200, 70%, 50%)"
    features={[
      "15–40 desktop computers depending on class strength",
      "Complete networking with Wi-Fi and LAN infrastructure",
      "UPS and power backup systems for uninterrupted learning",
      "Licensed operating systems and educational software",
      "Ergonomic furniture with wire management",
      "CCTV monitoring and safety systems",
    ]}
    equipment={[
      {
        category: "Core Hardware",
        items: [
          "Desktop computers (15–40 units)", "Teacher / instructor computer",
          "LED monitors", "Keyboards (spill-resistant)", "Optical/wireless mouse",
          "Headphones / headsets", "Webcams",
        ],
      },
      {
        category: "Networking",
        items: [
          "Wi-Fi router / access point", "Network switches (24/48 port)",
          "LAN cables (CAT6/CAT7)", "Patch panels and cords",
          "Network racks / cable organizers", "Fiber broadband connection",
        ],
      },
      {
        category: "Power & Safety",
        items: [
          "UPS units (individual or centralized)", "Power backup / inverter",
          "Spike guards / surge protectors", "Stabilizer", "Proper earthing system",
          "Cable trunking / wire management", "Fire extinguisher (CO₂ type)",
        ],
      },
      {
        category: "Software",
        items: [
          "Licensed OS (Windows / Linux / ChromeOS)", "Antivirus / endpoint protection",
          "Office suite (MS Office / Google Workspace)", "Programming tools (Scratch, Python, Java, C++)",
          "Educational software (CBSE ICT curriculum)", "Multimedia software",
        ],
      },
      {
        category: "Peripherals",
        items: [
          "LaserJet printer", "Scanner", "Projector / smartboard",
          "Speakers", "External hard drive", "Card reader",
        ],
      },
      {
        category: "Furniture",
        items: [
          "Ergonomic computer tables", "Revolving / cushioned chairs",
          "Teacher desk + chair", "Server / printer table",
          "Whiteboard / display board", "Storage cupboards",
        ],
      },
    ]}
    safetyNotes={[
      "Adequate ventilation / exhaust fans / ACs for temperature control",
      "Fire extinguisher (CO₂ type) readily accessible",
      "Proper earthing system for all electrical equipment",
      "Regular maintenance and cleaning schedule",
      "CCTV cameras recommended for equipment monitoring",
    ]}
  />
);

export default ComputerLab;
