import * as React from 'react'
import { Link } from 'react-router-dom'

import { forestmagic } from './forestlist.js'

import workStyle from '../styles/work.module.scss'

import { FaEye, FaChevronUp } from 'react-icons/fa'

function ForestMagic() {
	return (
		<main className="content">
			<section className="work-header">
				
				<article className={` ${workStyle.backwrap} `}>
					<h1>Forest Magic</h1>
					<div>
						<Link to="/works" className={workStyle.btnback}>
	  						<FaEye className={workStyle.arrowup}/> View All Artwork
				  		</Link>
			  		</div>
				</article>

				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#forest1">Forest Magic I</a></li>
						<li><a href="#forest2">Forest Magic II</a></li>
						<li><a href="#forest3">Forest Magic III</a></li>
					</ul>
				</article>
			</section>

			{forestmagic.map((forest) => {
				const { title, jump, pic, alt, left, right, orientation } = forest;
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

export default ForestMagic