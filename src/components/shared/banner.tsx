// Banner.tsx
import React from "react";
import Section from "../ui/section";
import Heading from "./heading";

const Banner: React.FC = () => {
  return (
    <Section className="lg:pt-12 pt-0 pb-8 lg:pb-12">
      <Heading text="  Download our app now" level="h1" />

      <div className="bg-white mt-0 lg:mt-44 relative  flex items-center lg:flex-row flex-col gap-4 lg:gap-24 border border-gray-200 rounded-3xl p-2 lg:p-6">
        <div className="flex-shrink-0 -bottom-1 relative lg:absolute">
          <img
            src="/images/banner.png"
            alt="Banner"
            className="rounded-3xl w-auto lg:w-auto"
          />
        </div>
        <div className="flex-1 lg:block hidden"></div>
        <div className="text-center flex-1 py-0 lg:py-8 lg:text-left">
          <p className="text-heading-4 hidden lg:block text-heading-500 font-medium max-w-xl mb-4">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>

          <div className="flex justify-center w-full lg:justify-start gap-4 lg:gap-4">
            <button className="flex items-center w-full lg:w-auto bg-gray-800 text-white rounded-md px-0 lg:px-4 py-0 lg:py-2 hover:bg-gray-700 transition">
              <img
                src="/images/playstore.png"
                className="w-full"
                alt="Google Play Store"
              />
            </button>
            <button className="flex items-center w-full lg:w-auto bg-gray-800 text-white rounded-md px-0 lg:px-4 py-0 lg:py-2 hover:bg-gray-700 transition">
              <img
                src="/images/appstore.png"
                className="w-full"
                alt="Apple App Store"
              />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
