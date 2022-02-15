import * as React from 'react'
import { Link } from 'react-router-dom'

import { forestmagic } from './forestlist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function ForestMagic() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Forest Magic</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#forest1">Forest Magic I</a></li>
						<li><a href="#forest2">Forest Magic II</a></li>
						<li><a href="#forest3">Forest Magic III</a></li>
						<li><a href="#forest4">Forest Magic IV</a></li>
					</ul>
				</article>
			</section>

			{forestmagic.map((forest) => {
				const { title, jump, pic, left, right } = forest;
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

export default ForestMagic