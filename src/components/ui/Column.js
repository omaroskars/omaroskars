import React from "react";
import classNames from "classnames";

export function Column({ children, className, ...props }) {
  return (
    <div className={classNames("column", className)} {...props}>
      {children}
    </div>
  );
}

export function Columns({ children, className, ...props }) {
  return (
    <div className={classNames("columns", className)} {...props}>
      {children}
    </div>
  );
}
