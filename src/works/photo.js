import * as React from 'react'
import { Link } from 'react-router-dom'

import { photos } from './photolist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function DigitalPhoto() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Digital Photography</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#campfiresky">Campfire Sky</a></li>
						<li><a href="#night">Night Blanket</a></li>
						<li><a href="#therefuge">The Refuge</a></li>
						<li><a href="#ceremony">Ceremony</a></li>
						<li><a href="#mistyday1">Misty Day I</a></li>
						<li><a href="#mistyday2">Misty Day II</a></li>
						<li><a href="#bird">Bird Sanctuary</a></li>
						<li><a href="#kettle">Kettle Pond</a></li>
					</ul>
				</article>
			</section>

			{photos.map((photo) => {
				const { title, jump, pic, year, left, right } = photo;
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
								<small>Year</small>
								<h4>{year}</h4>
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

export default DigitalPhoto