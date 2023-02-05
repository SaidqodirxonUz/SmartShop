import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const cart = useSelector((s) => s.cart);

  console.log(cart);

  function handleLogout() {
    localStorage.removeItem("token");
    toast("Logged Out", { type: "info" });
    navigate("/login");
  }

  return (
    <header className="bg-info shadow sticky-top py-3">
      <nav className="navbar navbar-expand-lg container d-flex  align-items-center justify-content-between fs-4 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/SmartShopLogo.png" height={70} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="d-flex navbar-nav gap-2">
              <li className="nav-item ">
                <Link className="text-light nav-link fs-4" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="text-light nav-link fs-4" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link className=" btn btn-outline-light fs-4" to="/cart">
                  <i className="fa-solid fa-shopping-cart"></i>
                  <span className="badge text-bg-warning ms-2">
                    {cart.items.length}
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger fs-4"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
