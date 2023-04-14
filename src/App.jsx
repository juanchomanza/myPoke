import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Pokedex } from "./components/Pokedex";
import { Item } from "./components/Item";
import { Home } from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes"
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<Item />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
