import * as React from "react"
import { Link } from 'react-router-dom'

import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'

import '../styles/index.css'

import logo from '../img/logo.png'
import logomark from '../img/logomark-dark.png'

const DesktopNav = () => {
	return (
		<main className="header">
			<section className="head-wrap">
				<article>
					<Link to="/">
						<img src={logo} alt="Nick Robinson Studio" className="logotype donthover" />
						<img src={logomark} alt="Nick Robinson Studio" className="logomark-r donthover" />
					</Link>
				</article>
				<article> 
					<ul className="topnav">
						<Link to="/works">
							<li className="nav-item">Works</li>
						</Link>
						<Link to="/about">
							<li className="nav-item">About</li>
						</Link>
						<a href="http://www.nickrobinson.io" target="_blank" rel="noreferrer">
							<li className="nav-item">Design</li>
						</a>
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
					</ul>
				</article>
			</section>
		</main>
	)
}

export default DesktopNav