import { motion } from "framer-motion";

export default function About() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am a Web Developer and Digital Marketing Specialist with 3+ years of
        experience creating responsive, SEO-optimized websites. I combine
        technical development skills with data-driven growth strategies to
        deliver measurable digital results.
      </motion.p>
    </section>
  );
}
