import {
  faDiscord,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  return (
    <section className="relative  bg-hero bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%]">
       <div className="absolute sm:left-8 left-2 space-y-4 mt-4 sm:mt-0 flex flex-col  ">
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-orange-500   text-center animate-zoomInOut  hover:text-orange-600 hover:animate-none hover:scale-125 text-2xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href=" https://www.youtube.com/@wecodemalayalam
        "
            target="_blank"
            className="text-orange-500   animate-zoomInOut text-center hover:text-orange-600 hover:animate-none hover:scale-125 text-2xl"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>

          <a
            href="  https://discord.com/servers/wecode-1132674812200882246
        "
            target="_blank"
            className="text-orange-500  animate-zoomInOut  text-center hover:text-orange-600 hover:animate-none hover:scale-125 text-2xl"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>

          <a
            href="  https://t.me/Wecode1
        "
            target="_blank"
            className="text-orange-500  animate-zoomInOut  text-center hover:text-orange-600 hover:animate-none hover:scale-125 text-2xl"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      <div className="relative">
       
        <h1 className=" md:text-6xl font-arial-black font-bold  mb-8">
          {" "}
          Build Your Future with <span className="text-blue-700">WeCode</span>
        </h1>
        <h3 className="text-lg md:text-xl font-bold font-trebuchet   mb-6">
          Join our thriving community of tech enthusiasts, developers, and
          learners. Get guidance, collaborate on projects, and shape your career
          in tech.
        </h3>
        {/* <button  className=" bg-primary font-semibold w-max left- text-black gap-3 p-4   rounded-md bg-violet-400 transition-transform transform hover:scale-105 flex items-center sm:ml-[calc(2*30%)] ml-[20%]">
    <FontAwesomeIcon icon={faUsers} className="animate-zoomInOut "/>
      Join Our Community
    </button> */}
      </div>
    </section>
  );
};
