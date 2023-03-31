import NumberCounter from "number-counter";
import { IoIosArrowDown } from "react-icons/io";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
} from "react-icons/tb";
import { SiApplearcade } from "react-icons/si";

import { motion as m } from "framer-motion";
import { transition1 } from "../transitions";

const Header = () => {
  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition1}
      className="px-6 md:px-10 lg:px-36 pt-6 header__container flex flex-col justify-center items-center bg-top bg-no-repeat bg-cover"
    >
      <div className="w-full flex justify-between items-center">
        <SiApplearcade className="text-3xl md:text-5xl text-white" />
        <button className="py-1 px-2 md:py-2 md:px-4 lg:py-4 lg:px-6 rounded-xl text-white text-xs md:text-base lg:text-lg font-semibold uppercase border-2 border-solid border-white hover:bg-blue-900 hover:border-blue-900">
          explore more
        </button>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="my-[10rem] flex flex-col gap-6 md:gap-12 lg:gap-24 xl:gap-28 justify-center items-center">
          <m.h1
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition1}
            className="text-white text-[1.7rem] md:text-4xl lg:text-6xl xl:text-8xl text-center font-extrabold text-shadow"
          >
            Ready to Take Your Game <br /> up a Notch?
          </m.h1>
          {/* STEPS */}
          <m.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition1}
            className="flex flex-col md:flex-row p-4 rounded-lg gap-2 md:gap-8 text-lg md:text-xl xl:text-[1.8rem] bg-slate-800/90 text-gray-300 font-medium subtext-shadow"
          >
            <span className="flex items-center justify-between gap-2">
              <TbCircleNumber1 />
              <span>Choose your Game</span>
            </span>
            <span className="flex items-center justify-between gap-2">
              <TbCircleNumber2 />
              <span>Find your coach</span>
            </span>
            <span className="flex items-center justify-between gap-2">
              <TbCircleNumber3 />
              <span>Start improving</span>
            </span>
          </m.div>
          {/* NUMBERS */}
          <m.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition1}
            className=" flex flex-col md:flex-row gap-7 md:gap-16 justify-center items-center text-white subtext-shadow"
          >
            <div className="flex justify-between gap-2 md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              <NumberCounter end={150} start={100} delay="2" preFix="+" />
              <span className="text-blue-500"> Games</span>
            </div>
            <div className="flex justify-between gap-2 md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              <NumberCounter end={500} start={450} delay="3" preFix="+" />
              <span className="text-blue-500"> Coaches</span>
            </div>
            <div className="flex justify-between gap-2 md:text-xl lg:text-2xl xl:text-4xl font-semibold">
              <NumberCounter end={800} start={750} delay="4" preFix="+" />
              <span className="text-blue-500"> Players</span>
            </div>
          </m.div>
          <IoIosArrowDown color="#fff" size={70} />
        </div>
      </div>
    </m.header>
  );
};

export default Header;
