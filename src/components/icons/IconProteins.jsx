import SvgIcon from "../SvgIcon";
import Proteins from "../../assets/icons/nutrition/proteins.svg?react";

function IconProteins() {
  return (
    <SvgIcon
      className="text-proteins bg-proteins-tint w-15 rounded-md p-5"
      svg={<Proteins />}
    />
  );
}

export default IconProteins;
