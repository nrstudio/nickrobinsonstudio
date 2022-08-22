import * as React from 'react'
import { Link } from 'react-router-dom'

import { mountainwaves } from './mountainlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function MountainWaves() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Mountain Waves</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
				  	</div>
				</article>
				
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#waves1">Mountain Waves I</a></li>
						<li><a href="#waves2">Mountain Waves II</a></li>
						<li><a href="#waves3">Mountain Waves III</a></li>
						<li><a href="#waves4">Mountain Waves IV</a></li>
					</ul>
				</article>
			</section>

			{mountainwaves.map((mountain) => {
				const { title, jump, pic, alt, left, right, orientation } = mountain;
				return (
					<section>
						<article id={jump} className={orientation}>
							
							<div>
								<img src={pic}
									 alt={alt}
									 className={left}
								/>
							</div>
							<div className={right}>
								<h2 className="spacing1">{title}</h2>
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

export default MountainWaves