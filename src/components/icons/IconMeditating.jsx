import SvgIcon from "../SvgIcon";
import Meditating from "../../assets/icons/sports/meditating.svg?react";

function IconMeditating() {
  return (
    <SvgIcon
      className="text-primary w-15 rounded-md bg-white p-4"
      svg={<Meditating />}
    />
  );
}

export default IconMeditating;
