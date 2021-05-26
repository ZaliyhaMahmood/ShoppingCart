import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div class="hamburger">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>

      <h2>Food Items</h2>

      <div>
        <form class="d-flex">
          <div class="input-group">
            <input
              class="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
