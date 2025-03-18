import SvgIcon from "../SvgIcon";
import Calories from "../../assets/icons/nutrition/calories.svg?react";

function IconCalories() {
  return (
    <SvgIcon
      className="text-primary bg-primary-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Calories />}
    />
  );
}

export default IconCalories;
