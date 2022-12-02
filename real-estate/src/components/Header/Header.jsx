import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="sub_navbar">
          <div className="icon_heading">
            <i class="fa-solid fa-house-chimney"></i>
            <h1 className="estate">Estatory</h1>
          </div>
          <ul className="sub_heading">
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>
              Manage Property<i className="fa fa-angle-down"></i>
            </li>
            <li>
              Resources<i className="fa fa-angle-down"></i>
            </li>
            <Link to ="/Favorites"><li className="favorites">Favorites</li></Link>

          </ul>
          <div className="login_signup">
            <button className="login">Login</button>
            <button className="singup">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
