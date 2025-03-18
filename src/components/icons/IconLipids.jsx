import SvgIcon from "../SvgIcon";
import Lipids from "../../assets/icons/nutrition/lipids.svg?react";

function IconLipids() {
  return (
    <SvgIcon
      className="text-lipids bg-lipids-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Lipids />}
    />
  );
}

export default IconLipids;
