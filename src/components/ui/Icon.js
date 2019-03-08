import React from "react";
import classNames from "classnames";

function Icon({ icon, ...props }) {
  return (
    <span className="icon" {...props}>
      <i className={classNames(icon)} />
    </span>
  );
}

export default Icon;
