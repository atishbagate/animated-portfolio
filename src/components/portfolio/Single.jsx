import { motion,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Portfolio.scss"

export default function Single({props}) {
    console.info("portfolio cards PROPS..",JSON.stringify(props));
 
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:["start start","end start"]
      });
      const y = useTransform(scrollYProgress,[0,1],[-100,100]);
    return (
    <section>
        <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={props.img} alt="Image" />
            </div>
            <motion.div className="textContainer" style={{y}} >
                <h2 >{props.title}</h2>
                <p>{props.desc}</p>
                <button>More...</button>
            </motion.div>
            
            </div>
        </div>
    </section>
  )
}
