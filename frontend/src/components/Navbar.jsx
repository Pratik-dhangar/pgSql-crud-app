import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm mt-5 p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost w-40 text-3xl text-white">Clients</a>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-primary input-lg w-24 md:w-auto"
          />
        </div>
        <div className="navbar-end">
         <button class="btn btn-soft btn-primary btn-lg mr-5">Button</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
