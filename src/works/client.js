import * as React from 'react'
import { Link } from 'react-router-dom'

import workStyle from '../styles/work.module.scss'

import { client } from './clientlist.js'

import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa'

import clfallphone from './client/cl-fall-phone.jpg'
import clfall from './client/cl-fall.jpg'
import gatesart from './client/gates-art.jpg'
import gatesbook1 from './client/gates-booklet1.jpg'
import gatesbook2 from './client/gates-booklet-2.jpg'
import gatescover from './client/gates-cover.jpg'
import gatesinside from './client/gates-inside.jpg'
import gateslogo from './client/gates-logo.jpg'

function Client() {
	return (
		<main className="content">
			<section className="work-header">
				<h1>Client Work</h1>
				<article className={` ${workStyle.backwrap} `}>
					<Link to="/works" className={workStyle.btnback}>
  						<FaChevronCircleLeft className={workStyle.arrowup}/> Back To All Works
			  		</Link>
				</article>
				<article className={workStyle.topnav}>
					<ul>
						<li><a href="#lippincott">Chris Lippincott</a></li>
						<li><a href="#gates">The Gates of Ivory</a></li>
					</ul>
				</article>
			</section>

			{client.map((client) => {
				const { title, jump, pic, size, medium, year, desc, left, right } = client;
				return (
					<section>
						<article id={jump} className={workStyle.work}>
							<div className={workStyle.left}>
								<h2 className="spacing2 mobiletitle">{title}</h2>
								<img src={pic}
									 alt={title}
									 className={left}
								/>
							</div>
							<div className={right}>
								<h2 className="spacing2 desktoptitle">{title}</h2>
								<div className={workStyle.details}>
									<div>
										<small>Dimensions</small>
										<h4>{size}</h4>
									</div>
									<div>
										<small>Year</small>
										<h4>{year}</h4>
									</div>
								</div>
								<p>{desc}</p>
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

export default Client