import { useRef } from "react";
import "./Portfolio.scss";
import { useScroll, motion, useSpring } from "framer-motion";
import Single from "./Single.jsx";
export default function Portfolio() {
  const items = [
    {
      id: 1,
      title: "React",
      img: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Description.",
    },
    {
      id: 2,
      title: "React",
      img: "https://images.pexels.com/photos/15372903/pexels-photo-15372903/free-photo-of-computer-setup-with-big-monitor-screen.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Description.",
    },
    {
      id: 3,
      title: "React",
      img: "https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.webp?b=1&s=612x612&w=0&k=20&c=ONfRBrp00hOvHvA1_gJxompbAZj9adJjShikxUK-UkI=",
      desc: "Description.",
    },
    {
      id: 4,
      title: "React",
      img: "https://images.pexels.com/photos/4065152/pexels-photo-4065152.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Description.",
    },
  ];
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single props={item} key={item.id} />
      ))}
    </div>
  );
}
