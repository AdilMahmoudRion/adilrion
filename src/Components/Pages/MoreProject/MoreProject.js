import React from "react";
import p2 from "../../Images/p2.png";
import p1 from "../../Images/p1.png";
import p3 from "../../Images/p3.png";
import p4 from "../../Images/p4.png";
import p5 from "../../Images/p5.png";
import p6 from "../../Images/p6.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const project = [
  {
    name: "Travel24",
    img: `${p6}`,
    server: "https://github.com/AdilMahmoudRion/Travel24-server",
    client: "https://github.com/AdilMahmoudRion/Travel24",
    live: "https://travel24-7.web.app/",
  },
  {
    name: "Booking.Com",
    img: `${p1}`,
    server: "https://github.com/AdilMahmoudRion/bookingDotCom-server-site",
    client: "https://github.com/AdilMahmoudRion/BookingSite",
    live: "https://booking-dotcom.web.app/home",
  },
  {
    name: "Bike Point",
    img: `${p3}`,
    server: "https://github.com/AdilMahmoudRion/Bike-Point-ServerSite",
    client: "https://github.com/AdilMahmoudRion/BikePoint",
    live: "https://bike-point-7dc02.web.app/",
  },
  {
    name: "Author World",
    img: `${p4}`,
    server: "https://github.com/AdilMahmoudRion/author-world",
    client: "https://github.com/AdilMahmoudRion/author-world",
    live: "https://agitated-stonebraker-e6af2a.netlify.app/",
  },
  {
    name: "Food Network",
    img: `${p5}`,
    server: "https://github.com/AdilMahmoudRion/food-network",
    client: "https://github.com/AdilMahmoudRion/food-network",
    live: "https://adilmahmoudrion.github.io/food-network/",
  },
  {
    name: "Edu Press",
    img: `${p2}`,
    server: "https://github.com/AdilMahmoudRion/edu-press",
    client: "https://github.com/AdilMahmoudRion/edu-press",
    live: "https://stupefied-hermann-e557ce.netlify.app/home",
  },
];

const MoreProject = () => {
  return (
    <>
      <div id="projects" className="">
        <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="serviceHeader text-center mb-8">
            <p className="hed">PROJECT SHOWCASE</p>
            <h1 className="text-4xl font-bold service-header">RECENT WORKS</h1>
          </div>
          <div className="relative">
            <div className="cardBody">
              {project.map((project) => (
                <div class="card">
                  <div className="card-images">
                    <a
                      target="_blank"
                      href="https://booking-dotcom.web.app/home"
                    >
                      <img src={project.img} alt="" />
                    </a>
                  </div>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.name}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <a target="_blank" href={project.server}>
                        Server-Site Code
                      </a>{" "}
                      ||{" "}
                      <a target="_blank" href={project.client}>
                        Client-Site Code
                      </a>{" "}
                      ||{" "}
                      <a target="_blank" href={project.live}>
                        Live Site
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/"
              class="absolute right-2 +bottom-6 mt-3 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            >
              Back To Home
              <svg
                class="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MoreProject;
