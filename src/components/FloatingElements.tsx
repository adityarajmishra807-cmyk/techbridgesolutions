import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full opacity-[0.03]"
        style={{ background: "hsl(var(--primary))", filter: "blur(80px)", top: "10%", right: "5%" }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full opacity-[0.04]"
        style={{ background: "hsl(var(--primary))", filter: "blur(100px)", bottom: "20%", left: "-5%" }}
        animate={{ y: [0, 30, 0], x: [0, -15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-40 sm:w-48 h-40 sm:h-48 rounded-full opacity-[0.02] hidden sm:block"
        style={{ background: "hsl(var(--accent-foreground))", filter: "blur(60px)", top: "50%", left: "40%" }}
        animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default FloatingElements;
