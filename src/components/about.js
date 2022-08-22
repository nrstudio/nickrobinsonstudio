import * as React from "react"

import heroimg from '../img/hero-image.jpg'

import { AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { RiTwitterLine } from 'react-icons/ri'

function About() {
	return (
		<main className="container">
			<section className="about-container">
				<article className="about-left">
					
					<h3 className="hero-text spacing2">
						I am a digital artist, also utilizing analog
						methods such as paint, ink, charcoal and photography.
					</h3>
					<p>
						Since the raw stages of adolescence, I’ve always found
						interest in taking what I see, and making it different.
						Whether its adding an ethereal layer to something mundane,
						or creating an imaginary space to fill a void,
						I always found solace in atmospheric vibes.
					</p>
				</article>
				<article className="about-right">
					<img src={heroimg}
						 className="heroimg"
						 alt="Nick Robinson Selfie"
					/>
					
				</article>
			</section>
			<section className="about-container">
				<article className="left">
					<p>
						Most of my work here that you see is available for
						sale. If you wish to commission me for new work, or
						are interested in purchasing a digital asset for your
						own, please get in touch!
					</p>
				</article>
				<article className="about-social right">
					<div>
						<HiOutlineMail className="socialicon"/>
						<a href="mailto:nickrobinsonart@gmail.com">
							nickrobinsonart@gmail.com
						</a>
					</div>
					<div>
						<AiOutlineInstagram className="socialicon"/>
						<a href="http://www.instagram.com/nickrxbnson">
							@nickrxbnson
						</a>
					</div>
					<div>
						<RiTwitterLine className="socialicon"/>
						<a href="http://www.twitter.com/nickrxbnson">
							@nickrxbnson
						</a>
					</div>
				</article>
			</section>
	{/*		<section className="heroimgwrap">
				<img src={heroimg}
						 className="heroimgmobile donthover"
						 alt="Nick Robinson Selfie"
					/>
			</section>*/}
		</main>
	)
}

export default About