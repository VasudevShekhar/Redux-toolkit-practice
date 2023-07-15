import React from "react";
import styles from "./Canvas.module.css";
import Color from "./Color";
import Font from "./Font";
import Opacity from "./Opacity";
const Canvas = () => {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <h2>
          Managing and Manipulating component state using Redux Tool Kit (RTK){" "}
        </h2>
      </div>
      <div className={styles.canvas}>
        <br />
        <Color />
        <Font />
        <Opacity />
      </div>
    </>
  );
};

export default Canvas;
