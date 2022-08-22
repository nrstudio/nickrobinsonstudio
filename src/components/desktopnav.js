import * as React from "react"
import { NavLink } from 'react-router-dom'

import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'

import '../styles/index.css'

import logo from '../img/logo.png'
import logomark from '../img/logomark.png'

const DesktopNav = () => {

	return (
		<main className="header">
			<section className="head-wrap">
				<article>
					<NavLink to="/">
						<img src={logo} alt="Nick Robinson Studio" className="logotype" />
						<img src={logomark} alt="Nick Robinson Studio" className="logomark-r" />
					</NavLink>
				</article>
				
				
						<ul className="topnav">
							<NavLink activeStyle={{ color: '#7f7854' }} to="/works">
								<li className="nav-item">Artworks</li>
							</NavLink>
							<a href="http://nickrobinson.bigcartel.com" target="_blank" rel="noreferrer">
								<li className="nav-item">Shop</li>
							</a>
							<NavLink  activeStyle={{ color: '#7f7854' }}  to="/about">
								<li className="nav-item">About</li>
							</NavLink>
							<a href="http://www.nickrobinson.io" target="_blank" rel="noreferrer">
								<li className="nav-item">Design</li>
							</a>
						</ul>
						
						<div className="nav-icons">
								<a href="mailto:nickrobinsonart@gmail.com">
									<HiOutlineMail className="socialicon"/>
								</a>
								<a href="http://www.instagram.com/nickrxbnson">
									<RiInstagramLine className="socialicon"/>
								</a>
								<a href="http://www.twitter.com/nickrxbnson">
									<RiTwitterLine className="socialicon"/>
								</a>
						</div>
					
					
				
			</section>
		</main>
	)
}

export default DesktopNav