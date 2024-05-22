import Section from "../ui/section";

const Hero = () => {
  return (
    <Section className="relative">
      <div className="font-sans ">
        <div className="">
          <img
            src="/images/wallpaper.png"
            className="absolute lg:block hidden top-0 left-0"
            alt=""
          />

          <img
            src="/images/vector.png"
            className="lg:w-auto w-[80%] absolute z-10 lg:top-0 right-0 lg:right-0"
            alt=""
          />

          <div className="flex lg:flex-row flex-col-reverse items-center ">
            <div className="mx-auto flex-1 pt-2 lg:pt-32 pb-24">
              <div className="max-w-4xl">
                <h1 className="mt-5 font-bold text-black text-heading-4 lg:text-start text-center lg:text-heading-1">
                  Host your meeting with world-class amenities. Starting at{" "}
                  <span className="text-yellow-700 ">₹199/-!</span>
                </h1>
              </div>
            </div>
            <div className="flex-[0.7]">
              <img src="/images/coworking.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
