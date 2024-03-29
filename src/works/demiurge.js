import * as React from 'react'
import { Link } from 'react-router-dom'

import { demiurge } from './demiurgelist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function Demiurge() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={workStyle.backwrap}>
					<h1>Demiurge</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#demi1">Demiurge: Flight</a></li>
						<li><a href="#demi2">Demiurge: Satellite</a></li>
				
					</ul>
				</article>
			</section>

			{demiurge.map((demiurge) => {
				const { title, jump, pic, alt, left, right } = demiurge;
				return (
					<section>
						<article id={jump} className={workStyle.work}>
							
							<div>
								<img src={pic}
									 alt={alt}
									 className={left}
								/>
							</div> 
							<div className={right}>
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

export default Demiurge