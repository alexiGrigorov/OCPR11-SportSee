import SvgIcon from "./SvgIcon";
import Logo from "../assets/icons/logo/logo.svg?react";

function SiteLogo() {
  return <SvgIcon className="text-primary w-44" svg={<Logo />} />;
}

export default SiteLogo;
