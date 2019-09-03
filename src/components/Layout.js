import React from "react";
import Navbar from "./ui/Navbar";
import Section from "./ui/Section";

function Layout({ children, ...props }) {
  return (
    <div>
      <Navbar />
      <Section>{children}</Section>
    </div>
  );
}

export default Layout;
