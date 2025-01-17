import { faHome,  faPeopleGroup, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   membershipType: string;
// }

const Header = () => {
  // State to track whether the hamburger menu is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle the state of the menu (open/close)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed", "w-full");
    } else {
      document.body.classList.remove("fixed", "w-full");
    }
  }, [isOpen]);


   // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   // Get user data from URL query (or you can get from a state management tool like Redux)
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const userData = queryParams.get('user');
  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   }
  // }, []);
  // console.log(user)
  return (
    <header className=" flex p-3 h-20   justify-between items-center">
      <div className="rounded-full outline  outline-1">
        <img
          style={{ width: "50px", height: "auto" }}
          src="images/logo.png"
          alt="logo"
        />
      </div>
      <button className="md:hidden relative z-20 w-[30px]  h-[20px]">
        <label
          className="flex  label flex-col gap-1  w-[30px]  h-[20px] "
          htmlFor="burger"
        >
          <input
            className="hidden peer"
            type="checkbox"
            id="burger"
            checked={isOpen}
            onChange={toggleMenu}
          />
          <span className="absolute top-0 block h-[4px] w-full origin-left transition-all bg-black peer-checked:rotate-45 peer-checked:left-[4.5px]"></span>
          <span className="absolute top-[50%] block h-[4px] w-full  bg-black peer-checked:bg-transparent"></span>
          <span className="absolute top-[100%]  block h-[4px]  w-full origin-left transition-all bg-black peer-checked:-rotate-45 peer-checked:left-[4.5px] peer-checked:top-[21px]"></span>
        </label>
      </button>

      <nav
        onMouseLeave={() => {
          setIsOpen(false);
        }}
        className={`md:flex-row md:text-mainText md:relative md:right-20  gap-3 font-bold flex flex-col ${
          isOpen
            ? "fixed z-10 text-white  h-[100vh] top-0 rounded pt-[60px] transition-all  right-0 w-[200px]  gap-4 flex backdrop-blur-sm bg-black bg-opacity-35  p-2   md:h-auto md:w-auto md:top-0 md:bg-transparent md:backdrop-blur-none md:text-mainText md:pt-0 "
            : "fixed -right-[200px] transition-all"
        }`}
      >
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/"
        >
          <FontAwesomeIcon icon={faHome} className="text-xl" />
          <span>Home</span>
        </Link>
        <Link
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="/community"
        >
          <FontAwesomeIcon icon={faPeopleGroup} className="text-xl" />
          <span>Community</span>
        </Link>
        <Link
          target="_blank"
          className="link flex items-center gap-2 p-2 hover:scale-105 "
          to="https://docs.google.com/forms/d/e/1FAIpQLSdmX_iv4g_9y-0AK56lmrb98czcJ6LONTdqEC5e93c9jbQuUQ/viewform"
        >
          <FontAwesomeIcon
            icon={faPersonRunning}
            className="text-xl -rotate-[30deg]"
          />
          <span>Career</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
