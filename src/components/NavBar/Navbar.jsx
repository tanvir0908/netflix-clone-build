import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-container flex justify-between">
        <img
          className="nav-logo"
          src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
          alt=""
        />
        <img
          className="nav-avatar"
          src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
