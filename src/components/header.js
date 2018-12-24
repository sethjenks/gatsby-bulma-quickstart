import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import hueyDesktop from '../images/huey_hero_desktop-bg.png';
import huey from '../images/huey.png';
import Navbar from './navbar';


const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="content">
					<span >
							<img className="huey" src={huey} alt="huey-figure" />
						</span>

							<h1 className="is-size-1 has-text-centered hero-title">
								Say Hello to Huey
							</h1>
							<p className="subtitle is-size-3 has-text-centered">
								Coming 2019
							</p>

						</div>

				</article>
			</div>
		</div>
	</section>
);

export default Header;
