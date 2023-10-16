import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-xl">
        <div class="container-fluid">
          <a class="logo" href="/">
            PDF-Security
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="nav navbar-nav ms-auto">
              <li class="nav-item">
                {/* <a class="nav-link" aria-current="page" onClick={handleClick}>
                  See-Products
                </a> */}
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" aria-current="page" onClick={toggleModal}>
                  Add-Product
                </a> */}
              </li>
              {/* <li
                class="nav-item"
                style={{ display: state.provider ? "none" : "block" }}
              >
                <a class="nav-link">Connect-Wallet</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
