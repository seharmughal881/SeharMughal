import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingHireButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past 50% of the page
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToContact}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center group"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform">
        Hire
      </span>
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default FloatingHireButton;
