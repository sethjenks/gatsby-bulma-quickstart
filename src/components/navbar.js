import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';


const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item has-text-white is-bold"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
						Huey the Helicopter
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">

						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
