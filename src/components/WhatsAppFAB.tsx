import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918800883727?text=Hi%20TechBridge%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.";

const WhatsAppFAB = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};

export default WhatsAppFAB;
