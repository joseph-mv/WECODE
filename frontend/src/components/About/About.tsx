import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGraduationCap, faPlay, faComments } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";


const About = () => {

  const targetNumbers = [3500, 50, 7000, 5000];
  const duration = 2000; // Animation duration in milliseconds
  const [numbers, setNumbers] = useState([0, 0, 0, 0]);
  const [startAnimation, setStartAnimation] =useState(false)
  const sectionRef = useRef(null);

  //Detect When Content Becomes Visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true) // Start animation when visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

// number increasing animation
const numberAnimations =()=>{
    const start = performance.now();

    const animate = (time:number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1); // Progress (0 to 1)
      const currentNumbers = targetNumbers.map((target) =>
        Math.floor(progress * target)
      );

      setNumbers(currentNumbers);

      if (progress < 1 ) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
 
}

// Start the animation when component is visible  and stop it when it's not
useEffect(() => {
  if (!startAnimation) return;
 numberAnimations()
}, [startAnimation])




  const stats = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faUsers} className="text-blue-500 w-10 h-10" />,
      value: numbers[0]+"+",
      label: "Active Members",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faGraduationCap} className="text-green-500 w-10 h-10" />,
      value: numbers[1]+"+",
      label: "College Chapters",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faPlay} className="text-red-500 w-10 h-10" />,
      value: numbers[2]+"+",
      label: "YouTube Subscribers",
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faComments} className="text-yellow-500 w-10 h-10" />,
      value: numbers[3]+"+",
      label: "Daily Conversations",
    },
  ];
  return (
    <div >
      <div className="relative sm:min-h-[500px]  overflow-hidden max-w-[1280px] mx-auto  p-8">
        <h1>ABOUT US</h1>
        <div  className="absolute top-0 right-0 text-gray-400 bg-gray-300 max-w-[30%] w-[200px] min-h-[500px]">
          .
        </div>
        <img
          className="hidden sm:block absolute  right-0 h-[400px]"
          src="/images/about.webp"
          alt=""
        />
        <div data-aos="fade-right" className="sm:absolute  relative mt-4 mx-auto sm:right-52 sm:top-24  sm:w-[70%] max-w-[700px] p-4  bg-gray-100 min-h-max shadow-md text-justify">
          <img
            className="w-20 object-contain mr-4 shapeOutside"
            src="/images/checklist.png"
            alt=""
          />
          <p className="font-lucida">
            WeCode Community is an initiative by Mr. Yasir from Germany to
            contribute to the growth of the new generation of developers and
            engineers. We Code currently has over 20000 students across India,
            the Middle East, and Europe and is growing exponentially.
          </p>
        </div>
        <div data-aos="fade-right" className="sm:absolute  relative mt-4 mx-auto sm:right-52 sm:top-80  sm:w-[70%] max-w-[700px] p-4 bg-gray-100 min-h-max shadow-md text-justify">
          <img
            className="w-20 object-contain mr-4 shapeOutside"
            src="/images/user.png"
            alt=""
          />

          <p className="font-lucida">
            We are dedicated to building a Coding Community focused on all
            Computer Science and Engineering students, preparing them to be
            interview- ready for product- based companies like Google, Meta,
            Amazon, and many more.
          </p>
        </div>
      </div>

      <div  className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 mt-8 px-2 place-items-center">
          {stats.map((stat) => (
            <div ref={sectionRef}
              key={stat.id}
              className="flex flex-col items-center max-w-96 lg:w-60 w-96 bg-gray-800 text-white shadow-md rounded-lg p-6"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
              <p className=" text-center">{stat.label}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default About;
