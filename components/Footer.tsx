import React from "react";
import { FlipWords } from "./ui/Flipwords";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const words = ["together", "amazing", "innovative", "creative", "meaningful"];

  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Build something <FlipWords words={words} className="text-purple" />
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s reach out now and discuss your project
        </p>
        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_HOST}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-small md:font-normal font-light">
          Copyright © 2024 Philippe
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lm saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={profile.link} target="_blank">
                <Image
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
