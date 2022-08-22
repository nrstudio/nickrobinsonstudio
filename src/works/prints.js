import * as React from 'react'
import { Link } from 'react-router-dom'

import { prints } from './printlist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function ArtPrints() {
	return (
		<main className="content">
			<section className="work-header">
				<article className={` ${workStyle.worktop}`}>
					<div className={` ${workStyle.worktitle}` }>
						<h1>Art Prints</h1>
					</div>
					<div className={` ${workStyle.backwrap} `}>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
				  		</Link>
					</div>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#cycles">Cycles</a></li>
						<li><a href="#newelement">New Element</a></li>
						<li><a href="#eye">Eye Sea</a></li>
						<li><a href="#modernvertigo">Modern Vertigo</a></li>
						<li><a href="#sink">Sink Into The Sky</a></li>
						<li><a href="#shapeshifter">Shapeshifter</a></li>
						<li><a href="#theotherisland">The Other Island</a></li>
					</ul>
				</article>
			</section>

			{prints.map((print) => {
				const { title, jump, pic, size, year, left, right } = print;
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
	);
}

export default ArtPrints