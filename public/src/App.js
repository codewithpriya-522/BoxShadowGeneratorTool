import "./App.css";
import React, { useState } from "react";

function App() {
  const [Horizotal, setHorizotal] = useState(10);
  const [Vertical, setVertical] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [color, setColor] = useState("gray");
  const [check, setCheck] = useState(false);
  return (
    <div className="App">
      <div className="controls">
      <h3>Box-shadow Generator Tool</h3>
        <label >Horizontal length</label>
        <input
          type="range"
          id="test5"
          min="-200"
          max="200"
          value={Horizotal}
          onChange={(e) => setHorizotal(e.target.value)}
        />
        <label>Vertical length</label>
        <input
          type="range"
          id="test5"
          min="-200"
          max="200"
          value={Vertical}
          onChange={(e) => setVertical(e.target.value)}
        />
        <label>Blur length</label>
        <input
          type="range"
          id="test5"
          min="0"
          max="200"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Color</label>
        <input
          type="color"
          id="test5"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="switch">
          <label>
            Outset
            <input
              type="checkbox"
              checked={check}
              onChange={() => setCheck(!check)}
            />
            <span className="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="Box"
          style={{
            boxShadow: `${
              check ? "Inset" : ""
            } ${Horizotal}px ${Vertical}px ${Blur}px ${color}`,
          }}
        >
          <p>
            Box-shadow:{Horizotal}px {Vertical}px {Blur}px {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
