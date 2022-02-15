import * as React from 'react'
import { Link } from 'react-router-dom'

import { paintings } from './paintinglist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function Paintings() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Paintings</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#fragment">Fragment</a></li>
						<li><a href="#connected">Connected</a></li>
						<li><a href="#magicfades">The Magic Fades</a></li>
						<li><a href="#giants">Among Giants II</a></li>
						<li><a href="#zodiak">Zodiak</a></li>
						<li><a href="#puddle">Puddle</a></li>
						<li><a href="#stoughton">Evening At Stoughton Pond</a></li>
						<li><a href="#time">Time As a Circle</a></li>
						<li><a href="#robinmoth">Robin Moth</a></li>
						<li><a href="#planets">Planetary Forms</a></li>
					</ul>
				</article>
			</section>

			{paintings.map((painting) => {
				const { title, jump, pic, size, medium, year, desc, left, right } = painting;
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

export default Paintings