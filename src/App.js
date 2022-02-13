import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Pages/Navigation/Navigation";
import Contact from "./Components/Pages/Contact/Contact";
import Service from "./Components/Pages/Service/Service";
import Projects from "./Components/Pages/Projects/Projects";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";

function App() {
  return (
    <div className="adilrionWebBody">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="project" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
