import React from 'react';
import { useRef } from 'react';

import { VscGrabber, VscClose } from 'react-icons/vsc';
const NavBar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header>
			<img src=" " alt="ghost"/>
			<nav ref={navRef}>
				<a href="./Home.js">Home</a>
				<a href="./Features.js">Features</a>
				<a href="./Pricing.js">Pricing</a>
				<a href="./Demo.js">Demo</a>
				<a href="./Blog.js">Blog</a>
				<button className="nav-close-btn" onClick={showNavbar}>
					<VscClose />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<VscGrabber />
			</button>
		</header>
	);
};

export default NavBar;
