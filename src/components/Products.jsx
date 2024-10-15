import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate through real-world implementation.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative Al to allow users to engage with our thinking about Ai, industry trends and design easily.",
      live: true,
      case: true,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all espects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with the leading financing solutions provider of UAE- Silvr to audit, refine and evolve their brand in the era of AI.",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);
  const mover = (val) => {
    setPosition(val * 18);
  };

  return (
    <div className="mb-28 relative bg-slate-800">
      {products.map((elem, index) => {
        return <Product key={index} data={elem} mover={mover} count={index} />;
      })}
      <div className="card-wrapper absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute left-[43%] -translate-x-[50%] w-[25vw] h-72 bg-slate-500 rounded-lg overflow-hidden"
        >
          <motion.div
            animate={{ y: position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-zinc-200"
          ></motion.div>
          <motion.div
            animate={{ y: position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-zinc-300"
          ></motion.div>
          <motion.div
            animate={{ y: position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-blue-400"
          ></motion.div>
          <motion.div
            animate={{ y: position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="w-full h-full bg-red-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
