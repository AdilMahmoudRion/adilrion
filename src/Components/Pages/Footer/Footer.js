import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../../Images/fb.png";
import tw from "../../Images/twitter.png";
import insta from "../../Images/insta.png";
import git from "../../Images/git.png";
import { Zoom } from "react-reveal";

const Footer = () => {
  return (
    <div>
      <div className="mt-24">
        <div class="p-4 w-full text-center bg-white border shadow-md sm:p-8 bg-[#131f33] dark:border-gray-700">
          <Zoom>
            <>
              <h3 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Move With{" "}
                <strong className="text-[#0e6cca]">Adil Mahmoud Rion</strong>
              </h3>
              <p class="mb-2 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Neque, possimus. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Modi, odio.
              </p>
            </>
          </Zoom>
          <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              class="w-full sm:w-auto flex hover:bg-gray-700 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
            >
              <div>
                <img className="w-10" src={git} alt="" />
              </div>
            </Link>
            <Link
              to="/"
              class="w-full sm:w-auto flex hover:bg-gray-700 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
            >
              <div>
                <img className="w-10" src={fb} alt="" />
              </div>
            </Link>
            <Link
              to="/"
              class="w-full sm:w-auto flex hover:bg-gray-700 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
            >
              <div>
                <img className="w-10" src={tw} alt="" />
              </div>
            </Link>
            <Link
              to="/"
              class="w-full sm:w-auto flex hover:bg-gray-700 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 "
            >
              <div>
                <img className="w-10" src={insta} alt="" />
              </div>
            </Link>
          </div>
          <div class="text-left">
            <div class="text-center my-2 text-base text-gray-500 sm:text-lg dark:text-gray-400 ">
              © 20201 Adil Mahmoud Rion All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
