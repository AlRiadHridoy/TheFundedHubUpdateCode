import { motion } from "framer-motion";

export default function MotionX({ delay, children }) {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: -150 }}
    >
      {children}
    </motion.div>
  );
}
