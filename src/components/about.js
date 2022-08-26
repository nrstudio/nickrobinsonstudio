import * as React from "react"

// import aboutPic from '../img/about-gallery1.jpg'

// import { AiOutlineInstagram } from 'react-icons/ai'
// import { HiOutlineMail } from 'react-icons/hi'
// import { RiTwitterLine } from 'react-icons/ri'

function About() {
	return (
		<main className="about-container">
				<section className="about-pic">
				{/*	<img src={aboutPic}
						 className="splash-img"
						 alt="Nick Robinson Selfie"
					/>
					*/}	
					<article>
						<h1 className="hero-text spacing2">
							I make art from both physical and digital resources,
							exploring themes of both fleeting time and infinite possibility.
						</h1>
						<p>
							Digital photography, charcoal, ink, acrylic and oil paint,
							and abstract forms of graphic design are all a part of my
							toolbelt in my processes of discovery.
						</p>
				</article>
			</section>
			<section className="content-container">
				<article className="about-social">
					<div>
						<a href="mailto:nickrobinsonart@gmail.com">
							<b>E-mail</b>: nickrobinsonart@gmail.com
						</a>
					</div>
					<div>
						<a href="http://www.instagram.com/nickrxbnson" rel="noreferrer" target="_blank">
							<b>Instagram</b>: @nickrxbnson
						</a>
					</div>
					<div>
						<a href="http://www.twitter.com/nickrxbnson" rel="noreferrer" target="_blank">
							<b>Twitter</b>: @nickrxbnson
						</a>
					</div>
				</article>
				<article className="about-right">
					<p>
						Not all of my work has been made to print. My <a href="http://nickrobinson.bigcartel.com" rel="noreferrer" target="_blank">
						 online shop</a> has a limited selection of prints that I can ship to you,
						otherwise get in touch if there's something that speaks to
						you. I'm also available for commission!</p>
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