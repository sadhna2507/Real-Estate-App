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
            <li id="nav_dropDown">
              <select name="" >
                <option value="">Manage Property</option>
                <option value="">Demo 1</option>
                <option value="">Demo 2</option>
                <option value="">Demo 3</option>
                
              </select>
            </li>
            <li>
            <select name="" id="nav_dropDown">
              <option value="">Resources</option>
                <option value="">Demo 1</option>
                <option value="">Demo 2</option>
                <option value="">Demo 3</option>
                
              </select>
            </li>
            <li >
            <Link to ="/Favorites" className="favorites">Favorites</Link>
            </li>

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
