import * as React from 'react'
import { Link } from 'react-router-dom'

import { digital } from './digitallist.js'

import workStyle from '../styles/work.module.scss'

import { FaTable, FaChevronUp } from 'react-icons/fa'

function DigitalArt() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Digital Art</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaTable className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#kollapse">Kollapse</a></li>
						<li><a href="#melt">Melt Rock</a></li>
						<li><a href="#geo">Geometrigram</a></li>
						<li><a href="#modernruins">Modern Ruins</a></li>
						<li><a href="#owl">Owlluminati</a></li>
						<li><a href="#spectral1">Spectral Rhythms I</a></li>
						<li><a href="#spectral2">Spectral Rhythms II</a></li>
					</ul>
				</article>
			</section>

			{digital.map((digital) => {
				const { title, jump, pic, alt, year, left, right } = digital;
				return (
					<section>
						<article id={jump} className={workStyle.work}>
							<div className={workStyle.left}>
								<h2 className="spacing2 mobiletitle">{title}</h2>
								<img src={pic}
									 alt={alt}
									 className={left}
								/>
							</div>
							<div className={right}>
								<h2 className="desktoptitle">{title}</h2>
								<div className={workStyle.details}>

										<h4>{year}</h4>
									
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

export default DigitalArt