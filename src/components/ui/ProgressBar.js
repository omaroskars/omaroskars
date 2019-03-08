import React from "react";
import { colors } from "../../colors";

import Animation, { animationTypes } from "../animation/Animation";

function ProgressBar({ title, progress }) {
  const styles = {
    bar: {
      background: colors.gray,
      marginBottom: 10,
      height: 30,
      overflow: "hidden"
    },
    tag: {
      padding: 3,
      background: colors.green,
      color: colors.white,
      width: 70,
      display: "inline-block",
      textAlign: "center",
      float: "left",
      position: "absolute",
      zIndex: 1
    },
    progress: {
      width: `${progress}%`,
      background: colors.green100,
      float: "left",
      height: "100%"
    }
  };

  return (
    <div style={styles.bar}>
      <div style={styles.tag}>{title}</div>
      <Animation type={animationTypes.slideInLeft} style={styles.progress} />
    </div>
  );
}

export default ProgressBar;
