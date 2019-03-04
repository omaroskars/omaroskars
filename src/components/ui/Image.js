import React from "react";
import classNames from "classnames";

function Image({ src, className, ...props }) {
  return (
    <figure className={classNames("image", className)} {...props}>
      <img src={src} alt="" />
    </figure>
  );
}

export const mockSrc = "https://bulma.io/images/placeholders/256x256.png";

export default Image;
