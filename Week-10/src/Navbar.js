import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Shortly
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
