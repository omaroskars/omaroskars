import React, { Component } from "react";

import PersonalInfo from "./cv/PesonalInfo";
import Content from "./cv/Content";

import Navbar from "./ui/Navbar";

import { Column, Columns } from "./ui/Column";

class CV extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Columns style={{ height: "100%" }}>
          <Column
            className="is-one-third is-fullheight cv-personal-info"
            style={{
              backgroundColor: "#f4f4f4",
              maxWidth: 300
            }}
          >
            <PersonalInfo />
          </Column>
          <Column>
            <Content />
          </Column>
        </Columns>
      </>
    );
  }
}

export default CV;
