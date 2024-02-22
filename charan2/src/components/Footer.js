import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-top py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="footer-top-data d-flex align-items-center justify-content-evenly">
                <div className="data d-none d-sm-flex ">
                  <h1 className="mb-0">100+</h1>
                  <p className="mb-0 text-dark">Brands</p>
                </div>
                <div className="data d-none d-sm-flex ">
                  <h1 className="mb-0">1M+</h1>
                  <p className="mb-0 text-dark">farmers</p>
                </div>
                <div className="data d-none d-sm-flex ">
                  <h1 className="mb-0">500+</h1>
                  <p className="mb-0 text-dark">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-middle py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5 d-flex flex-column">
              <h4 className="text-white mb-4">CULTIVAT</h4>
              <p className="text-white">
                Your company description goes here. You can provide a brief
                overview of your mission, vision, or any other relevant
                information.
              </p>
              <p className="text-white">
                Another paragraph about your company. Feel free to include key
                achievements, goals, or any other details you want to highlight.
              </p>
              {/* Download Links */}
              <div className="col-5">
                <h5 className="text-white mt-3 mb-0">Download Our App</h5>
                {/* Add Google Play Store Badge or other download links */}
                {/* Example of Google Play Store Badge */}
                <a href="/" target="_blank">
                  <img
                    src="images/google-play-badge.png"
                    width="200"
                    height="80"
                    alt="Download on Google Play"
                  />
                </a>
              </div>

              {/* Social Media Links */}
              <div className="col-5">
                <h5 className="text-white mb-3">Follow Us</h5>
                {/* Add social media icons/links */}
                <div className="social-links d-flex flex-row gap-15">
                  <a href="instagram_link" target="_blank">
                    <img
                      src="images/instagram.png"
                      width="40"
                      height="40"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="facebook_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/facebook.png"
                      width="40"
                      height="40"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    href="whatsapp_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/whatsapp.png"
                      width="40"
                      height="40"
                      alt="WhatsApp"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-4">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link to='/privacy-policy' className="text-white py-2 mb-1">Privacy Polices</Link>
                <Link to='/refund-policy' className="text-white py-2 mb-1">Refund Polices</Link>
                <Link to='/term-conditions' className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link to='/shipping-policy' className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1">FAQ's</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-contact">
                <p className="mb-3 text-white">Whatsapp</p>
                <span class="text-white font-semibold align-items-center justify-content-between">
                  1800 3000 2434
                </span>
                <p className="mt-3 mb-3 text-white">Missed Call to Order</p>
                <span class="text-white font-semibold align-items-center justify-content-between">
                  1800 3000 2434
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                CopyRight &copy; {new Date().getFullYear()} IVA AGRO Innovation
                pvt ltd
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
