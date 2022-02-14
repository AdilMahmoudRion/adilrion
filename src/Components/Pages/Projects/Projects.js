import React from "react";
import "./Projects.css";
import hondaCBR from "../../Images/HondaCBR-project.png";
import p2 from "../../Images/p2.png";
import p1 from "../../Images/p1.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";
import p5 from "../../Images/p5.png";

const Projects = () => {
  return (
    <div id="projects" className="projectCard mt-9">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="serviceHeader">
          <p>PROJECT SHOWCASE</p>
          <h1 className="text-4xl font-bold">RECENT WORKS</h1>
        </div>
        <div>
          <div className="cardBody">
            <div class="box-container">
              <div class="box box2">
                <img className="p-img" src={p3} alt="" />
                <div class="caption">
                  <div class="content">
                    <span>BIKE POINT</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="box-container">
              <div class="box box2">
                <img src={p5} alt="" />
                <div class="caption">
                  <div class="content">
                    <span>PERSONAL PORTFOLIO</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="box-container">
              <div class="box box2">
                <img src={p1} alt="" />
                <div class="caption">
                  <div class="content">
                    <span>BOOKING DOT COM</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="box-container">
              <div class="box box2">
                <img src={hondaCBR} alt="" />
                <div class="caption">
                  <div class="content">
                    <span>CBR BIKE</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="box-container">
              <div class="box box2">
                <img src={p2} alt="" />
                <div class="caption">
                  <div class="content">
                    <span>EDU PRESS</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="box-container">
              <div class="box box2">
                <img src={p4} alt="" />
                <div class="caption">
                  <div class="content">
                    <span>AUTHOR SELECTION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
