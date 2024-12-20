/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { OptionsProps } from "./types";
import CCText from "../CCText";
import Spacer from "../Spacer";

type CCTabsProps = {
  optionsDetails: OptionsProps;
  onTabSelect: (id: number) => void;
};

function CCTabs({ optionsDetails, onTabSelect }: CCTabsProps) {
  const [selectedTab, setSelectedTab] = useState<number>(
    // @ts-ignore
    optionsDetails?.[0]?.id || 0
  );
  const [slideStyle, setSlideStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
  });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const selectedTabElement = tabRefs.current[selectedTab - 1];
    if (selectedTabElement) {
      const { offsetWidth, offsetLeft } = selectedTabElement;
      setSlideStyle({
        width: offsetWidth,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  }, [selectedTab]);

  const handleTabClick = (id: number) => {
    setSelectedTab(id);
    onTabSelect(id);
  };

  return (
    <div className="relative">
      <Spacer spacing={12} />

      {/* Slide Background */}
      <div
        className="absolute top-0 left-0 h-full bg-green-100 rounded-full transition-all duration-300 ease-in-out"
        style={slideStyle}
      />

      {/* Tab Header */}
      <div className="flex space-x-4 relative">
        {/* @ts-ignore */}
        {optionsDetails?.map((option, index) => {
          const isSelected = selectedTab === option.id;

          return (
            <button
              key={option.id}
              //  @ts-ignore
              ref={(el) => (tabRefs.current[index] = el)}
              //  @ts-ignore
              onClick={() => handleTabClick(option.id, index)}
              style={{ marginTop: "-1%" }}
              className={`relative z-10 flex items-center justify-center px-6 py-3 rounded-full transition-colors ${
                isSelected ? "text-black" : "text-gray-400 hover:text-black"
              }`}
            >
              {isSelected ? option.selectedIcon : option.icon}
              <Spacer spacing={12} horizontal />
              <CCText
                className={`text-lg font-medium ${
                  isSelected ? "" : "text-textColor-disable"
                }`}
              >
                {option.name}
              </CCText>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CCTabs;
