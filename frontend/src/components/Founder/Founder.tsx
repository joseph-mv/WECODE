const Founder = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-center">OUR FOUNDER</h1>
      <h3 className="font-serif text-lg md:ml-20 text-end mx-4 ">
        Yasir Mohammed is currently working as a Software Architect at the
        Mercedes Benz Headquarters in Germany.
      </h3>
      <div className="flex items-end  gap-6 mx-4">
        <div className=" relative self-end min-w-44 w-44 h-44 bg-black h-54 mt-28 float-left ">
          <img
            className="absolute -top-[50%] ml-2 w-40 object-contain "
            src="/images/founder.png"
            alt=""
          />
        </div>
        <div className="">
          <h4 className="mt-10">Notable Milestones:</h4>
          <ul className="list-disc">
            <li>
              Published 4 International{" "}
              <span className="font-bold">Patents </span> in the USA.{" "}
            </li>
            <li>
              Successfully transformed a Hackathon project into a product with{" "}
              <span className="font-bold"> 300 million active users</span>{" "}
            </li>
            <li>
              Expanded Zoom Video Communication’s Real- time translation and
              transcription service to cater to approximately{" "}
              <span className="font-bold"> 450 million active users</span>{" "}
              globally, with a total of{" "}
              <span className="font-bold"> 4 trillion </span>meeting minutes{" "}
            </li>
            {/* <li>
              Provided some of the most competitive salary packages at{" "}
              <span className="font-bold"> Facebook (Meta) and Zoom</span>.
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Founder;
