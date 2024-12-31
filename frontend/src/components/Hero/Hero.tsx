export const Hero = () => {
  return (
    <section className="relative  bg-hero bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%]">
      
      <div className="relative">
        <h1 className=" md:text-5xl font-arial-black font-bold  mb-8">
          {" "}
          Building a coding community
        </h1>
        <h3 className="text-lg md:text-xl font-medium font-trebuchet  mb-6">
          Embarking on the Path to Become Exceptional Software Engineers and
          Developers.
        </h3>
        {/* <button  className=" bg-primary font-semibold w-max left- text-black gap-3 p-4   rounded-md bg-violet-400 transition-transform transform hover:scale-105 flex items-center sm:ml-[calc(2*30%)] ml-[20%]">
    <FontAwesomeIcon icon={faUsers} className="animate-bounce"/>
      Join Our Community
    </button> */}
      </div>
    </section>
  );
};
