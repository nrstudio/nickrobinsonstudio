import * as React from "react"
import { Link } from "react-router-dom";

import { list } from '../works/list'

import logomark from '../img/logomark.png'
import logostacked from '../img/logo-stacked.png'

function Home() {
	return (
		<div>
			<main className="view-container">
				<section className="content">
					<article className="overlay">
						<img src={logostacked} alt="Nick Robinson Studio" className="type-overlay"/>
						<img src={logomark} alt="NRS" className="logo-overlay donthover"/>
					</article>
				</section>
			</main>

			<section className={` content-container $(worksStyle.projectanimate`}>
				<article>
					<h1>Art Works</h1>
					<p>These sections are primarily organized either by
					   medium or by series.</p>
					<p>Please <a href="mailto:nickrobinsonart@gmail.com">get in touch with me</a> if you are interested
					   in buying any art, or interested in commissioning me!</p>
				</article>
				{list.map((work) => {
					const { title, thumb, desc, url } = work;
					return (
						<article className="work-card">
							<Link to={url}>
								<img
									key={work}
									src={thumb}
									alt={title}
									className="home-thumb donthover"
								/>

								<div className="work-card-info">
									<h2>{title}</h2>
									<small>{desc}</small>
								</div>
								<div className="home-card-info-2">
									<h2>{title}</h2>
									<small>{desc}</small>
								</div>

								<div className="work-mobile-info">
									<h2>{title}</h2>
									<small>{desc}</small>
								</div>
							</Link>
						</article>
					)
				})}
			</section>
		</div>
	)
}

export default Home