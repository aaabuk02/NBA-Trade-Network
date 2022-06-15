import "./App.css";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import { Save, Delete, Menu } from "@mui/icons-material";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<About />} />
        <Route path="About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
