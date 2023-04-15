import React from "react";
import "./StartingBlocks.css";
import Square from "../squares/Square";

export default function StartingBlocks(props) {
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <Square key={`${row}${col}`} color={square} />;
    });
  });

  return <div className="starting-block">{grid}</div>;
}
