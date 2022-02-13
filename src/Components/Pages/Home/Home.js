import React from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Projects></Projects>
      <Contact></Contact>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default Home;
