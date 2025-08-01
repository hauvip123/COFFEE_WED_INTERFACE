import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
const Navabr = ({ opent, setOpent }) => {
  return (
    <nav className="text-white pt-10 w-full left-0 top-0">
      <div className="container">
        <div className="flex gap-[1000px] items-center">
          {/* logo section */}
          <motion.h1
            initial={{ opacity: 0, y: 1100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.2,
            }}
            className="text-2xl font-medium uppercase"
          >
            <span className="text-primary"> Coders</span>Coffee.
          </motion.h1>
          {/* hambager Menu section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0.2,
            }}
            onClick={() => setOpent(!opent)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer " />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navabr;
