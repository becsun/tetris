import React from "react";
import "./Square.css";

export default function Square(props) {
  const classes = `square color-${props.color}`;
  return <div className={classes} />;
}
