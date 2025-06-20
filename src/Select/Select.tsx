import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: "primary";
  disabled: "enabled";
  className: any;
  simpleLineIconsClassName: any;
}

export const Select = ({
  color,
  disabled,
  className,
  simpleLineIconsClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`relative w-[311px] h-[58px] bg-[#b463ff] rounded-[10px] overflow-hidden ${className}`}
    >
      <img
        className={`absolute w-[18px] h-[18px] top-[1415px] left-[-102px] ${simpleLineIconsClassName}`}
        alt="Simple line icons"
      />

      <div className="absolute top-[13px] left-[13px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
        Select your Language
      </div>
    </div>
  );
};

Select.propTypes = {
  color: PropTypes.oneOf(["primary"]),
  disabled: PropTypes.oneOf(["enabled"]),
};
