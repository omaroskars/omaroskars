import React from "react";
import classNames from "classnames";

function Title({ text, className, center, size, ...props }) {
  return (
    <h5
      className={classNames("title", className, {
        "text-center": center,
        [`is-${size}`]: size
      })}
      {...props}
    >
      {text}
    </h5>
  );
}

export default Title;
