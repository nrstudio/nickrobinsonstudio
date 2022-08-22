import * as React from 'react'
import { Link } from 'react-router-dom'

import { paintings } from './paintinglist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function Paintings() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={workStyle.backwrap}>
					<h1>Paintings</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
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
					</ul>
				</article>
			</section>

			{paintings.map((painting) => {
				const { title, jump, pic, size, alt, year, desc, left, right, orientation } = painting;
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
									
								</div>
								<p>{desc}</p>
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

export default Paintings