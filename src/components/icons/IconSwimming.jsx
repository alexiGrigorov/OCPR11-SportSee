import SvgIcon from "../SvgIcon";
import Swimming from "../../assets/icons/sports/swimming.svg?react";

function IconSwimming() {
  return (
    <SvgIcon
      className="text-primary w-17 rounded-md bg-white p-4"
      svg={<Swimming />}
    />
  );
}

export default IconSwimming;
