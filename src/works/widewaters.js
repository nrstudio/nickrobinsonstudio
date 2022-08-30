import * as React from 'react'
import { Link } from 'react-router-dom'

import { widewaters } from './widelist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function WideWaters() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Wide Waters</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#widewaters1">"Cabin In The Woods"</a></li>
						<li><a href="#widewaters2">"2021"</a></li>
					</ul>
				</article>
			</section>

			{widewaters.map((widewaters) => {
				const { title, desc, jump, pic, alt, center } = widewaters;
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

export default WideWaters