
import { Care_data } from "@/shared/config/constants";
import { ShapeTypes } from "@/shared/config/types";
import React from "react";
import Shape from "../Helpers/Shape";



const Why = () => {
  // destructure
  const { why } = Care_data;

  return (
    <>
      <section id="why" className="container relative">
        <div className="flex md:justify-between py-[2rem] md:py-16 lg:py-24 items-center w-full relative z-20 flex-col md:flex-row gap-5 md:gap-0">
          <h2 className=" text-[22px] max-w-[460px] md:text-[40px] sm:text-[30px] lg:text-[60px] font-[600] text-black leading-[1.4]">
            {why.title}
          </h2>

          <div className="relative md:w-[700px] md:h-[600px] w-[300px] sm:h-[400px] h-[320px]">
            {why?.shapes?.map((shape: ShapeTypes, index: number) => (
              <Shape {...shape} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;