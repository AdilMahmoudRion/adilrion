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
import MoreProject from "./Components/Pages/MoreProject/MoreProject";

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
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="home#blog" element={<Blog />} />
          <Route path="project/more-project" element={<MoreProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
