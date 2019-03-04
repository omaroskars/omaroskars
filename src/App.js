import React, { Component } from "react";

import PersonalInfo from "./components/cv/PesonalInfo";
import Content from "./components/cv/Content";

import Navbar from "./components/ui/Navbar";

import Avatar from "./components/ui/Avatar";
import me from "./img/me.jpg";
import Animation, { animationTypes } from "./components/animation/Animation";
import { Columns, Column } from "./components/ui/Column";

const colors = {
  blue: "#252934",
  white: "#fff",
  green: "#2DCCB8",
  red: "#FF6060",
  black: "#3e3e3e"
};

class App extends Component {
  render() {
    const heroStyle = {
      background: "#252934",
      color: "#fff"
    };

    const boxStyle = {
      background: "#2DCCB8",
      width: 100,
      height: 100,
      margin: 20,
      borderRadius: 10,
      color: colors.white,
      textAlign: "center"
    };

    return (
      <>
        <section className="hero is-success is-fullheight" style={heroStyle}>
          <div className="hero-body">
            <div className="container  has-text-centered">
              <h1 className="title">
                Hey, I'm{" "}
                <Animation
                  type={animationTypes.trackInExpand}
                  style={{ display: "inline" }}
                >
                  <span style={{ color: colors.red }}>Ómar Óskarsson</span>
                </Animation>
              </h1>
              <h2 className="subtitle">A full-stack web developer</h2>
            </div>
          </div>
        </section>
        <section className="container">
          <Animation
            type={animationTypes.slideInLeft}
            style={{ textAlign: "center", margin: 50 }}
          >
            <h1 className="title">About</h1>
          </Animation>
          <Typewriter />

          <Columns>
            <Animation type={animationTypes.scaleUpVerticalCenter}>
              <Column style={boxStyle}>React</Column>
            </Animation>
            <Animation type={animationTypes.scaleUpVerticalCenter}>
              <Column style={boxStyle}>React</Column>
            </Animation>
            <Animation type={animationTypes.scaleUpVerticalCenter}>
              <Column style={boxStyle}>React</Column>
            </Animation>
            <Animation type={animationTypes.scaleUpVerticalCenter}>
              <Column style={boxStyle}>React</Column>
            </Animation>
          </Columns>
        </section>
      </>
    );
  }
}

function CodeLine({ title, content }) {
  return (
    <>
      <span style={{ marginLeft: 20 }}>
        {title}: {content}
      </span>
      <br />
    </>
  );
}
function Typewriter() {
  return (
    <div className="typewriter">
      <p>
        const person = <span style={{ color: colors.red }}>{"{"}</span> <br />
        <CodeLine title="name" content="Ómar Óskarsson" />
        <CodeLine title="nationality" content="Icelandic" />
        <span style={{ color: colors.red }}>{"}"}</span>
      </p>
    </div>
  );
}

export default App;
