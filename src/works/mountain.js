import * as React from 'react'
import { Link } from 'react-router-dom'

import { mountainwaves } from './mountainlist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function MountainWaves() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Mountain Waves</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
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
				const { title, jump, pic, left, right } = mountain;
				return (
					<section>
						<article id={jump} className={workStyle.stackedwork}>
							<div>
								<h2 className="spacing2">{title}</h2>
							</div>
							<div className={workStyle.center}>
								<img src={pic}
									 alt={title}
									 className="stackedimage"
								/>
							</div>
						</article>
						<article className={` ${workStyle.topwrap} `}>
							<a href="#top" className={workStyle.btnback}>
		  						<FaChevronCircleUp className={workStyle.arrowup}/> Back To Top
					  		</a>
						</article>
					</section>
				);
			})}
		</main>
	)
}

export default MountainWaves