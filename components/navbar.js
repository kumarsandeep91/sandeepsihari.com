/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import { DEVICE_SIZES } from "../constants";
import { GithubIcon, HamburgerIcon } from "../svgs";

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

export const Github = (props) => {
	return (
		<a href="https://github.com/kumarsandeep91" alt="Github">
			<GithubIcon {...props} />
		</a>
	);
};

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	if (windowWidth >= DEVICE_SIZES.md) {
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

					<Github className="icon" />
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="top-nav flex-full-width space-between-inline center-block">
				<HamburgerIcon className="icon" />
				<Logo />
				<Github className="icon" />
			</nav>
		);
	}
};

export default Navbar;
