import React from "react";
import classNames from "classnames";

function Section({ className, children, ...props }) {
  return (
    <section className={classNames("section", className)} {...props}>
      {children}
    </section>
  );
}

export default Section;
