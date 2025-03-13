import { cloneElement } from "react";

const SvgIcon = ({ svg, className = "" }) => {
  return (
    <div className={className}>
      {cloneElement(svg, { fill: "currentColor" })}
    </div>
  );
};

export default SvgIcon;
