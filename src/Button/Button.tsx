import PropTypes from "prop-types";
import * as React from "react";

interface Props {
  color: "primary" | "error";
  size: "medium";
  className: any;
}

export const Button: React.FC<Props> = ({ color, size, className }) => {
  return (
    <div
      className={`${color === "error" ? "border border-solid" : ""} ${color === "error" ? "border-[#d46336]" : ""} ${color === "primary" ? "w-[129px]" : "w-[140px]"} ${color === "primary" ? "h-[21px]" : "h-[23px]"} ${color === "primary" ? "bg-white" : "bg-[#f24822]"} ${className}`}
    />
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "error"]),
  size: PropTypes.oneOf(["medium"]),
};
