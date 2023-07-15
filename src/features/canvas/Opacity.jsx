import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOpacity, selectOpacity } from "./canvasSlice";
import styles from "./Canvas.module.css";

const Opacity = () => {
  const num = useSelector(selectOpacity);
  const dispatch = useDispatch();
  return (
    <div className={styles.font}>
      <h2>Opacity</h2>
      <p>
        <span style={{ opacity: `0.${num}` }}>
          Redux Tool Kit(RTK) is the modern way to learn Redux. Let's start with
          the basics.
        </span>
      </p>
      <input
        type="range"
        style={{ margin: "5px" }}
        value={num}
        min="1"
        max="9"
        onChange={(e) => dispatch(changeOpacity(e.target.value))}
      />
      <p>{num}</p>
    </div>
  );
};

export default Opacity;
