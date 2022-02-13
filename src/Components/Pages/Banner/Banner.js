import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-item">
        <div className="banner-img-section">
          <img
            className="banner-img"
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="banner-information">
          <p className="banner-skill">Web Developer</p>
          <h1>Adil M Rion</h1>
          <p className="banner-skill-details">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
