import { AiFillStar } from "react-icons/ai";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { CoachesData } from "../data/CoachesData";

import { motion as m } from "framer-motion";

const Coaches = () => {
  return (
    <section className="m-8 md:my-[5rem] md:mx-[10rem]">
      <div className="flex flex-col xl:flex-row justify-between gap-4">
        {CoachesData.map((coach) => (
          <div className="rounded-lg bg-indigo-950">
            {/* COACH IMAGE */}
            <div>
              <div className="absolute p-3 rounded-lg bg-slate-900/70 text-white text-lg">
                {coach.game}
              </div>
              <img
                key={coach.id}
                src={coach.image}
                alt="coacj__image"
                className="rounded-tr-lg rounded-tl-lg w-full"
              />
            </div>
            {/* COACH INFO */}
            <div className="p-6 md:p-12 flex flex-col gap-4">
              <h3 className="text-white text-xl md:text-3xl font-semibold">
                {coach.name}
              </h3>
              <div className="flex justify-between items-center">
                {/* COACH STARS */}
                <div className="flex flex-row text-yellow-200 text-lg">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                {/* COACH RANK */}
                <div>
                  <img
                    key={coach.key}
                    src={coach.rank}
                    alt="rank_imgae"
                    className="w-12 md:w-20"
                  />
                </div>
              </div>
              <div>
                <ul>
                  {coach.info.map((i) => (
                    <div className="flex flex-row gap-3 justify-start items-center text-white md:text-lg">
                      <GrStatusCriticalSmall />
                      <li className="text-gray-400 font-medium">{i}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <m.button
          whileHover={{ scale: 1.2 }}
          className="py-4 px-6 rounded-xl my-20 text-white text-lg font-semibold uppercase bg-blue-900 hover:bg-violet-900"
        >
          View all coaches
        </m.button>
      </div>
    </section>
  );
};

export default Coaches;
