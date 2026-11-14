import LabPageLayout from "@/components/LabPageLayout";
import labIntro from "@/assets/lab-intro.png";
import labIntro2 from "@/assets/lab-intro-2.png";

const ComputerLab = () => (
  <LabPageLayout
    title="Computer Lab"
    subtitle="Digital Infrastructure"
    description="Computer lab setup for schools with workstations, networking, UPS and power backup, peripherals, software and computer furniture. Configure the lab to class strength and available space."
    h1Title="Computer Lab Setup for Schools"
    planningTitle="Plan a School Computer Lab Around Users, Power and Connectivity"
    planningDescription="A computer lab should be configured around how students will use the machines, the number of simultaneous users and the room's power and network capacity. Decide the workstation model before finalising hardware, furniture and backup requirements."
    planningChecks={[
      "Decide whether students work one-to-one or share workstations, then estimate the required machine count.",
      "Match computer specifications and software to the classes, subjects and applications being taught.",
      "Plan LAN or Wi-Fi coverage, network equipment, power points, earthing and UPS capacity.",
      "Check desk spacing, seating, cable routing, ventilation, security and future maintenance access.",
    ]}
    faqs={[
      { question: "What is included in a school computer lab setup?", answer: "The listed categories include student and teacher computers, monitors and peripherals, networking equipment, power backup, software, printers or display devices, and computer furniture." },
      { question: "Should a school provide one computer per student?", answer: "That depends on the teaching model, student strength, timetable and available budget. Decide whether machines are shared or individually assigned before calculating hardware and furniture quantities." },
      { question: "What should be planned before buying computers for a school lab?", answer: "Confirm the subjects and software to be used, number of simultaneous users, network requirements, electrical capacity, UPS needs, furniture layout, ventilation and support arrangements." },
    ]}
    heroImage={labIntro}
    secondaryImage={labIntro2}
    color="hsl(200, 70%, 50%)"
    features={[
      "Workstation quantity based on class strength and the student sharing model",
      "Network planning for Wi-Fi, LAN access and required connectivity",
      "UPS and power-backup options sized for the planned equipment",
      "Operating systems and educational software selected with appropriate licences",
      "Computer furniture, cable management and suitable workstation spacing",
      "Room ventilation, equipment security and maintenance access",
    ]}
    equipment={[
      {
        category: "Core Hardware",
        items: [
          "Desktop computers (quantity based on class strength)", "Teacher / instructor computer",
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
          "Educational software aligned with the school's curriculum", "Multimedia software",
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
