import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import { Fade } from "react-reveal";
import "./Contact.css";
const Contact = () => {
  function sendEmail(e) {
    console.log(e);
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
    <div id="contact" className="mt-24">
      <div className="contact-from max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Fade bottom cascade>
          <div className="w-11/12 mx-auto">
            <h1 className="text-4xl font-bold ">CONTACT ME</h1>
            <p className="mt-6">
              Event definition is - somthing that happens occurre How evesnt
              sentence. Synonym when an unknown printer took a galley. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              corporis?
            </p>
            <h4 className="text-2xl font-bold ">
              OFFICE IN <strong className="text-[#0e6cca]">DHAKA</strong>
            </h4>
            <div className="address">
              <div className="address-detail">
                <p className="icon">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </p>{" "}
                <p>
                  Address: <strong>Dhaka, Bangladesh</strong>
                </p>
              </div>
              <div className="address-detail">
                <p className="icon">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </p>
                <p>
                  Phone: <strong>+8801833449963</strong>
                </p>
              </div>
              <div className="address-detail">
                <p className="icon">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </p>
                <p>
                  Phone: <strong>+8801722234443</strong>
                </p>
              </div>
              <div className="address-detail">
                <p className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </p>
                <p>
                  Email: <strong>adilmahmoudrion@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <div>
          <div className="w-11/12 mx-auto">
            <Fade bottom cascade>
              <form onSubmit={sendEmail}>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    name="name"
                    type="text"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    for="name"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    name="email"
                    type="email"
                    id="floating_password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    for="floating_password"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="subject"
                    id="floating_repeat_password"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                  />
                  <label
                    for="floating_repeat_password"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Subject
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Writhing your message"
                  ></textarea>
                </div>

                <button
                  type="button"
                  class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  SEND
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
