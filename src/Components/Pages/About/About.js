import React from "react";
import "./About.css";
import aboutImg from "../../Images/about1.svg";
const About = () => {
  return (
    <div id="about" className="">
      <div className="about-part max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div>
          <img className="about-part-img" src={aboutImg} alt="" />
        </div>
        <div className="about-sec-title">
          <p className="title">INTRODUCTION</p>
          <h1 className="text-4xl font-bold">ABOUT ME</h1>
          <p className="text-color text-md text-justify">
            I'm Adil Mahmoud Rion Passionate about web development.I recently
            finished the Programming hero web developments course. Building
            state-of-the-art, easy-to-use, user-friendly websites and
            applications are truly
            <br />a passion of mine. In addition to my knowledge base, I
            actively seek out new technologies and stay up-to-date on industry
            trends and advancements. This has allowed me to stay ahead of the
            curve and deliver exceptional work to all of my employers,
          </p>
          <h4>EDUCATION:</h4>
          <div>
            <div className="edu-history">
              <h2 className="divide-y border-b-2 border-[#0e6cca]">SKILLS</h2>
              <div className="course">
                <p className="text-color">
                  HTML4/5, CSS, JavaScript, Java, ES6, React.js, Express.js,
                  MongoDB Material UI, Bootstrap, tailwind CSS, firebase
                </p>
                {/* <p> <ProgressBar label={"40%"} now={40} /></p> */}
              </div>
            </div>
            <div className="edu-history">
              <h2 className="divide-y border-b-2 border-[#0e6cca]">TOOLS</h2>
              <div className="course">
                <p className="text-color">
                  Git, GitHub, Firebase, VS Code, Android Studio, Chrome
                  Dev-Tools
                </p>
                {/* <p> <ProgressBar label={"80%"} now={80} /></p> */}
              </div>
            </div>
            <div className="edu-history">
              <h2 className="divide-y border-b-2 border-[#0e6cca]">
                COURSES & TRAININGS
              </h2>
              <div className="course">
                <p className="text-color">
                  Complete Web Development Course with Jhankar Mahbub
                  <a
                    className="text-yellow-500"
                    target="_blank"
                    href="https://web.programming-hero.com"
                  >
                    {" "}
                    go There..
                  </a>
                </p>
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
