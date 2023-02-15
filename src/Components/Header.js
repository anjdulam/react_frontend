import React from "react";
import { Link} from "react-router-dom";



function Header() 
{
  return (
    <div>
       <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <div class="container">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav nav nav-fill w-100">
              <li class="nav-item">
                <a class="nav-link" href="#a">ABOUT US</a>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to ="/login">LOGIN</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/signup">SIGNUP</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

