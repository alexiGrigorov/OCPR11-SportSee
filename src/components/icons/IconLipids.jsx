import SvgIcon from "../SvgIcon";
import Lipids from "../../assets/icons/nutrition/lipids.svg?react";

function IconLipids() {
  return (
    <SvgIcon
      className="text-lipids bg-lipids-tint w-15 rounded-md p-5"
      svg={<Lipids />}
    />
  );
}

export default IconLipids;
