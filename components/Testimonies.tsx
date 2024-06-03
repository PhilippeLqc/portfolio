import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Testimonies = () => {
  return (
    <div className="py-20" id="testimonies">
      <h1 className="heading">
        Kind words from former <span className="text-purple">colleagues</span> &{" "}
        <span className="text-purple">mentors</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
