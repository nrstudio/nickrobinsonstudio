import * as React from 'react'
import { Link } from 'react-router-dom'

import { dreamcards } from './dreamcardlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function DreamCards() {
	return (
		<main className="content">
			<section className="work-header">
			
				<article className={` ${workStyle.backwrap} `}>
					<h1>Dream Cards</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
			  		</div>
				</article>
			
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#cards20">Dream Cards XX-XVI</a></li>
						<li><a href="#cards15">Dream Cards XV-XI</a></li>
						<li><a href="#cards10">Dream Cards X-VI</a></li>
						<li><a href="#cards5">Dream Cards V-I</a></li>
					</ul>
				</article>
			</section>

			<section>
				<h4>2020-2021</h4>
				<p>My Dream Cards series was conceptualized as a defining feature for my <a href="https://www.nickrobinson.io/projects/dreamtracer" target="_blank" rel="noreferrer">Dream Tracer dream journal mobile app</a>.
				   I drew each card idea using Micron Pen and Copic Pen, and scanned
				   them in for digital production. I have plans to get these printed in
				   a physical deck form, soon!
				</p>
			</section>

			<section className={workStyle.dreamcardgrid}>
				{dreamcards.map((dreamcard) => {
					const { title, jump, pic, alt } = dreamcard;
					return (
						
							<article id={jump} className={workStyle.cardwrap}>
								<div>
									<img src={pic}
										 alt={title}
										 className={workStyle.dreamcard}
									/>
								</div>
							</article>		
					);
				})}
			</section>

			<section className={` ${workStyle.topwrap} `}>
				<a href="#top" className={workStyle.btnback}>
						<FaChevronUp className={workStyle.arrowup}/>
		  		</a>
			</section>
		</main>
	)
}

export default DreamCards