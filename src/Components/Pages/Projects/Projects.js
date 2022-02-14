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
    <div id="projects" className="">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="serviceHeader text-center mb-8">
          <p>PROJECT SHOWCASE</p>
          <h1 className="text-4xl font-bold">RECENT WORKS</h1>
        </div>
        <div>
          <div className="cardBody">
            <div class="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="" href="https://booking-dotcom.web.app/home">
                <img class="rounded-t-lg h-4/5" src={p1} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    BookingDotCom
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a target="_blank" href="#">
                    Server-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Client-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="https://booking-dotcom.web.app/home">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div class="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="" href="#">
                <img class="rounded-t-lg h-4/5" src={p2} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Edu Press
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a target="_blank" href="#">
                    Server-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Client-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div class="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="" href="https://bike-point-7dc02.web.app/">
                <img class="rounded-t-lg h-4/5" src={p3} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    BikePoint
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a target="_blank" href="#">
                    Server-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Client-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="https://bike-point-7dc02.web.app/">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div class="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="" href="#">
                <img class="rounded-t-lg h-4/5" src={p4} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Author world
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a target="_blank" href="#">
                    Server-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Client-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div class="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="" href="#">
                <img class="rounded-t-lg h-4/5" src={p5} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Foot Network
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a target="_blank" href="#">
                    Server-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Client-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
            <div class="card bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="" href="https://travel24-7.web.app/">
                <img class="rounded-t-lg h-4/5" src={p1} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Travel24
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a target="_blank" href="#">
                    Server-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="#">
                    Client-Site Code
                  </a>{" "}
                  ||{" "}
                  <a target="_blank" href="https://travel24-7.web.app/">
                    Live Site
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
