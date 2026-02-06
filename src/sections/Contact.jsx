import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Email: anjalisrivastav7066@gmail.com <br />
        Phone: +91 7764947575 <br />
        Location: Siwan, Bihar, India
      </motion.p>
    </section>
  );
}
