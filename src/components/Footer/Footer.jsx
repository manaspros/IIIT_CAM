import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Logo from "../../assets/IIITNR-Logo.png"

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="fcontainer">
        <div className="container1">
          <a to="/">
            <img
              className="img-foot-centr"
              src={Logo}
              alt="logo"
            />
          </a>
        </div>

        <div className="container2">
          <h2 className="h2">Organisation</h2>
          <ul className="no-bullets">
            <a
              href="https://maps.app.goo.gl/nDnNbKbt8mUWEchi8"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <li>
                <MdLocationOn/>
                <span className="i-text">
                  {" "}
                  Plot No. 7, Sector 24, Near Purkhoti Muktangan, Atal Nagar, Chhattisgarh - 493661{" "}
                </span>
              </li>
            </a>
            <a href="mailto:ecell@nits.ac.in">
              {" "}
              <li>
                <FiMail color="white"/>
                <span className="i-text">iiitnr@iiitnr.ac.in</span>
              </li>
            </a>
            <a href="tel:+91 9795888891">
              {" "}
              <li>
                <BsFillTelephoneFill className="f_icon" />
                <span className="i-text">0771-2474182</span>
              </li>
            </a>
          </ul>
        </div>

        <div className="container3">
          <h2 className="h2">
            <span className="s_head">Social</span>
          </h2>
          <a
            href="https://www.facebook.com/IIITNROfficial"
            className="footer_social_Logo"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaFacebook />
            <span className="i-text">Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/school/iiitnrofficial/"
            className="footer_social_Logo"
            id="link_ln"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin />
            <span className="i-text">Linkedln</span>
          </a>
          <a
            href="https://www.linkedin.com/school/iiitnrofficial/"
            className="footer_social_Logo"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram className="foot_insta" />
            <span className="i-text">Instagram</span>
          </a>
        </div>

        <div className="container4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6009597368534!2d81.76359047497839!3d21.12846938434703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1721214197357!5m2!1sen!2sin"
            style={{border:1}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <div className="container5">
          <p className="p2">All Rights Reserved @CAM, IIIT NR</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
