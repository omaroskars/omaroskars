import React from "react";
import classNames from "classnames";

function Avatar({ src, className, ...props }) {
  return (
    <figure className={classNames("image", className)} {...props}>
      <img
        className=""
        src={src}
        alt=""
        style={{ heigth: "100%", width: "100%" }}
      />
    </figure>
  );
}

export default Avatar;
