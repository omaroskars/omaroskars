import React from "react";

function Container({ children, ...props }) {
  return <div className="container">{children}</div>;
}

export default Container;
