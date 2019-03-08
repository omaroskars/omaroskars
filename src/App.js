import React, { Component } from "react";

import Avatar from "./components/ui/Avatar";
// import me from "/public/img/me.jpg";
// import adv from "/img/adv1.jpg";

import Animation, { animationTypes } from "./components/animation/Animation";
import { Columns, Column } from "./components/ui/Column";
import Icon from "./components/ui/Icon";
import ProgressBar from "./components/ui/ProgressBar";
import { colors } from "./colors";
import Aurora from "./components/aurora/Aurora";
import Image from "./components/ui/Image";

const images = {
  me: "/img/me.jpg",
  adv: "/img/adv1.jpg",
  sendiradid: "/img/sendiradid.png"
};

function Header() {
  const heroStyle = {
    background: colors.blue,
    color: colors.white,
    position: "relative",
    overflow: "hidden"
  };

  return (
    <section className="hero is-success is-fullheight" style={heroStyle}>
      <div className="hero-body" style={{ zIndex: 1000 }}>
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

      {/* <Animation type={animationTypes.aurora} /> */}
      <Aurora />
      <div className="hero-foot" style={{ background: "#1B242F" }}>
        <nav className="tabs">
          <div className="container">
            <ul style={{ justifyContent: "center" }}>
              <li className="is-active">
                <a>About</a>
              </li>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
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
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutSection />
        <ExperienceSection />
        <Footer />
      </>
    );
  }
}

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
    <section className="section" style={{ background: colors.gray }}>
      <div className="container">
        <SectionTitle title="Experience" />
        <Columns className="is-multiline">
          <Company
            img={images.adv}
            name="Advania"
            description="Led and architected development of a new human-resource application.
          Designed and implemented a development methodology to control high
          quality and rapid development utilizing Agile practices"
          />
          <Company
            img={images.sendiradid}
            name="Sendiráðið"
            description="As a full-stack web developer I maintained and developed new features for icelandic websites - such as www.worldclass.is, www.husasmidjan.is and social media based intranet for Isavia www.innranetid.is"
          />
          <Company
            img={images.sendiradid}
            name="Skema"
            description="Designed and taught, kids from the age 6 to 16, classes for app-, device- and gaming development"
          />
        </Columns>
      </div>
    </section>
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

// <Columns>
//   <Column>
//     <div
//       style={{
//         backgroundImage: `url(${img})`,
//         width: "100%",
//         height: "100%",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }}
//     />
//   </Column>
//   <Column>
//     <h3 className="title is-5">{name}</h3>
//     <p>{description}</p>
//   </Column>
// </Columns>

function Footer() {
  const SocialLink = ({ icon, link }) => (
    <a href={link} style={{ margin: "10px 0" }}>
      <div
        style={{
          background: "#1B242F",
          fontSize: 20,
          padding: 10
        }}
      >
        <Icon icon={icon} />
      </div>
    </a>
  );

  return (
    <section
      style={{
        background: colors.blue,
        color: colors.white,
        padding: 40
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <SocialLink
          icon="fab fa-instagram"
          link="www.instagram.com/omaroskars"
        />
        <SocialLink icon="fab fa-linkedin" link="www.linkedin.com/omaroskars" />
        <SocialLink icon="fab fa-github" link="https://github.com/omaroskars" />
      </div>
    </section>
  );
}

export default App;
