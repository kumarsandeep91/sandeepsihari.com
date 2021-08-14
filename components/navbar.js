/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const Navbar = () => {
  return (
    <nav className="top-nav">
      <a className="top-nav-logo" href="/">
        <spna>&lt;Techno</spna> &nbsp; <span>Baba &#47;&gt;</span>
      </a>
      <ul className="top-nav-links">
        <li>
          <a href="/recipies">Recipies</a>
        </li>
        <li>
          <a href="/ingredients">Ingredients</a>
        </li>
        <li>
          <a href="/chef">Chef</a>
        </li>
        <li>
          <a href="/store">Store</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
