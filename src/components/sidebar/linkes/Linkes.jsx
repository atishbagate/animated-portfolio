import { motion } from "framer-motion";

export default function Linkes() {
  const items = ["Homepage", "Service", "Portfolio", "Contact", "About"];
  const variants = {
    open: {
      transtion: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transtion: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
