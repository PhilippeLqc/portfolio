/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Testimonies = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading mb-40 md:mb-10">
        Kind words from former <span className="text-purple">colleagues</span> &{" "}
        <span className="text-purple">mentors</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, nameImg }) => (
            <React.Fragment key={id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 mt-20">
                <img src={img} alt={nameImg} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
