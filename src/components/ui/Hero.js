import React from "react";
import classNames from "classnames";

export const heroSize = {
  medium: "medium",
  large: "large",
  fullHeight: "fullheight"
};

function Hero({ title, subtitle, size, backgroundImage }) {
  return (
    <section
      className={classNames("hero", {
        [`is-${size}`]: size
      })}
      style={{
        background: `url(${backgroundImage})`,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize:
          "cover" /* Resize the background image to cover the entire container */
      }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
