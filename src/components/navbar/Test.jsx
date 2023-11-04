import { motion } from "framer-motion";
import { useState } from "react";

export default function Test() {
    const [open,setOpen] = useState(false);

    const variants = {
        visible:{
            opacity:1,
            x:500,
            transition:{
                type:"spring",
                stiffness:100
            }
        },
        hidden:{
            opacity:0
        }
    }

  return (
    <div>
      <div className="course">
        <motion.div
          className="box"
          variants={variants}
          animate={open ? "visible":"hidden"}
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
      </div>
    </div>
  );
}
