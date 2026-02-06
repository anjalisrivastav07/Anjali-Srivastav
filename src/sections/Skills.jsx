import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <li>HTML5, CSS3, JavaScript, PHP</li>
        <li>Responsive & Performance-Optimized Web Design</li>
        <li>SEO, Technical SEO, Keyword Research</li>
        <li>Google Analytics & Search Console</li>
      </motion.ul>
    </section>
  );
}
