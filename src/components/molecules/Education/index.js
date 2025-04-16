
import React, { Suspense } from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pt-24">
      <div data-aos="fade-down">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold text-center">
            My <span className="text-primary">Education</span>
          </h1>
          <div className="my-4">
            <p className="text-center md:w-[52%] w-[72%] mx-auto text-gray-600">
              My education has been a journey of self-discovery and growth. My educational details are as follows.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <div className="w-full h-full flex items-center justify-center">
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-[#313131]/10 rounded-lg space-y-2 my-6">
            <h2 className="font-semibold">Diploma</h2>
            <div className="text-sm text-gray-600">
              <p>Politeknik LP3I Karawang</p>
              <p>Computer Network Engineering</p>
              <p>2017-2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
