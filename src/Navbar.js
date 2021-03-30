import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "./atoms";

function Navbar() {
  const [user, setUser] = useRecoilState(userAtom);
  function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser({
      isAuth: false,
      user: null,
    });
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/" style={{ "text-decoration": "none" }}>
          <h4 className="title">Ecommerce Website</h4>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          {user.isAuth ? (
            <Link onClick={logout}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
      <div className="burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
