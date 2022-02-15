import * as React from 'react'
import { Link } from 'react-router-dom'

import { digital } from './digitallist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function DigitalArt() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Digital Art</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
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
				const { title, jump, pic, size, year, desc, left, right } = digital;
				return (
					<section>
						<article id={jump} className={workStyle.work}>
							<div className={workStyle.left}>
								<h2 className="spacing2 mobiletitle">{title}</h2>
								<img src={pic}
									 alt={title}
									 className={left}
								/>
							</div>
							<div className={right}>
								<h2 className="spacing2 desktoptitle">{title}</h2>
								<div className={workStyle.details}>
									<div>
										<small>Dimensions</small>
										<h4>{size}</h4>
									</div>
									<div>
										<small>Year</small>
										<h4>{year}</h4>
									</div>
								</div>
								<p>{desc}</p>
							</div>
						</article>
						<article className={` ${workStyle.topwrap} `}>
							<a href="#top" className={workStyle.btnback}>
		  						<FaChevronCircleUp className={workStyle.arrowup}/> Back To Top
					  		</a>
						</article>
					</section>
				);
			})}
		</main>
	)
}

export default DigitalArt