import games from "../assets/games.jpg";
import coach from "../assets/Gamer2.png";
import victory from "../assets/fortnite_victory.jpg";

import { motion as m } from "framer-motion";
import { transition1 } from "../transitions";

const Steps = () => {
  return (
    <section className="mx-8 md:mx-48">
      <div className="flex items-center flex-col gap-20">
        <m.div
          initial={{ x: "-9%" }}
          whileInView={{ x: 0 }}
          transition={transition1}
          className="flex flex-col xl:flex-row gap-5 xl:gap-28 bg-violet-900/30 rounded-2xl"
        >
          <span>
            <img
              src={games}
              alt="games"
              className="md:max-w-[500px] rounded-2xl"
            />
          </span>
          <span className="flex justify-center items-center max-w-[500px] text-white md:text-[1.7rem] lg:text-3xl leading-loose p-4 xl:p-2">
            1. Choose your game, we have a selection of more than 150 games to
            choose from, all with a large number of coaches.
          </span>
        </m.div>
        <m.div
          initial={{ x: "9%" }}
          whileInView={{ x: 0 }}
          transition={transition1}
          className="flex flex-col-reverse xl:flex-row gap-5 xl:gap-28 bg-violet-900/30 rounded-2xl"
        >
          <span className="flex justify-center items-center max-w-[500px] text-white md:text-[1.7rem] lg:text-3xl leading-loose p-4 xl:p-2">
            2. Choose your coach, with a selection of more than 500 coaches
            specialized in different kinds of games such as fps, mobas, meele
            games and more.
          </span>
          <span>
            <img
              src={coach}
              alt="coach"
              className="md:max-w-[500px] rounded-2xl"
            />
          </span>
        </m.div>
        <m.div
          initial={{ x: "-9%" }}
          whileInView={{ x: 0 }}
          transition={transition1}
          className="flex flex-col xl:flex-row gap-5 xl:gap-28 bg-violet-900/30 rounded-2xl"
        >
          <span>
            <img
              src={victory}
              alt="victory_royale"
              className="md:max-w-[500px] rounded-2xl"
            />
          </span>
          <span className="flex justify-center  flex-col max-w-[500px] text-white md:text-[1.7rem] lg:text-3xl leading-loose p-4 xl:p-2">
            3. After completing these cases, all that remains is to continue
            practicing and improving with the help of your coach to reach that
            <span className="text-yellow-200 font-semibold">
              {" "}
              Match Victory.
            </span>
          </span>
        </m.div>
      </div>
    </section>
  );
};

export default Steps;
