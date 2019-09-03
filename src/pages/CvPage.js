import React from "react";

import Aurora from "../components/aurora/Aurora";
import Animation, { animationTypes } from "../components/animation/Animation";
import ProgressBar from "../components/ui/ProgressBar";
import Avatar from "../components/ui/Avatar";

import { Columns, Column } from "../components/ui/Column";
import Icon from "../components/ui/Icon";
import { colors } from "../colors";
import Navbar from "../components/ui/Navbar";
import Section from "../components/ui/Section";
import Hero from "../components/ui/Hero";
const images = {
  me: "/img/me.jpg",
  adv: "/img/adv1.jpg",
  sendiradid: "/img/sendiradid.png"
};

function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="About" />

        <Blocks />
        <Columns>
          <Column className="is-6 has-text-centered">
            <Animation type={animationTypes.slideInLeft}>
              <Avatar
                src={images.me}
                className="is-rounded is-128x128 is-horizontal-center"
                style={{ margin: "auto", marginBottom: 40 }}
              />
              <h3 className="title is-4">Who is this dude?</h3>
              <p>
                Web developer from Iceland. Enjoys creating beautiful,
                responsive and user-friendly web applications. Passionate,
                ambitious and eager to learn
              </p>
            </Animation>
          </Column>

          <Column className="is-6">
            <Animation type={animationTypes.slideInRight}>
              <div>
                <ProgressBar title="Scss" progress={60} />
                <ProgressBar title="JS" progress={90} />
                <ProgressBar title="React" progress={85} />
                <ProgressBar title="Redux" progress={80} />
                <ProgressBar title=".NetCore" progress={70} />
                <ProgressBar title="Angular" progress={40} />
                <ProgressBar title="REST" progress={85} />
              </div>
            </Animation>
          </Column>
        </Columns>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <Section>
      <Hero title="Stokkur"></Hero>
      <Hero title="Advania"></Hero>
      <Hero title="Sendiradid"></Hero>
    </Section>
  );
}

function Company({ img, name, description }) {
  return (
    <div className="tile">
      <div class="card" style={{ background: "transparent", border: "none" }}>
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={img} alt="Company" />
          </figure>
        </div>
        <div class="card-content" style={{ background: "transparent" }}>
          <p class="title is-4">{name}</p>

          <div class="content" style={{ background: "transparent" }}>
            {description}.
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

function Infobox({ title, icon, children }) {
  return (
    <Column className="is-3-desktop" style={{ marginBottom: 20 }}>
      <div style={{ textAlign: "center", marginBottom: 10 }}>
        <Icon icon={icon} style={{ fontSize: 40, color: colors.green }} />
      </div>
      <h3 className="title is-5 has-text-centered">{title}</h3>
      <p className="has-text-centered">{children}</p>
    </Column>
  );
}

function Blocks() {
  return (
    <Animation type={animationTypes.scaleUpVerticalCenter}>
      <Columns style={{ marginBottom: 40 }}>
        <Infobox title="Simplicity" icon="fab fa-simplybuilt">
          I like to keep things as simple as possible. Writing readable code is
          more important to me than complex one liners
        </Infobox>
        <Infobox title="Reusability" icon="fas fa-layer-group">
          Focusing on single reusability principle helps me create extendable
          code that is easy to maintain
        </Infobox>
        <Infobox title="Responsive" icon="fas fa-server">
          Mobile phones have around 50% percent of all internet traffic
          worldwide. Therefore it's important websites work on all devices
        </Infobox>
        <Infobox title="Intuative" icon="fas fa-road">
          Strong preference for easy to use, intuitive UI/UX.
        </Infobox>
      </Columns>
    </Animation>
  );
}

function SectionTitle({ title }) {
  return (
    <Animation
      type={animationTypes.slideInLeft}
      style={{ textAlign: "center", margin: 50 }}
    >
      <h1 className="title">{title}</h1>
    </Animation>
  );
}

function CvPage() {
  return (
    <>
      <Navbar />
      <ExperienceSection />

      {/* <AboutSection /> */}
    </>
  );
}

export default CvPage;
