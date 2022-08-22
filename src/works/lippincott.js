import * as React from 'react'
import { Link } from 'react-router-dom'

import { lippincott } from './lippincottlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function Lippincott() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Chris Lippincott</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={` ${workStyle.topnav} spacing2 `}>
					<ul>
						<li><a href="#lippincott1">"Open Sketches"</a></li>
						<li><a href="#lippincott2">"Fall To Rise"</a></li>
						<li><a href="#lippincott3">"Undertow"</a></li>
						<li><a href="#lippincott4">"Unfolding"</a></li>
					</ul>
				</article>
			</section>

			{lippincott.map((lippincott) => {
				const { title, jump, pic, alt, center } = lippincott;
				return (
					<section>
						<article id={jump} className={workStyle.stackedwork}>
							
							<div className="spacing1">
								<img src={pic}
									 alt={alt}
									 className={center}
								/>
							</div>
							<div>
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

export default Lippincott