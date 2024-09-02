import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
    setMessage("Action Performed Successfully");
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage("Action Performed Successfully");
    } else {
      setMessage(
        "Unable to reduce value now Because there will be negative values"
      );
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "300%",
          position: "absolute",

          height: "100%",
          top: "-15%",
        }}
      >
        Counter App
        <div
          style={{
            fontSize: "120%",
            position: "relative",
            top: "10vh",
          }}
        >
          {counter}
          <h3>{message}</h3>
        </div>
        <div className="buttons">
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginRight: "5px",
              backgroundColor: "green",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={handleClick1}
          >
            Increment
          </button>
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginLeft: "5px",
              backgroundColor: "red",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={handleClick2}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
