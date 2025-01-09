const BenefitsForStudents = () => {
  const benefits: {
    icon: string;
    name: string;
    description: string;
  }[] = [
    {
      icon: "/images/BenefitsForStudent/hackathons.png",
      name: "HACKATHONS",
      description:
        "Various hackathons throughout the year coverdiverse topics and technology stacks, offering opportunities for participation, learning, and potentially enhancing job prospects through winning.",
    },
    {
      icon: "/images/BenefitsForStudent/comp_program.png",
      name: "COMPETITIVE PROGRAMMING",
      description:
        "We will organize several coding competitions to provide you with insight into the hiring processes of tech companies and the types of questions they ask.",
    },
    {
      icon: "/images/BenefitsForStudent/internship.png",
      name: "INTERNSHIPS",
      description:
        "Our community will share updates on all the latest internships available, along with similar opportunities that could potentially lead to an internship or PPI.",
    },
    {
      icon: "/images/BenefitsForStudent/workshops.png",
      name: "WORKSHOPS",
      description:
        "We provide practical classes and workshops taught by industry experts. This hands- on approach will help you master new technologies such as LLM, ML, NLP, Io T, Cloud Computing, and more.",
    },
    {
      icon: "/images/BenefitsForStudent/mock_interview.png",
      name: "MOCK INTERVIEWS",
      description:
        "Selected candidates from each college will have the opportunity to participate in mock interviews designed to simulate real tech company interviews and help them prepare effectively.",
    },
    {
      icon: "/images/BenefitsForStudent/community.png",
      name: "RESOURCES AND COMMUNITY SUPPORT",
      description:
        "We Code Community with over 20000 students across the globe will be there to help and support you.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-center">BENEFITS FOR THE STUDENTS</h1>
      <div className="flex md:px-28 gap-4">
        <h2 className="text-lg font-lucida  vertical-heading">
          THERE ARE TONS OF BENEFITS WAITING FOR YOU !{" "}
        </h2>
        <div className=" flex flex-wrap gap-10 justify-center ">
          {benefits.map((benefit, index) => (
            <div data-aos="zoom-in"
              key={index}
              className="relative flex flex-col shadow-sm justify-center items-center  text-white p-2"
            >
              <div className="halfCircle"></div>
              <img
                className="absolute top-14  w-20 object-contain"
                src={benefit.icon}
                alt=""
              />

              <div className="bg-black h-64 w-60 text-center rounded">
                <p className="font-lucida mt-12 text-sm">
                  {benefit.description}
                </p>
                <h2 className="font-trebuchet font-extrabold text-xl mt-6">
                  {benefit.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsForStudents;
