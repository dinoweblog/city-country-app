import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Country } from "./Components/Country";
import { City } from "./Components/City";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add-country" element={<Country />}></Route>
      <Route path="/add-city" element={<City />}></Route>
    </Routes>
  );
}

export default App;
