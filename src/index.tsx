import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercury from "./pages/Mercury/Mercury";
import Venus from "./pages/Venus/Venus";
import Earth from "./pages/Earth/Earth";
import Mars from "./pages/Mars/Mars";
import Jupiter from "./pages/Jupiter/Jupiter";
import Saturn from "./pages/Saturn/Saturn";
import Uranus from "./pages/Uranus/Uranus";
import Neptune from "./pages/Neptune/Neptune";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mercury />} />
      <Route path="/Mercury" element={<Mercury />} />
      <Route path="/Venus" element={<Venus />} />
      <Route path="/Earth" element={<Earth />} />
      <Route path="/Mars" element={<Mars />} />
      <Route path="/Jupiter" element={<Jupiter />} />
      <Route path="/Saturn" element={<Saturn />} />
      <Route path="/Uranus" element={<Uranus />} />
      <Route path="/Neptune" element={<Neptune />} />
    </Routes>
  </BrowserRouter>
);
