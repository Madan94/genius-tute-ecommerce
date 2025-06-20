import PropTypes from "prop-types";
import React from "react";

interface Props {
  avatarVariant: "default";
  className: any;
}

export const Avatar = ({ avatarVariant, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[618px] h-[340px] rounded-[10px] bg-cover bg-[50%_50%] ${className}`}
    />
  );
};

Avatar.propTypes = {
  avatarVariant: PropTypes.oneOf(["default"]),
};
