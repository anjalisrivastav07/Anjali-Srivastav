import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <strong>Zeonzex LLP (2022–2025)</strong><br />
        Designed and deployed responsive business websites, executed SEO
        strategies to improve organic traffic, and mentored junior developers
        and marketers for high-quality project delivery.
      </motion.p>
    </section>
  );
}
