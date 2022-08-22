import * as React from "react"
import { Link } from 'react-router-dom'

import '../styles/index.css'

import { HiOutlineMail } from 'react-icons/hi'
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri'

import logo from '../img/logo.png'
import logomark from '../img/logomark.png'

const Footer = () => {
	return (
		<React.Fragment>
			<main className="footer">
				<section className="foot-wrap">
					<article>
						<Link to="/">
							<img src={logo} alt="Nick Robinson Studio" className="logotype donthover" />
							<img src={logomark} alt="Nick Robinson Studio" className="logomark-r foot-logo donthover" />
						</Link>
					</article>
					<article> 
						<ul className="topnav">
								<li className="nav-item-footer">
									<Link to="/works">Artworks</Link>
								</li>		
								<li className="nav-item-footer">
									<a href="http://nickrobinson.bigcartel.com" target="_blank" rel="noreferrer">Shop</a>
								</li>
								<li className="nav-item-footer">
									<Link to="/about">About</Link>
								</li>
								<li className="nav-item-footer">
									<a href="http://www.nickrobinson.io" target="_blank" rel="noreferrer">Design</a>
								</li>
						</ul>
					</article>
				</section>
				<section className="foot-social">
					<div>
						<a href="mailto:nickrobinsonart@gmail.com">
							<HiOutlineMail className="socialicon"/><span className="socialname">nickrobinsonart@gmail.com</span>
						</a>
					</div>
					<div>
						<a href="http://www.instagram.com/nickrxbnson">
							<RiInstagramLine className="socialicon"/><span className="socialname">@nickrxbnson</span>
						</a>
					</div>
					<div>
						<a href="http://www.twitter.com/nickrxbnson">
							<RiTwitterLine className="socialicon"/><span className="socialname">@nickrxbnson</span>
						</a>
					</div>
				</section>
				<section>
					<p><small>All Images Created By And Belong To Nick Robinson, 2022</small></p>
				</section>
			</main>
		</React.Fragment>
	)
}

export default Footer