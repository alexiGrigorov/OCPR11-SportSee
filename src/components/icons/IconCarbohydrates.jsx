import SvgIcon from "../SvgIcon";
import Carbohydrates from "../../assets/icons/nutrition/carbohydrates.svg?react";

function IconCarbohydrates() {
  return (
    <SvgIcon
      className="text-carbohydrates bg-carbohydrates-tint w-15 rounded-md p-5"
      svg={<Carbohydrates />}
    />
  );
}

export default IconCarbohydrates;
