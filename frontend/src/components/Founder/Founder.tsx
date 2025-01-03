const Founder = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-center">OUR FOUNDER</h1>
      <div className="flex gap-6">
      <div className=" relative min-w-44 w-44 h-44 bg-black h-54 mt-28 float-left ">
        <img className="absolute -top-[50%] ml-2 w-40 object-contain " src="/images/founder.png" alt="" />
        <h3 className="text-white text-center pt-24 font-trebuchet">Yasir Mohammed Founder & CEO - WeCode</h3>
      </div>
      <div className="">
        <h3 className="font-serif text-lg">
          Yasir Mohammed is currently working as a Software Architect at the
          Mercedes Benz Headquarters in Germany.
        </h3>
        <h4 className="mt-10">Notable Milestones:</h4>
        <ul className="list-disc">
          <li>
            Published 4 International <span className="font-bold">Patents </span> in the USA.{" "}
          </li>
          <li>
            Successfully transformed a Hackathon project into a product with{" "}
            <span className="font-bold"> 300 million active users</span>{" "}
          </li>
          <li>
            Expanded Zoom Video Communication’s Real- time translation and
            transcription service to cater to approximately{" "}
            <span className="font-bold"> 450 million active users</span> globally, with a total of{" "}
            <span className="font-bold"> 4 trillion </span>meeting minutes{" "}
          </li>
          <li>
            Provided some of the most competitive salary packages at{" "}
            <span className="font-bold"> Facebook (Meta) and Zoom</span>.
          </li>
        </ul>
      </div>
      </div>
     
     </div>
  );
};

export default Founder;
