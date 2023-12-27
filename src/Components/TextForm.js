import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("UPPERCASE CLICKED");
    let newText = text.toUpperCase();
    // console.log(newText);
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("UPPERCASE CLICKED");
    let newText = text.toLowerCase();
    // console.log(newText);
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    // console.log(newText);
    setText(newText);
  };
  let len = text.length;
  let words = text.split(" ").filter((element) => {
    return element.length !== 0;
  }).length;
  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "#040d1e" : "white" }}
      >
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          // placeholder="Enter text here..."
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#040d1e",
            color: props.mode === "light" ? "#040d1e" : "white",
          }}
        ></textarea>
        <div className="container my-3">
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
          {/* <button className="btn btn-dark mx-1">Convert To Uppercase</button> */}
        </div>
        <h3>YOUR TEXT SUMMARY</h3>
        <p>
          Your text has {words} words and {len} characters....
        </p>
        <h3>PREVIEW</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in above box to preview here...."}
        </p>
      </div>
    </>
  );
}
