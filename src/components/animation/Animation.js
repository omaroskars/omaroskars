import React from "react";
import "./styles.scss";
import classNames from "classnames";

export const animationTypes = {
  fadeIn: "fade-in",
  scaleUpVerticalCenter: "scale-up-ver-center",
  trackInExpand: "tracking-in-expand",
  slideInLeft: "slide-in-left"
};

const Animation = ({ type, children, ...props }) => (
  <div className={classNames(`${type}`)} {...props}>
    {children}
  </div>
);

export default Animation;
