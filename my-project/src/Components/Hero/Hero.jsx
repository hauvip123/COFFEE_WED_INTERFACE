import React from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeImage from "../../assets/black.png";
import Navabr from "../Navbar/Navabr";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [opent, setOpent] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full relative z-0">
        <div className="container">
          {/* Navbar section */}
          <Navabr opent={opent} setOpent={setOpent} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center ">
            {/* text section */}
            <div className="text-lightOrange space-y-28 mt-[100px] md:mb-[100px] px-4">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: 1,
                }}
                className=" text-7xl font-bold ml-14 leading-tight "
              >
                Blvck Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: 1,
                }}
                className="relative"
              >
                <div className="space-y-4 relative z-10">
                  <h1 className="text-2xl font-medium">
                    Black Lifestyle Lovevrs,
                  </h1>
                  <h1 className="text-sm opacity-50 leading-tight">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis ipsam alias velit eaque suscipit quisquam
                    explicabo ratione, quas obcaecati provident beatae,
                    voluptatem iure rerum. Molestiae, sed? Ipsum magnam
                    perferendis quisquam.
                  </h1>
                </div>
                <div className="h-[180px] w-[220px] bg-gray-700/25 absolute -left-10 -top-6"></div>
              </motion.div>
            </div>

            {/* Hero Image section */}
            <div className="relative -top-[30px]">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: 0.4,
                }}
                src={CoffeeImage}
                className="h-[400px] md:h-[700px] relative z-50 img-shadow"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: 0.8,
                }}
                className="w-[200px] h-[200px] absolute border-primary border-[20px] rounded-full z-10 top-24 -right-16"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: 0.8,
                }}
                className="text-[150px] leading-none absolute scale-150 font-bold text-darkGray/40 -top-[100px] -z-10 left-64"
              >
                Blvck Tumbler
              </motion.h1>
            </div>

            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 1,
              }}
              className="mt-[300px] p-4 relative hidden lg:block"
            >
              <div className="text-lightOrange space-y-4 relative z-0">
                <h1 className="text-2xl font-medium ">Blvck Tumbler</h1>
                <h1 className="text-sm opacity-50  leading-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet odit consequuntur quo ab, beatae vel expedita!
                  Mollitia, possimus cupiditate aperiam nulla quod, deleniti
                  voluptate quaerat rerum ratione, nisi repellat itaque.
                </h1>
              </div>
              <div className="h-[180px] w-[220px] bg-darkGray absolute -z-10 -right-5 -top-5"></div>
            </motion.div>
          </div>
        </div>
        {/* siderbar Menu section */}
        {opent && (
          <div className="w-[140px] h-full bg-gradient-to-b from-primary/80 to-primary/80 backdrop-blur-sm absolute z-70 top-0 right-0">
            <div className="text-white flex flex-col justify-center items-center gap-6 w-full h-full">
              {/* line */}
              <div className="w-[1px] h-[70px] bg-white"></div>
              <div className="border border-white rounded-full p-2 inline-block cursor-pointer hover:bg-white hover:text-primary hover:scale-150 transition  duration-300">
                <FaFacebookF className="text-2xl" />
              </div>
              <div className="border border-white rounded-full p-2 inline-block cursor-pointer  hover:bg-white hover:text-primary hover:scale-150 transition  duration-300">
                <FaTwitter className="text-2xl" />
              </div>
              <div className="border border-white rounded-full p-2 inline-block cursor-pointer  hover:bg-white hover:text-primary hover:scale-150 transition duration-300">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
