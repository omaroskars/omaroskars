import React from "react";

import { Column, Columns } from "./ui/Column";
import Paragraph from "./ui/Paragraph";
import Section from "./ui/Section";
import Image from "./ui/Image";
import Title from "./ui/Title";

import advlogo from "../img/advlogo.png";
import sendiradid from "../img/sendiradid.png";

function Advania() {
  return (
    <div style={{ marginBottom: 50 }}>
      <Columns>
        <Column>
          <div className="has-text-centered">
            <Image
              className="is-inline-block"
              src={advlogo}
              style={{ width: 250 }}
            />
          </div>
        </Column>
        <Column>
          <Title text="Advania" />
          <Paragraph>
            Creating a new web application can be challengin.
          </Paragraph>
          <a href="">Read more</a>
        </Column>
      </Columns>
    </div>
  );
}

function Sendiradid() {
  return (
    <div>
      <Columns>
        <Column>
          <div className="has-text-centered">
            <Image className="is-128x128 is-inline-block" src={sendiradid} />
          </div>
        </Column>
        <Column>
          <Title text="Sendiráðið" />
          <Paragraph>
            Sendiráðið is an up and coming web application agency{" "}
          </Paragraph>
          <a href="">Read more</a>
        </Column>
      </Columns>
    </div>
  );
}

function Experience() {
  return (
    <Section style={{ backgroundColor: "#FAFAFA" }}>
      <Advania />
      <Sendiradid />
    </Section>
  );
}

export default Experience;
