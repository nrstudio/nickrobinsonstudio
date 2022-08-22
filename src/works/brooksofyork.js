import * as React from 'react'
import { Link } from 'react-router-dom'

import { brooksofyork } from './brookslist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function BrooksOfYork() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>BrooksOfYork</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div> 
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#widewaters1">"I Got The Moon"</a></li>
						<li><a href="#widewaters2">"To Giants (Light Show Remix)"</a></li>
					
					</ul>
				</article>
			</section>

			{brooksofyork.map((brooksofyork) => {
				const { title, jump, pic, alt, center } = brooksofyork;
				return (
					<section>
						<article id={jump} className={workStyle.stackedwork}>
							
							<div>
								<img src={pic}
									 alt={alt}
									 className={center}
								/>
							</div>
							<div>
								<h2 className="spacing2">{title}</h2>
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

export default BrooksOfYork