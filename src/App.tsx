import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./views/components/header";
import Footer from "./views/components/footer"
//Contents
import Home from "./views/content/home";
import Projects from "./views/content/projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="/projects" element={<Projects />}>

          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
