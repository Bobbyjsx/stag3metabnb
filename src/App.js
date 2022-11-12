import React from "react";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import "./App.css";
import Nft from "./pages/nft/nft";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nft" element={<Nft />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
