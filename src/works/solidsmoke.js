import * as React from 'react'
import { Link } from 'react-router-dom'

import { solidsmoke } from './solidlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function SolidSmoke() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Solid Smoke</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#solid1">Solid Smoke I</a></li>
						<li><a href="#solid2">Solid Smoke II</a></li>
				
					</ul>
				</article>
			</section>

			{solidsmoke.map((solidsmoke) => {
				const { title, jump, pic, alt, left, right } = solidsmoke;
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

export default SolidSmoke