import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Anjali Srivastav
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Web Developer & Digital Marketing Specialist
      </motion.p>
    </section>
  );
}
