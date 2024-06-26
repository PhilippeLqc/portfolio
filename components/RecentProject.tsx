import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A few of <span className="text-purple">my recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, img, des, iconLists, link }) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title={link} href={link}>
              <Link href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[25vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 object-cover w-full h-full"
                    width={570}
                    height={250}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="font-light lg:font-normal lg:text-xl text-sm line-clamp-2">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3 ">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image src={icon} alt="icon" width={20} height={20} />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="flex lg:text-xl md:text-sm text-sm text-purple">
                      {link.includes("github")
                        ? "Check Github"
                        : "Check Live site"}
                    </p>
                    <FaLocationArrow className="ms-3 color:#CBACF9" />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
