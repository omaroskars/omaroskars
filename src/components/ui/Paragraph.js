import React from "react";

function Paragraph({ children, ...props }) {
  const { style } = props;
  return (
    <p
      style={{
        marginBottom: 10,
        ...style
      }}
    >
      {children}
    </p>
  );
}

export default Paragraph;
