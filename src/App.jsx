import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  return (
    <div className="App">
    <LoadingScreen/>
    </div>
  );
}

export default App;
