import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Landingpage";
import CarList from "./components/CarList";
import DemoCards from "./components/DemoCards";
import ExtraInfo from "./components/ExtraInfo";
import BlogHomepage from "./components/BlogPreview";
import AllLinks from "./components/AllLinks";
import CarCards from "./components/CarBrandCards";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<EveryElement />} />
          <Route path="/Elektrische-Autos" element={<CarList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function EveryElement() {
  return (
    <div>
      <Homepage />
      <DemoCards />
      <ExtraInfo />
      <BlogHomepage />
      <CarCards />
      <AllLinks />
    </div>
  );
}

export default App;
