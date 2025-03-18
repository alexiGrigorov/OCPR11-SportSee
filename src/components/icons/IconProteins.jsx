import SvgIcon from "../SvgIcon";
import Proteins from "../../assets/icons/nutrition/proteins.svg?react";

function IconProteins() {
  return (
    <SvgIcon
      className="text-proteins bg-proteins-tint w-13 flex-shrink-0 rounded-md p-4"
      svg={<Proteins />}
    />
  );
}

export default IconProteins;
