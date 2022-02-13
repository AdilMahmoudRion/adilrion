import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ff0j7m",
        "my_portfolio",
        e.target,
        "user_d6UB7RpQSTmAoLqZ1Mu3c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact">
      <div>
        <h1 className="con-header">CONTACT WITH US</h1>
      </div>
      <div  className="contact-from">
      
      <div className="add-info">
        <h2 className="header">INFORMATION</h2>
        <h1>CONTACT INFORMATION</h1>
        <p>
          Event definition is - somthing that happens occurre How evesnt
          sentence. Synonym when an unknown printer took a galley.
        </p>
        <h4>
          OFFICE IN <strong>DHAKA</strong>
        </h4>
        <div className="address">
          <div className="address-detail">
            <p className="icon">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </p>{" "}
            <p>ADDRESS: Dhaka, Bangladesh</p>
          </div>
          <div className="address-detail">
            <p className="icon">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </p>
            <p>PHONE: +8801833449963</p>
          </div>
          <div className="address-detail">
            <p className="icon">
              <FontAwesomeIcon icon={faPhoneVolume} />
            </p>
            <p>PHONE: +8801722234443</p>
          </div>
          <div className="address-detail">
            <p className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <p>EMAIL: adilmahmoudrion@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
      <h2 className="header">SEND EMAIL</h2>
        <div className="form-section">
          <form onSubmit={sendEmail}>
            <div className="form">
              <input
                type="text"
                className="form-control inputFrom"
                placeholder="Name"
                name="name"
              />

              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="6"
                placeholder="Your message"
                name="message"
              ></textarea>
              <input
                type="submit"
                className="from-btn"
                value="SEND MESSAGE"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
