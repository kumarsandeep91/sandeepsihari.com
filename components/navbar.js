/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";

export const Logo = () => {
	return (
		<a href="/" className="logo">
			<img
				srcSet="
      /logo-sm.png 576w,
      /logo-md.png 768w,
      /logo-lg.png 992w,
      /logo-xl.png 1200w,
      /logo-xxl.png 1400w,
    "
				src="/logo-sm.png"
				alt="Logo"
			/>
		</a>
	);
};

export const Github = () => {
	return (
		<a href="https://github.com/kumarsandeep91" alt="Github">
			<img
				srcSet="
      /social/Icon_github-sm.png 576w,
      /social/Icon_github-md.png 768w,
      /social/Icon_github-lg.png 992w,
      /social/Icon_github-xl.png 1200w,
      /social/Icon_github-xxl.png 1400w,
    "
				src="/social/Icon_github-sm.png"
				alt="Github Icon"
			/>
		</a>
	);
};

export const Hamburger = () => {
	return (
		<img
			className="hamburger"
			src="/icons/Icon_hamburger.svg"
			alt="More options"
		/>
	);
};

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	if (windowWidth >= 768) {
		return (
			<nav className="top-nav flex center">
				<div className="content flex-full-width space-between-inline center-block">
					<Logo />

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

					<Github />
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="top-nav flex-full-width space-between-inline center-block">
				<Hamburger />
				<Logo />
				<Github />
			</nav>
		);
	}
};

export default Navbar;
