
const About = () => {
  return (
    <div className="relative sm:min-h-[500px] overflow-hidden max-w-[1200px] mx-auto bg-yellow-5 p-8">
      <h1 className="text-4xl font-trebuchet">ABOUT US</h1>
      <div className="absolute top-0 right-0 text-gray-400 bg-gray-300 max-w-[30%] w-[200px] min-h-[500px]">.</div>
      <img
        className="hidden sm:block absolute  right-0 h-[400px]"
        src="/images/about.webp"
        alt=""
      />
      <div className="sm:absolute  relative mt-4 mx-auto sm:right-52 sm:top-24  sm:w-[70%] max-w-[700px] p-4  bg-gray-100 min-h-max shadow-md text-justify">
      <img className="w-20 object-contain mr-4 shapeOutside" src="/images/checklist.png" alt="" />
        <p className="font-lucida">
          WeCode Community is an initiative by Mr. Yasir from Germany to
          contribute to the growth of the new generation of developers and
          engineers. We Code currently has over 20000 students across India, the
          Middle East, and Europe and is growing exponentially.
        </p>
      </div>
      <div className="sm:absolute  relative mt-4 mx-auto sm:right-52 sm:top-80  sm:w-[70%] max-w-[700px] p-4 bg-gray-100 min-h-max shadow-md text-justify">
      <img className="w-20 object-contain mr-4 shapeOutside" src="/images/user.png" alt="" />
       
        <p className="font-lucida">
          We are dedicated to building a Coding Community focused on all
          Computer Science and Engineering students, preparing them to be
          interview- ready for product- based companies like Google, Meta,
          Amazon, and many more.
        </p>
      </div>
    </div>
  );
};

export default About;
