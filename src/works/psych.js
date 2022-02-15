import * as React from 'react'
import { Link } from 'react-router-dom'

import { psychedeliscapes } from './psychlist.js'

import workStyle from '../styles/work.module.scss'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

function Psychedeliscapes() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Psychedeliscapes</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#psych1">Psychedeliscapes I</a></li>
						<li><a href="#psych2">Psychedeliscapes II</a></li>
						<li><a href="#psych3">Psychedeliscapes III</a></li>
						<li><a href="#psych4">Psychedeliscapes IV</a></li>
					</ul>
				</article>
			</section>

			{psychedeliscapes.map((psych) => {
				const { title, jump, pic } = psych;
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

export default Psychedeliscapes