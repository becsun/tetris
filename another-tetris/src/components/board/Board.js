import React from "react";
import Square from "../squares/Square";
import "./Board.css";

export default function Board(props) {
  // generates an array of 18 rows, each containing 10 GridSquares.

  const grid = [];
  for (let row = 0; row < 18; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(<Square key={`${col}${row}`} color="1" />);
    }
  }

  // The components generated in makeGrid are rendered in div.grid-board

  return <div className="grid-board">{grid}</div>;
}
