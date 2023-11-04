import { animate, motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
export default function Services() {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      // animate={ isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Focuse on Reading <br /> New Tech Stack.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people image" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Stack
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> <motion.b whileHover={{color:"orange"}}>Tech Requirements</motion.b>
          </h1>
          <button>What I did ?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            this is the introduction of Full Stack Developer. this is the
            introduction of Full Stack Developer.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            this is the introduction of Full Stack Developer. this is the
            introduction of Full Stack Developer.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            this is the introduction of Full Stack Developer. this is the
            introduction of Full Stack Developer.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            this is the introduction of Full Stack Developer. this is the
            introduction of Full Stack Developer.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
