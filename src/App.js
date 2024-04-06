import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null); //creating an object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#011d4a";
    } else {
      setMode("light");
      showAlert("light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <>
        <Navbar
          HomeName="home"
          abt="about"
          modeProp={mode}
          toggleMode={toggle}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Form
                  showAlertprop={showAlert}
                  GivenHeading="Enter the text"
                  modeProp={mode}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
