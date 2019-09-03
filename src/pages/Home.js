import React from "react";
import { Link } from "react-router-dom";

import Hero, { heroSize } from "../components/ui/Hero";
import { Columns, Column } from "../components/ui/Column";
import Animation, { animationTypes } from "../components/animation/Animation";

import Title from "../components/ui/Title";
import heroImage from "../images/me.jpg";

const SideMenu = () => {
  return (
    <div style={{ padding: 20, position: "absolute", bottom: 0 }}>
      <div style={{ marginBottom: 100 }}>
        <Title text="Ómar Óskars" size={1} />
      </div>

      <div style={{ marginBottom: 100 }}>
        <ul style={{ fontSize: 24 }}>
          <li style={{ marginBottom: 20 }}>
            <Link to="web">WEB DEVELOPMENT</Link>
          </li>
          <li>
            <Link to="gallery">PHOTOGRAPHY</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>+354 780-6627</li>
          <li>omaroskars15@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <Columns>
      <Column size={9}>
        <Hero size={heroSize.fullHeight} backgroundImage={heroImage} />
      </Column>

      <Column>
        <SideMenu />
      </Column>
    </Columns>
  );
}

export default HomePage;
