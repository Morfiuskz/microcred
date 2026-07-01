import { motion, useReducedMotion } from "framer-motion";

export function Firefly() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="absolute right-[19%] top-[21%] hidden h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_22px_9px_rgba(245,184,46,0.48)] md:block"
      animate={
        reduceMotion
          ? undefined
          : {
              x: [0, 8, -4, 5, 0],
              y: [0, -10, 3, -5, 0],
              opacity: [0.65, 1, 0.74, 0.9, 0.65],
            }
      }
      whileHover={{ x: 44, y: -28, opacity: 0.2, scale: 0.82 }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

