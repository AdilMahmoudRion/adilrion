import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";
import adil from "../../Images/adil.png";
import { Zoom } from "react-reveal";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-item">
        <div className="banner-img-section">
          <Zoom>
            <img className="banner-img" src={adil} alt="" srcset="" />
          </Zoom>
        </div>
        <div className="banner-information">
          <Zoom>
            <p className="md:text-5xl lg:text-5xl uppercase font-bold text-white">
              Adil M Rion
            </p>

            <p className="banner-skill divide-y border-b-2 border-[#0e6cca]">
              Junior Web Developer || MERN Stack Developer
            </p>
            <p className="banner-skill-details mt-2 text-md">
              I actively seek out new technologies and stay up-to-date on
              industry trends and advancements. Building state-of-the-art,
              easy-to-use, user- friendly websites and applications is truly a
              passion of mine. my strengths are my analytical approach, I
              believe in being realistic.
            </p>
          </Zoom>
          <div className="flex flex-wrap justify-around">
            <Zoom>
              <button className="banner-btn1 btn">
                <a
                  className="d-link"
                  href="https://drive.google.com/u/0/uc?id=1BCstH8tzPgmq-V70MW1MDDd65zzpEdct&export=download"
                >
                  Download CV
                </a>
              </button>
              <HashLink
                className="banner-btn2 btn"
                as={HashLink}
                to="/home#contact"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "start" })
                }
              >
                Contact
              </HashLink>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
