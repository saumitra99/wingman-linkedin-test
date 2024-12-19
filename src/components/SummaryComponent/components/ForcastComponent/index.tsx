import CCText from "@/atom/CCText";
import Spacer from "@/atom/Spacer";
import { getTileTypeIcon } from "@/components/NumberTile/helper";
import { ColorTheme } from "@/utils/ColorUtils";
import React from "react";
import { AiOutlineRise } from "react-icons/ai";

type ForecastCard = {
  forcast1: { percentage: number; desc: string };
  forcast2: { percentage: number; desc: string };
};
const ForecastCard = ({ forcast1, forcast2 }: ForecastCard) => {
  return (
    <div
      className=" text-white rounded-2xl h-full p-6 space-y-8 w-full  shadow-lg overflow-hidden flex flex-col justify-between items-start"
      style={{
        backgroundColor: "#15B79F",
        backgroundImage: `url('/cardBackgroundImg/pulse-svg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center space-x-2 flex-[0.1]">
        {getTileTypeIcon("chat", ColorTheme.primary.lightAqua)}

        <CCText
          className="uppercase text-sm tracking-wide font-semibold"
          style={{ color: ColorTheme.primary.lightAqua }}
        >
          Forecasts
        </CCText>
      </div>
      <div className=" flex-[0.9] flex flex-col justify-start">
        <div className="flex-col items-start justify-between">
          <div className="flex items-start justify-between">
            <h1 className="text-5xl font-semibold">+{forcast1?.percentage}%</h1>
            <AiOutlineRise size={35} />
          </div>
          <Spacer spacing={16} />
          <CCText className="mt-2 text-sm text-white">{forcast1?.desc}</CCText>
        </div>
        <Spacer spacing={32} />

        {/* Forecast 2 */}
        <div className="flex-col items-start justify-between">
          <div className="flex items-start justify-between">
            <h1 className="text-5xl font-semibold">+{forcast2?.percentage}%</h1>
            <AiOutlineRise size={35} />
          </div>
          <Spacer spacing={16} />
          <CCText className="mt-2 text-sm text-white">{forcast1?.desc}</CCText>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
