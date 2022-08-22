import * as React from "react"
import { Link, Switch } from "react-router-dom"

import RoutesWithSubRoutes from './subroutes'
import { list } from '../works/list'



function Works({ routes }) {
	return (
		<main className="view-container">
			<Switch>
				{routes.map((route, i) => (
					<RoutesWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		
			<section className="content">
				<h1>Artworks</h1>
				
				<p>Please <a href="mailto:nickrobinsonart@gmail.com">get in touch with me</a> if you are interested
				   in buying any art, or interested in commissioning me!</p>
			</section>

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
									className="work-thumb donthover"
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
		</main>
		
	)
}

export default Works