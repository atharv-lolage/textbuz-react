// import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import "./App.css";
import { useState } from "react";
// import About from "./Components/About";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#040d1e";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TEXTBUZ" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
