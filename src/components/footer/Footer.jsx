import React, { useState } from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";


import "./Footer.css";

function Footer() {
  const [isMuseOpen, setMuseOpen] = useState(false);
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Newsletter */}
        <div className="footer-column">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>

        {/* Currency */}
        <div className="footer-column">
          <h4>CURRENCY</h4>
          <p>
            <img src="https://flagcdn.com/us.svg" width="20" alt="US Flag" />{" "}
            USD
          </p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      {/* Footer Links */}
      <div className="footer-links">
       
        <div className="footer-column footer-accordion">
          <h4
            className="accordion-header"
            onClick={() => setMuseOpen(!isMuseOpen)}
          >
            mettā muse
            <span className={`chevron ${isMuseOpen ? "rotate" : ""}`}><FaAngleDown /></span>
          </h4>
          <ul className={`accordion-content ${isMuseOpen ? "open" : ""}`}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column footer-accordion">
          <h4
            className="accordion-header"
            onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}
          >
            QUICK LINKS
            <span className={`chevron ${isQuickLinksOpen ? "rotate" : ""}`}>
            <FaAngleDown />
            </span>
          </h4>
          <ul className={`accordion-content ${isQuickLinksOpen ? "open" : ""}`}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <hr style={{ width: "100%" }} />

        <div className="footer-column">
          <div className="">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiLinkedin />
              </a>
            </div>
          </div>

          
          <div className="">
            <h4>mettā muse</h4>
            <div className="payment-icons">
              <img src="/assets/Group 136188.png" alt="Google Pay" />
              <img src="/assets/Group 136190.png" alt="MasterCard" />
              <img src="/assets/Group 136192.png" alt="PayPal" />
              <img src="/assets/Group 136193.png" alt="American Express" />
              <img src="/assets/Group 136194.png" alt="Apple Pay" />
              <img src="/assets/Group 136195.png" alt="COL Pay" />
            </div>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
