import { motion } from "framer-motion";

export default function MotionY({ delay, cls, children }) {
  return (
    <motion.div
      className={cls}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          delay: delay,
          bounce: 0.5,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: -150 }}
    >
      {children}
    </motion.div>
  );
}
