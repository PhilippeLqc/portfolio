/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  id: number;
  title: string;
  imglogo: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "flex md:flex-row flex-wrap items-center md:justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar py-20 md:py-40 gap-10",
          containerClassName
        )}
      >
        <div className="flex flex-wrap flex-row gap-2 md:flex-col">
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              className={cn(
                " flex flex-wrap items-center px-2 py-4 md:px-4 md:py-2 rounded-sm md:rounded-xl w-[60vw] md:w-[12vw] group transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-zinc-800 ",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "just", duration: 0 }}
                  className={cn(
                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-sm md:rounded-xl opacity-50",
                    activeTabClassName
                  )}
                />
              )}
              <div className="flex flex-row items-center gap-2 relative">
                <img src={tab.imglogo} alt={tab.title} width={20} height={20} />
                <span className="relative block text-black dark:text-white md:text-left text-center">
                  {tab.title}
                </span>
              </div>
            </button>
          ))}
        </div>
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          className={cn("w-full flex flex-1", contentClassName)}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="flex flex-wrap justify-center items-center">
      {tabs.map((tab, idx) => (
        <div
          key={tab.value}
          className={cn("hidden", {
            block: isActive(tab),
          })}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
