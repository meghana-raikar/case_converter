import React, { useState } from "react";

const Form = (props) => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const updatedText = (event) => {
    setText(event.target.value);
  };

  const toUpCase = () => {
    let converter = text.toUpperCase();
    setText(converter);
    props.showAlertprop("Converted to upper case", "success");
  };

  const tolowCase = () => {
    let convert = text.toLowerCase();
    setText(convert);
    props.showAlertprop("Converted to lower case", "success");
  };

  const clear = () => {
    setText("");
    props.showAlertprop("text cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sentences = (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === ".") {
        count++;
      }
    }
    return count;
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.modeProp === "dark" ? "white" : "black" }}
      >
        <h1>{props.GivenHeading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.modeProp === "light" ? "white" : "grey",
              color: props.modeProp === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={updatedText}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Enter text"
          ></textarea>
        </div>

        <div>
          <button className="btn btn-primary mx-1 my-1" onClick={toUpCase}>
            convert to UpperCase
          </button>

          <button className="btn btn-primary mx-1 my-1" onClick={tolowCase}>
            covert to lowercase
          </button>

          <button className="btn btn-primary mx-1 my-1" onClick={clear}>
            clear
          </button>

          <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            copy
          </button>
          {copied && (
            <span style={{ marginLeft: "10px", color: "green" }}>
              Copied to clipboard!
            </span>
          )}
        </div>
      </div>

      <div
        className="container my-4"
        style={{ color: props.modeProp === "dark" ? "white" : "black" }}
      >
        <h4>your text summary</h4>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words | {text.length} characters | time to read is{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          | number of sentences are {sentences(text)}
        </p>

        <h4>preview</h4>
        <p>{text.length > 0 ? text : "Enter text to check preview"}</p>
      </div>
    </>
  );
};

export default Form;
