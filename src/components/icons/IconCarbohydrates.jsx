import SvgIcon from "../SvgIcon";
import Carbohydrates from "../../assets/icons/nutrition/carbohydrates.svg?react";

function IconCarbohydrates() {
  return (
    <SvgIcon
      className="text-carbohydrates bg-carbohydrates-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Carbohydrates />}
    />
  );
}

export default IconCarbohydrates;
