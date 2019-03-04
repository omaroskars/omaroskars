import React from "react";
import classNames from "classnames";

import Icon from "../ui/Icon";
import Avatar from "../ui/Avatar";

import me from "../../img/me.jpg";
import Title from "../ui/Title";

function References() {
  return (
    <div style={{ marginTop: 10 }}>
      <Title text="Meðmæli" className="is-6" />

      <div style={{ marginBottom: 10 }}>
        Grétar Símonaron
        <br />
        Advania / Deildarstjóri
      </div>

      <div>
        Orri Svavar Guðjónsson
        <br />
        Sendiráðið / CEO
      </div>
    </div>
  );
}

function Block({ className, children, ...props }) {
  return (
    <div
      className={classNames(className)}
      style={{ margin: "auto", marginBottom: 30 }}
    >
      {children}
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="cv-personal" style={{ padding: 10, paddingTop: 50 }}>
      <Block className="has-text-centered">
        <Avatar
          src={me}
          className="is-inline-block is-large"
          style={{ heigth: 200, width: 200 }}
        />
      </Block>

      <Block>
        <div>
          <Icon icon="fas fa-envelope" /> omaroskars15@gmail.com
        </div>
        <div>
          <Icon icon="fas fa-mobile-alt" /> 780-6627
        </div>
        <div>
          <Icon icon="fas fa-id-card" /> 030693-2489
        </div>
      </Block>

      <Block>
        <div>
          <Icon icon="fab fa-facebook" />
          /omaroskars
        </div>
        <div>
          <Icon icon="fab fa-linkedin" />
          /omaroskars
        </div>
      </Block>

      <References />
    </div>
  );
}

export default PersonalInfo;
