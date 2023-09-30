import React, { useEffect, useState } from "react";
import "./Navbar.css";
import avatar from "../../assets/avatar.png";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${showNav && "nav-black"}`}>
      <div className="nav-container flex justify-between items-center">
        <img
          className="nav-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img className="nav-avatar" src={avatar} alt="" />
      </div>
    </div>
  );
}
