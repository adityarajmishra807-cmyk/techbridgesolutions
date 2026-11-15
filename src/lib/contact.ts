const WHATSAPP_NUMBER = "918800883727";

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const getPageInquiryMessage = (pathname: string) => {
  const pageMessages: Record<string, string> = {
    "/labs/physics": "I am planning a Physics laboratory for my school. Please help me with equipment, quantities and a quotation.",
    "/labs/chemistry": "I am planning a Chemistry laboratory for my school. Please help me with equipment, safety provisions and a quotation.",
    "/labs/maths": "I am planning a Mathematics laboratory for my school. Please help me with equipment and a quotation.",
    "/labs/biology": "I am planning a Biology laboratory for my school. Please help me with equipment and a quotation.",
    "/labs/computer": "I am planning a computer laboratory for my school. Please help me with systems, networking and a quotation.",
    "/labs/composite": "I am planning a composite science laboratory for my school. Please help me with equipment and a quotation.",
    "/guides/school-laboratory-setup-checklist": "I have used your school laboratory setup checklist and would like help planning a lab and preparing a BOQ.",
    "/guides/school-computer-lab-setup": "I have read your school computer lab setup guide and would like help planning the lab and preparing a BOQ.",
    "/guides/science-lab-equipment-planning": "I have read your science lab equipment planning guide and would like help preparing a subject-wise BOQ and quotation.",
  };

  return pageMessages[pathname] ?? "I am enquiring about school laboratory setup and educational infrastructure. Please help me discuss my requirements and get a quotation.";
};
