import { SiApplearcade } from "react-icons/si";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-20 md:px-20 xl:px-36 bg-blue-950">
      <div className="flex flex-col justify-center gap-3 lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col gap-5 justify-center items-center text-white">
          <span className="text-5xl lg:text-4xl xl:text-6xl">
            <SiApplearcade />
          </span>
          <span className="flex justify-center items-center gap-5 text-2xl lg:text-xl xl:text-4xl">
            <a
              rel="noreferrer"
              href="https://github.com/AndresPineros29/gaming-coaching-landingpage"
              target="_blank"
            >
              <BsGithub className="hover:text-violet-500" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/andres-felipe-pi%C3%B1eros-pabon-0b1524264/"
              target="_blank"
            >
              <BsLinkedin className="hover:text-violet-500" />
            </a>
          </span>
        </div>
        <h3 className="text-lg lg:text-xl xl:text-3xl text-center font-semibold text-white">
          Searching for more information?
        </h3>
        <div className="flex flex-col gap-3">
          <span className="flex gap-5 lg:text-sm xl:text-xl text-center font-semibold uppercase text-violet-400">
            <h3 className="hover:text-violet-500 cursor-pointer">
              Found your game here
            </h3>
            <h3 className="hover:text-violet-500 cursor-pointer">
              Search more coaches here
            </h3>
          </span>
          <span className="mx-5">
            <button className="w-full  p-4 lg:text-lg xl:text-2xl font-semibold text-white uppercase bg-violet-500 rounded-xl">
              Go to members here
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
