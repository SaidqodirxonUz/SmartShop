import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  return (
    <section id="footer-shop">
      <footer className="">
        <div className="container ">
          <div className="row ">
            <div className="col-md-4">
              <span className="copyright">
                <img src="/SmartShopLogo.png" height={70} alt="" />
              </span>
            </div>
            <div className="col-md-4 ">
              <ul className="list-inline quicklinks">
                <li>
                  <h6 className=" mt-4"> ©️ All Right Reserved</h6>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ">
              <ul className="list-inline social-buttons ">
                <div className="media-icons align-content-end">
                  <li className="list-inline-item text-light">
                    <a
                      href="https://github.com/Saidqodirxon"
                      className="btn btn-outline-warning  rounded"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item text-light">
                    <a
                      href="http://t.me/Saidqodirxonuz"
                      className="btn btn-outline-warning  rounded"
                      target="_blank"
                    >
                      <i className="fab fa-telegram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item text-light">
                    <a
                      className="btn btn-outline-warning  rounded"
                      href="https://instagram.com/saidqodirxonuz?utm_medium=copy_link"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item text-light">
                    <a
                      className="btn btn-outline-warning  rounded"
                      href="https://www.youtube.com/channel/@saidqodirxonuz"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
