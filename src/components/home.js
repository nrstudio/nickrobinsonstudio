import * as React from "react"
import { Link } from "react-router-dom";

import { list } from '../works/list'

import splash from '../img/splash/dual.jpg'

function Home() {
	return (
		<div>
			<main className="view-container">
				<section className="content">
					
						<img src={splash} alt="Intro splash artwork" className="splash-img donthover"/>
						
					
				</section>
			</main>

			<section className={` content-container $(worksStyle.projectanimate`}>
				
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

								{/*<div className="work-mobile-info">
									<h2>{title}</h2>
									<small>{desc}</small>
								</div>*/}
							</Link>
						</article>
					)
				})}
			</section>
		</div>
	)
}

export default Home