import React from "react";

import "./style.css";
import logo from "../../assets/svg/logo.svg";

function Header() {
  return (
    <div
      className="navbar bg-black text-white ps-5 me-7"
      style={{ height: 100 }}
    >
      {/* <div className="navbar-item w-25 ms-5 h1">Lens AI </div> */}
      <img src={logo} alt="" />

      <div
        className="navbar-nav container-sm flex-row 
        align-item-center w-50
        justify-content-between me-1"
      >
        <div className="navbar-item lens">lens 101 </div>
        <button className="btn bg-primary rounded text-white m-7">
          Log In/ Sign Out
        </button>
      </div>
    </div>
  );
}

export default Header;
