const Testimonials = () => {
  const testimonials: {
    name: string;
    placement: string;
    description: string;
    img: string;
  }[] = [
    {
      name: "MR. AKSHAY",
      placement: "Got placed with a PACKAGE OF 8 LAKHS PER ANNUM",
      description: " With a 125% increase in salary from his previous position.",
      img: "images/testimonials/akshay.png",
    },
    {
      name: "MR. AKHIN T",
      placement: "Got placed as a FULL STACK ENGINEER at Ooloi Labs",
      description: "With a 33% increase in salary from previous position.",
      img: "images/testimonials/akhin.png",
    },
    {
      name: "MR. VESHAL RAJ",
      placement: "Got placed in a Product Based company Samaaro",
      description: "With great package as a fresher.",
      img: "images/testimonials/veshal_raj.png",
    },
  ];
  return (
    <div className="max-w-7xl p-4 mx-auto font-trebuchet outline-dashed -outline-offset-4">
      <h1 className="text-center">TESTIMONIALS</h1>
      <div className="flex flex-wrap gap-6 justify-center ">
        {testimonials.map((testimonial, index) => (
          <div className=" w-84 h-[350px] max-h-min rounded-md border border-black p-2 bg-yellow-50 shadow-md" key={index}>
           <div className="flex">
           <div className="w-44">
              <h3>Exciting News from the community!!!!</h3>
            <hr className="bg-gray-600 h-[2px]" />
              <h2 className="flex flex-col text-2xl">
                <span className="font-extrabold">Wecode</span>
                <span>Community</span>
                <span>Student</span>
              </h2>
              <h2 className="text-2xl font-mono font-extrabold">{testimonial.name}</h2>
              <h2 className="">{testimonial.placement}</h2>
            </div>
            <img
              className="w-44 h-52 mt-8 object-contain "
              src={testimonial.img}
              alt=""
            />
           </div>
           <h3 className="mt-4 text-wrap w-80 font-serif">{testimonial.description}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
