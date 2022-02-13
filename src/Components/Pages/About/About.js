import React from "react";
import "./About.css";
import aboutImg from "../../Images/about1.svg";
const About = () => {
  return (
    <div>
      <div id="about" className="About-part">
        <div>
          <img className="about-part-img" src={aboutImg} alt="" />
        </div>
        <div className="about-sec-title">
          <p className="title">INTRODUCTION</p>
          <h1>ABOUT ME</h1>
          <p className="text-color">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, sed
            repudiandae odit deserunt, quas quibusdam necessitatibus nesciunt
            eligendi esse sit non reprehenderit quisquam asperiores maxime
            blanditiis culpa vitae velit. Numquam!
          </p>
          <h4>EDUCATION:</h4>
          <div>
            <div className="edu-history">
              <h2>2020</h2>
              <div className="course">
                <p className="text-color">Master of Database Administration</p>
                {/* <p> <ProgressBar label={"40%"} now={40} /></p> */}
              </div>
            </div>
            <div className="edu-history">
              <h2>2017</h2>
              <div className="course">
                <p className="text-color">Bachelor of Computer Engineering</p>
                {/* <p> <ProgressBar label={"80%"} now={80} /></p> */}
              </div>
            </div>
            <div className="edu-history">
              <h2>2015</h2>
              <div className="course">
                <p className="text-color">Diploma of Computer</p>
                {/* <p><ProgressBar label={"90%"} now={90} /></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
