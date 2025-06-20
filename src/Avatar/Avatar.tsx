import PropTypes from "prop-types";
import * as React from "react";

interface Props {
  avatarVariant: "default";
  className: any;
}

export const Avatar: React.FC<Props> = ({ avatarVariant, className }) => {
  return (
    <div
      className={`w-[618px] h-[340px] rounded-[10px] bg-cover bg-[50%_50%] ${className}`}
    />
  );
};

Avatar.propTypes = {
  avatarVariant: PropTypes.oneOf(["default"]),
};
