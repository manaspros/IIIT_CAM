import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/IIITNR-Logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={Logo} alt="IIIT-NR Logo" />
            <p className="footer-tagline">Center for Advanced Manufacturing</p>
          </div>

          <div className="footer-info">
            <h3>Organisation</h3>
            <ul>
              <li>
                <a href="https://maps.app.goo.gl/nDnNbKbt8mUWEchi8" target="_blank" rel="noreferrer">
                  <FaMapMarkerAlt />
                  <span>Plot No. 7, Sector 24, Near Purkhoti Muktangan, Atal Nagar, Chhattisgarh - 493661</span>
                </a>
              </li>
              <li>
                <a href="mailto:iiitnr@iiitnr.ac.in">
                  <MdEmail />
                  <span>iiitnr@iiitnr.ac.in</span>
                </a>
              </li>
              <li>
                <a href="tel:+917712474182">
                  <BsTelephoneFill />
                  <span>0771-2474182</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/IIITNROfficial" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/school/iiitnrofficial/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/iiitnrofficial/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-map">
            <h3>Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6009597368534!2d81.76359047497839!3d21.12846938434703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1721214197357!5m2!1sen!2sin"
              title="IIIT-NR Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Center for Advanced Manufacturing, IIIT Naya Raipur. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
