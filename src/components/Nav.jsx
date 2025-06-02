import React from "react";

function Nav() {
    return(
    <>

  <header class="header">
    <div class="container">
      <a href="index.html"><img src="assets/redwolflogo.png" alt="Device Secure Logo" class="logo"/></a>
      <nav class="nav" id="navMenu">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="gallery.html">Events</a></li>
          <li><a href="https://admin.tcopsztpro.in/login">Login</a></li>
        </ul>
        <div class="download-buttons">
        <a href="assets/T-COP-ZT-PRO.apk" class="btn btn-primary">Download T-COPS ZT PRO</a>
        <a href="assets/T-COP-ZT-PLUS.apk" class="btn btn-primary">Download T-COPS ZT PLUS</a>
      </div> 
      </nav>
      <button class="menu-button" id="menuButton" onclick="toggleMenu()">&#9776;</button>
    </div>
  </header>

    </>
)};


export default Nav;