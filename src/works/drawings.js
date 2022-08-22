import * as React from 'react'
import { Link } from 'react-router-dom'

import { drawings } from './drawinglist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function Drawings() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Drawings</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#pilgrimage">The Pilgrimage</a></li>
						<li><a href="#drone">Drone Seeker</a></li>
						<li><a href="#escape">The Escape</a></li>
						<li><a href="#nectar">The Last Nectar</a></li>
						<li><a href="#flooded">Flooded</a></li>
						<li><a href="#transmission">Transmission / Reflection</a></li>
					</ul>
				</article>
			</section>

			{drawings.map((drawing) => {
				const { title, jump, pic, size, alt, year, desc, left, right, orientation } = drawing;
				return (
					<section>
						<article id={jump} className={orientation}>
							<div>
								<h2 className="spacing2 mobiletitle">{title}</h2>
								<img src={pic}
									 alt={alt}
									 className={left}
								/>
							</div>
							<div className={right}>
								<div className={workStyle.details}>
									<h2 className="spacing1 desktoptitle">{title}</h2>
									<h4>{size}</h4>
									<h4>{year}</h4>
									<p>{desc}</p>
								</div>

							</div>
						</article>
						<article className={` ${workStyle.topwrap} `}>
							<a href="#top" className={workStyle.btnback}>
		  						<FaChevronUp className={workStyle.arrowup}/>
					  		</a>
						</article>
					</section>
				);
			})}
		</main>
	)	
}

export default Drawings