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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.a>
  );
};

export default WhatsAppFAB;
