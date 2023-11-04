import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mouseMove", mouseMove);
    };
  }, []);
  console.log(position);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      className="cursor"
    ></motion.div>
  );
}
