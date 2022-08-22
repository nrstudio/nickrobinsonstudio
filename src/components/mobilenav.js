import React, { useState } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import '../styles/index.css'

import logomark from '../img/logomark.png'

import { HiOutlineMail } from 'react-icons/hi'
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri'

const MobileNav = () => {
	const [openMenu,setOpenMenu] = useState(false);
	return (
		<>
			<MenuBar>
				<Link to="/"><img src={logomark} alt="NRS" className="logomark"/></Link>

				<MenuIconContainer>
					<MenuIcon openMenu={openMenu} onClick={ () => setOpenMenu(!openMenu)}>
						<div/>
						<div/>
						<div/>
					</MenuIcon>
				</MenuIconContainer>

				<MenuLinks openMenu={openMenu}>
					<Link to="/"><img src={logomark} alt="Nick Robinson Studio" className="logostacked"/></ Link>
					<ul>
						<li>
							<Link onClick={ () => setOpenMenu(!openMenu)} to="/works">Artworks</Link>
						</li>
						<li>
							<a onClick={ () => setOpenMenu(!openMenu)} href="http://nickrobinson.bigcartel.com" target="_blank" rel="noreferrer">Shop</a>
						</li>
						<li>
							<Link onClick={ () => setOpenMenu(!openMenu)} to="/about">About</Link>
						</li>
						<li>
							<a onClick={ () => setOpenMenu(!openMenu)} href="http://www.nickrobinson.io" target="_blank" rel="noreferrer">Design</a>
						</li>
					</ul>
					<section className="menu-social">
						<article className="social-item">
							<a href="mailto:nickrobinsonart@gmail.com">
								<HiOutlineMail className="socialicon" /><h4>nickrobinsonart@gmail.com</h4>
							</a>
						</article>
						<article className="social-item">
							<a href="http://www.instagram.com/nickrxbnson" target="_blank" rel="noreferrer">
								<RiInstagramLine className="socialicon" /><h4>@nickrxbnson</h4>
							</a>
						</article>
						<article className="social-item">
							<a href="http://www.twitter.com/nickrxbnson" target="_blank" rel="noreferrer">
								<RiTwitterLine className="socialicon" /><h4>@nickrxbnson</h4>
							</a>
						</article>
					</section>
				</MenuLinks>

			</MenuBar>
		</>
	);
}

export default MobileNav

const MenuBar = styled.header `
	@media only screen and (min-width: 607px) {
		display: none;
	}
	padding: 1.5rem;
	height: 5rem;
	position: relative;
	width: 100%;
	background: white;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const MenuIconContainer = styled.div `
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const MenuIcon = styled.button `
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: transparent;
	height: 1.5rem;
	outline: none;
	border: none;
	z-index: 11;

	div {
		width: 1.5rem;
		height: .25rem;
		background: #333;
		transform-origin: 1px;
		transition: background-color 350ms, opacity 250ms, transform 250ms;

		:first-child {
			transform: ${ ({ openMenu }) => openMenu ? "rotate(45deg)" : "rotate(0)" };
			background: ${ ({ openMenu }) => openMenu ? "#000" : "#222" };
		}

		:nth-child(2) {
			opacity: ${ ({ openMenu }) => openMenu ? "0" : "1" };
			transform: ${ ({ openMenu }) => openMenu ? "translateX(-20px)" : "translate(0)" };
		}

		:nth-child(3) {
			transform: ${ ({ openMenu }) => openMenu ? "rotate(-45deg)" : "rotate(0)" };
			background: ${ ({ openMenu }) => openMenu ? "#000" : "#222" };
		}
	}
`

const MenuLinks = styled.nav `
	text-align: center;
	text-transform: uppercase;
	color: #333;
	font-size: 1.2rem;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;
	z-index: 5;
	top: 0;
	right: 0;
	height: 100vh;
	width: 100%;

	transition: opacity 200ms ease-out, visibility 0s ease-in;
	opacity: ${ ({ openMenu }) => openMenu ? "1" : "0"};
	visibility: ${ ({ openMenu }) => openMenu ? "visible" : "hidden" };

	a {
		font-family: 'new-order', monospace;
		font-weight: 700;
		letter-spacing: .05em;
		text-decoration: none;
		color: #333;
		transition: color 300ms;

		:hover {
			color: #666;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		text-align: center;
		list-style-type: none;
		margin: 15px 0;
	}

	li {
		margin: 10px 0;
	}

	h4 {
		font-family: 'new hero', Helvetica, sans-serif;
		font-size: .8rem;
		display: inline;
		margin-left: 10px;
		font-weight: 500;
	}
`












