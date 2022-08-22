import * as React from 'react'
import { Link } from 'react-router-dom'

import { washed } from './washedlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function Washed() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Washed</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#washed1">Washed I</a></li>
						<li><a href="#washed2">Washed II</a></li>
				
					</ul>
				</article>
			</section>

			{washed.map((washed) => {
				const { title, jump, pic, alt, left, right } = washed;
				return (
					<section>
						<article id={jump} className={workStyle.work}>
							
							<div className={workStyle.left}>
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

export default Washed