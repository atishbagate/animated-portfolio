import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Linkes from "./linkes/Linkes";
import { useState } from "react";
import {motion} from "framer-motion";
export default function Sidebar() {
    const [open,setOpen] = useState(false);

    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            Transition:{ 
                type:"spring",
                stiffness:200, 
            },
        },
        closed: {
            clipPath:"circle(30px at 50px 50px)",
            Transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    }
  return (
    <motion.div className="sidebar"
        animate={open ? "open":"closed"}
    >
        <motion.div className="bg" variants={variants}>
         <Linkes />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}
