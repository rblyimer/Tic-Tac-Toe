import React from "react";
import Square from "./Square";

const style = {
//   border: "4px solid darkblue",
//   borderRadius: "10px",
marginTop: "50px",  
width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

function Board(props) {
  const { squares, onClick } = props;
  return (
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;