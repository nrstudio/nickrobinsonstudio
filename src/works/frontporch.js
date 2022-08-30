import * as React from 'react'
import { Link } from 'react-router-dom'

import { frontporch } from './frontporchlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function FrontPorch() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Front Porch Brewing</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#frontporch1">Dark Remedy Beer Label</a></li>
						<li><a href="#frontporch2">Devil Children Beer Label</a></li>

					</ul>
				</article>
			</section>

			{frontporch.map((frontporch) => {
				const { title, jump, pic, center, alt } = frontporch;
				return (
					<section>
						<article id={jump} className={workStyle.stackedwork}>
							
							<div>
								<img src={pic}
									 alt={alt}
									 className={center}
								/>
							</div>
							<div className={workStyle.workdetails}>
								<h2>{title}</h2>
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

export default FrontPorch