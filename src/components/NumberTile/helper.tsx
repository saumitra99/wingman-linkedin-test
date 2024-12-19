import { PiChatTeardropFill } from "react-icons/pi";
import { PiTagFill } from "react-icons/pi";
import { PiCoinsFill } from "react-icons/pi";
import { PiCoinFill } from "react-icons/pi";
import { PiPiggyBankFill } from "react-icons/pi";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { PiChartBarFill } from "react-icons/pi";

export type getTileTypeIconType =
  | "consultations"
  | "total sales value"
  | "orders placed"
  | "avg order value"
  | "conversion"
  | "chat"
  | "commission paid"
  | "barchart";

export type getIncDecIconType = "increase" | "decrease";

export const getTileTypeIcon = (
  iconType: getTileTypeIconType,
  color?: string
) => {
  switch (iconType) {
    case "consultations":
      return (
        <PiChatTeardropFill
          size={12}
          className="text-textColor-grey"
          color={color}
        />
      );
    case "total sales value":
      return (
        <PiCoinsFill size={12} className="text-textColor-grey" color={color} />
      );
    case "orders placed":
      return (
        <PiTagFill size={12} className="text-textColor-grey" color={color} />
      );
    case "avg order value":
      return (
        <PiCoinFill size={12} className="text-textColor-grey" color={color} />
      );
    case "conversion":
      return (
        <FaCheck size={12} className="text-textColor-grey" color={color} />
      );
    case "commission paid":
      return (
        <PiPiggyBankFill
          size={12}
          className="text-textColor-grey"
          color={color}
        />
      );
    case "barchart":
      return (
        <PiChartBarFill
          size={12}
          className="text-textColor-grey"
          color={color}
        />
      );
    case "chat":
      return (
        <PiChatTeardropFill
          size={12}
          className="text-textColor-grey"
          color={color}
        />
      );

    default:
      break;
  }
};
export const getIncDecIcon = (iconType: getIncDecIconType) => {
  switch (iconType) {
    case "increase":
      return (
        <AiOutlineRise size={24} className="text-textColor-green-default" />
      );
    case "decrease":
      return <AiOutlineFall size={24} className="text-red" />;

    default:
      return (
        <AiOutlineRise size={24} className="text-textColor-green-default" />
      );
  }
};
