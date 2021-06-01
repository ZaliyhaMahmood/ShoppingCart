import React, { useState } from "react";

function Navbar(props) {
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
              onChange={props.handleChange}
              class="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.searchTerm}
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
