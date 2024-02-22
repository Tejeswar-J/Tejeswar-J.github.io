import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip d-none d-sm-flex">
        <div className="container-xxl">
          <div className="row no-gutters overflow-auto">
            <div className="col-12 col-sm-6 bg-footerColor2 h-13 px-2 d-flex align-items-center justify-content-between">
              <p className="text-white mb-0">
                Free Delivery on your First order
              </p>
            </div>
            <div className="col-12 col-sm-6 h-12 px-2 d-flex align-items-center justify-content-evenly">
              <a className="text-white px-2.5 link-with-border" href="sell">
                Sell on Cultivat
              </a>
              <a
                className="text-white ms-2 px-2.5 link-with-border"
                href="Connect"
              >
                Bulk OrdersName
              </a>
              <a
                className="text-white ms-2 px-2.5 link-with-border"
                href="Corporate site"
              >
                Corporate Site
              </a>
              <a
                className="text-white ms-2 px-2.5 link-with-border"
                href="contact"
              >
                Contact :
                <span class="text-white font-semibold align-items-center justify-content-between">
                  1800 3000 2434
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  CULTIVAT
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here ..."
                  aria-label="Search Product Here ..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"></BsSearch>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-evenly">
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-15 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">Login</p>
                  </Link>
                </div>
                <div>
                  <Link to= "/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="Cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-evenly">
                <div className="dropdown col-2">
                  <div
                    className="dropdown-header"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Categories</span>
                    <div className="dropdown-arrow">&#9662;</div>
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink>Seeds</NavLink>
                    </li>
                    <li>
                      <NavLink>Fungicides</NavLink>
                    </li>
                    <li>
                      <NavLink>Organic</NavLink>
                    </li>
                    <li>
                      <NavLink>Nutrients</NavLink>
                    </li>
                    <li>
                      <NavLink>Pesticides</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="menu-links d-flex flex-direction-row justify-content-around col-10">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/product">C-Store</NavLink>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/services">C-Service</NavLink>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/rental">C-Rental</NavLink>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/doctor">C-Doctor</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
