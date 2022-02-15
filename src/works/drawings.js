import * as React from 'react'
import { Link } from 'react-router-dom'

import { drawings } from './drawinglist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function Drawings() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Drawings</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
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
				const { title, jump, pic, size, medium, year, desc, left, right } = drawing;
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
								<small>Media</small>
								<h4>{medium}</h4>
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

export default Drawings