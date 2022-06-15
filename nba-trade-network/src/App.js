import "./App.css";
import Nav from "./Components/Nav/Nav";

import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Trade from "./Pages/Trade/Trade";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Save, Delete, Menu } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Toolbar />
      <Routes>
        <Route index element={<About />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Trade" element={<Trade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
