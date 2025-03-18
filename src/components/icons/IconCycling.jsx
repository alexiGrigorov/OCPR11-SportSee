import SvgIcon from "../SvgIcon";
import Cycling from "../../assets/icons/sports/cycling.svg?react";

function IconCycling() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Cycling />}
    />
  );
}

export default IconCycling;
