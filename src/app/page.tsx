/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import CCTabs from "@/atom/CCTabs";
import { ColorTheme } from "@/utils/ColorUtils";
import {
  PiTagFill,
  PiChatCircleTextFill,
  PiChartPieSliceFill,
} from "react-icons/pi";
import SummaryComponent from "@/components/SummaryComponent";
import CCText from "@/atom/CCText";
import Spacer from "@/atom/Spacer";
import Chat from "@/components/Chat";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(1);

  const options = [
    {
      id: 1,
      name: "Summary",
      selectedIcon: (
        <PiChartPieSliceFill size={24} color={ColorTheme.textColor.black} />
      ),
      icon: <PiChartPieSliceFill size={24} color={ColorTheme.disable} />,
      componentRender: <SummaryComponent />,
    },
    {
      id: 2,
      name: "Sales",
      selectedIcon: <PiTagFill size={24} color={ColorTheme.textColor.black} />,
      icon: <PiTagFill size={24} color={ColorTheme.disable} />,
      componentRender: (
        <div className="w-full h-full flex justify-center items-center p-20">
          <CCText className="text-textColor-grey">No data to show</CCText>
        </div>
      ),
    },
    {
      id: 3,
      name: "Chats",
      selectedIcon: (
        <PiChatCircleTextFill size={24} color={ColorTheme.textColor.black} />
      ),
      icon: <PiChatCircleTextFill size={24} color={ColorTheme.disable} />,
      componentRender: (
        <>
          <Chat topSpacer={<Spacer spacing={60} />} />
        </>
      ),
    },
  ];

  return (
    <div>
      <Header
        content={
          <CCTabs
            // @ts-ignore
            optionsDetails={options}
            onTabSelect={(id) => setSelectedTab(id)}
          />
        }
      />
      <main>
        {options.find((option) => option.id === selectedTab)?.componentRender}
      </main>
    </div>
  );
}
