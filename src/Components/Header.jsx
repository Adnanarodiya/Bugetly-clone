import React from "react";

export const Header = () => {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] text-primary-content ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Buggetly</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="btn btn-ghost normal-case text-lg ">Home</a>
            </li>
            <li>
              <a className="btn btn-ghost normal-case text-lg">Contact Us</a>
            </li>

            <li>
              <a className="btn btn-ghost normal-case text-lg">About</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
