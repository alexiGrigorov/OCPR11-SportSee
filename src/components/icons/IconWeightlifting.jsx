import SvgIcon from "../SvgIcon";
import Weightlifting from "../../assets/icons/sports/weightlifting.svg?react";

function IconWeightlifting() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Weightlifting />}
    />
  );
}

export default IconWeightlifting;
