import React from "react";
import { workExperience } from "@/data";
import { FaCheck } from "react-icons/fa6";
import { Tabs } from "./ui/Tabs";

const Experiences = () => {
  const tabs = workExperience.map((experience) => ({
    id: experience.id,
    imglogo: experience.imglogo,
    title: experience.company,
    value: experience.company,
    content: (
      <div className="flex flex-col w-[480px] h-full">
        <h3 className="text-2xl font-bold">
          {experience.title}{" "}
          <span className="text-purple">@ {experience.company}</span>
        </h3>
        <div className="text-gray-400">
          <p>{experience.date}</p>
          <p>{experience.place}</p>
        </div>
        <div className="mt-2">
          {experience.desc.map((desc, index) => (
            <ul key={index} className="flex flex-row items-center gap-2">
              <FaCheck className="text-green-500" />
              <p>{desc}</p>
            </ul>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="p-6  text-white">
      <h1 className="heading">
        My work and school <span className="text-purple">experiences</span>
      </h1>
      <div className="flex items-center w-full justify-center">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default Experiences;
