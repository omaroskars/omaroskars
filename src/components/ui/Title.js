import React from "react";
import classNames from "classnames";

function Title({ text, className, ...props }) {
  return (
    <h5 className={classNames("title", className)} {...props}>
      {text}
    </h5>
  );
}

export default Title;
