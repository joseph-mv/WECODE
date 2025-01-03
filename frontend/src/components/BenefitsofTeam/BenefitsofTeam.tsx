import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToDot,
  faAnglesLeft,
  faAnglesRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
type Direction = "left" | "right";
const BenefitsofTeam = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<number>(1);
  const [showOwnership, setShowOwnership] = useState(false);
  const [showBest, setShowBest] = useState(false);

  //scroll x-direction while mouse scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollContainer.scrollLeft += 3 * e.deltaY;
        }
      };

      scrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  //left right actions at small screen
  const handleTab = (direction: Direction) => {
    if (direction === "left") setTab((prev) => prev - 1);
    else setTab((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10   font-lucida">
      <h1 className="text-center mb-2">
        BENEFITS FOR THE CLUB LEADERSHIP TEAM
      </h1>
      <div
        ref={scrollRef}
        className="relative overflow-y-hidden overflow-x-auto flex h-[500px] md:gap-14   scrollbar-hide "
      >
        {/*  A STRONG AND OUTSTANDING PROFILE section */}
        <div
          className={`relative m-auto sm:min-w-[700px] min-w-[100vw] h-[400px] overflow-hidden ${
            tab !== 1 && "hidden"
          } md:block`}
        >
          <h2 className="text-center text-xl mb-14 font-trebuchet underline">
            A STRONG AND OUTSTANDING PROFILE
          </h2>
          <div className="flex justify-center items-center ">
            <ul className="relative z-10 left-[5%] w-[70%] space-y-3 ">
              <li className="space-x-2">
                <FontAwesomeIcon icon={faArrowsToDot} />
                <span>
                  Being part of the organizing team of the We Code club at your
                  college will present you with numerous leadership
                  responsibilities and chances to interact with industry and
                  tech professionals.
                </span>
              </li>
              <li className="space-x-2">
                <FontAwesomeIcon icon={faArrowsToDot} />
                <span>
                  {" "}
                  Engaging in these experiences, combined with other activities
                  within the We Code club, will keep you at the forefront of
                  your field.
                </span>{" "}
              </li>
              <li className="space-x-2">
                <FontAwesomeIcon icon={faArrowsToDot} />
                <span>
                  {" "}
                  Demonstrating your teamwork, leadership, accountability, and
                  collaboration skills is what catches the attention of
                  companies.
                </span>
              </li>
            </ul>
            <img
              className="relative left-[8%] w-[20%] "
              src="/images/leadership.png"
              alt=""
            />

            <img
              className="hidden sm:block right-0 w-[30%]"
              src="/images/strongProfile.jpg"
              alt=""
            />
          </div>
        </div>
        {/* EXCLUSIVE INVITATIONS section */}
        <div
          className={`relative overflow-hidden m-auto sm:min-w-[700px] min-w-[100vw]  h-[400px] bg-black text-white p-2 ${
            tab !== 2 && "hidden"
          } md:block`}
        >
          <h2 className=" text-xl mb-8 font-trebuchet underline">
            EXCLUSIVE INVITATIONS
          </h2>

          <p className="w-[40%] ml-4">
            you get invited to exclusive events conducted by Mr. Yasir, such
            career guidance, meetups, freelance works, opportunities in startups
            and many more
          </p>
          <div className="bg-white text-black quarter-circle2  absolute bottom-8 right-0 flex flex-col justify-end gap-3 py-2">
            <h1 className="text-center  ml-[8%] mb-0 ">90%</h1>
            <p className=" ml-[15%]  sm:ml-14 sm:mt-8 sm:mb-5 ">
              &nbsp;&nbsp;&nbsp; of software engineers in FAANGs were actively
              involved in university tech clubs, coding competitions,
              hackathons, or other collaborative tech organizations during their
              academic careers. For example, Mark Zuckerberg, Bill Gates, and
              Larry Page were all involved in computer clubs and projects during
              their time at Harvard, Stanford, or similar institutions.
            </p>
          </div>
        </div>
        {/* EARLY EXPERIENCE OF BEING IN AN ORGANIZATION */}
        <div
          className={`m-auto sm:min-w-[700px] min-w-[100vw]  h-[400px]  ${
            tab !== 3 && "hidden"
          }  md:block`}
        >
          <h2 className=" text-xl font-trebuchet underline ml-2">
            EARLY EXPERIENCE OF BEING IN AN ORGANIZATION
          </h2>
          <div className=" relative flex  text-sm justify-evenly ">
            <div className="space-y-4 mt-20">
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                We operate similarly to a tech company, adhering to standard
                task management, event coordination, and coding activities.
              </div>
              <div className="relative max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                FIRST EXPERIENCE{" "}
                <button>
                  <FontAwesomeIcon
                    onClick={() => setShowOwnership(true)}
                    className={`animate-bounce text-gray-600 ml-3 text-xl ${
                      showOwnership && "-rotate-90 animate-none"
                    }`}
                    icon={faCaretDown}
                  />
                </button>
                <img
                  className="absolute left-[80%]  w-[50%] -rotate-[80deg] object-contain z-10"
                  src="/images/arrow_bend_left_down_icon.png"
                  alt=""
                />
              </div>
            </div>

            {
              <div className="space-y-4 mt-48">
                <div className=" max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                  <p className={showOwnership ? "visible" : "invisible"}>
                    Chance to lead and mentor the next generation of leaders.
                  </p>
                </div>
                <div className="relative max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                  <span className={showOwnership ? "visible" : "invisible"}>
                    OWNERSHIP{" "}
                    <button>
                      <FontAwesomeIcon
                        onClick={() => setShowBest(true)}
                        className={`animate-bounce text-gray-600 ml-3 text-xl ${
                          showBest && "-rotate-90 animate-none"
                        }`}
                        icon={faCaretDown}
                      />
                    </button>
                    <img
                      className="absolute left-[100%] bottom-0  w-[50%]  -rotate-[150deg]  object-contain"
                      src="/images/arrow_bend_left_down_icon.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            }
            <div className="space-y-4 mt-4">
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                <p className={showBest ? "visible" : "invisible"}>
                  {" "}
                  You will acquire the necessary methods and strategies to
                  excel, setting you up for success in your professional journey
                  over the next 5-10 years.
                </p>
              </div>
              <div className="max-w-44 w-[30vw] text-center bg-white rounded-md shadow-xl p-2">
                <span className={showBest ? "visible" : "invisible"}>
                  {" "}
                  BEING THE BEST
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className={`absolute md:hidden left-2 top-[70%] ${
            tab === 1 && "hidden"
          }`}
          onClick={() => handleTab("left")}
        >
          <FontAwesomeIcon
            className="text-gray-600 text-4xl"
            icon={faAnglesLeft}
          />
        </button>
        <button
          className={`absolute right-2 top-[70%] md:hidden ${
            tab === 3 && "hidden"
          }`}
          onClick={() => handleTab("right")}
        >
          <FontAwesomeIcon
            className="text-gray-600 text-4xl"
            icon={faAnglesRight}
          />
        </button>
      </div>
    </div>
  );
};

export default BenefitsofTeam;
