import SvgIcon from "../SvgIcon";
import Calories from "../../assets/icons/nutrition/calories.svg?react";

function IconCalories() {
  return (
    <SvgIcon
      className="text-primary bg-primary-tint w-15 rounded-md p-5"
      svg={<Calories />}
    />
  );
}

export default IconCalories;
