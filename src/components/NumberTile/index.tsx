import Card from "@/atom/Card";
import React, { useMemo } from "react";
import { PiChatTeardropFill } from "react-icons/pi";
import {
  getIncDecIcon,
  getIncDecIconType,
  getTileTypeIcon,
  getTileTypeIconType,
} from "./helper";
import CCText from "@/atom/CCText";

type NumberTileType = {
  id: number;
  type: getTileTypeIconType;
  count: string;
  countType: getIncDecIconType;
  incDec: string;
};
function NumberTile({ tileDetails }: NumberTileType) {
  const hasIncreased = useMemo(
    () => tileDetails?.countType?.toLowerCase() === "increase",
    [tileDetails?.countType]
  );
  if (!tileDetails?.type) return null;
  return (
    <Card>
      <div className="flex-col justify-start gap-2">
        <div className="flex justify-start items-center gap-2">
          {getTileTypeIcon(tileDetails?.type?.toLowerCase())}
          <CCText className="text-xs tracking-0.5 font-semibold text-textColor-grey">
            {tileDetails?.type?.toUpperCase()}
          </CCText>
        </div>
        <CCText className="text-[32px]">{tileDetails?.count}</CCText>
        <div className="flex justify-start items-center gap-2">
          {getIncDecIcon(tileDetails?.countType?.toLowerCase())}
          <CCText
            className={`${
              hasIncreased ? "text-textColor-green-default" : "text-red"
            }`}
          >
            {tileDetails?.incDec}%
          </CCText>
          <CCText className="text-textColor-grey tracking--1">
            {tileDetails?.countType}
          </CCText>
        </div>
      </div>
    </Card>
  );
}

export default NumberTile;
