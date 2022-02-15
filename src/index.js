import React from 'react';
import ReactDOM from 'react-dom';
import {
		
  		BrowserRouter as Router,
  		Switch
  		} from "react-router-dom";

import './styles/index.css';

import Scroll from "./components/scroll"
import RouteWithSubRoutes from './components/subroutes'

import Layout from './components/layout'
import Footer from './components/footer'
import Home from './components/home'
import Works from './components/works'
import About from './components/about'

import DreamCards from './works/dreamcards'
import DigitalArt from './works/digital'
import MountainWaves from './works/mountain'
import ForestMagic from './works/forest'
import Psychedeliscapes from './works/psych'
import Drawings from './works/drawings'
import Paintings from './works/paintings'
import ArtPrints from './works/prints'
import DigitalPhoto from './works/photo'

import reportWebVitals from './reportWebVitals';

const routes = [
	{ 
		path: "/",
		component: Home,
		exact: true,
		routes: [
			{
				path: "/works/dreamcards",
				component: DreamCards
			},
			{
				path: "/works/digital",
				component: DigitalArt
			},
			{
				path: "/works/mountain",
				component: MountainWaves
			},
			{
				path: "/works/forest",
				component: ForestMagic
			},
			{
				path: "/works/psych",
				component: Psychedeliscapes
			},
			{
				path: "/works/prints",
				component: ArtPrints
			},
			{
				path: "/works/drawings",
				component: Drawings
			},
			{
				path: "/works/paintings",
				component: Paintings
			},
			{
				path: "/works/photo",
				component: DigitalPhoto
			}
		]
	},
	{
		path: "/about",
		component: About
	},
	{
		path: "/works",
		component: Works,
		routes: [
			{
				path: "/works/dreamcards",
				component: DreamCards
			},
			{
				path: "/works/digital",
				component: DigitalArt
			},
			{
				path: "/works/mountain",
				component: MountainWaves
			},
			{
				path: "/works/forest",
				component: ForestMagic
			},
			{
				path: "/works/psych",
				component: Psychedeliscapes
			},
			{
				path: "/works/prints",
				component: ArtPrints
			},
			{
				path: "/works/drawings",
				component: Drawings
			},
			{
				path: "/works/paintings",
				component: Paintings
			},
			{
				path: "/works/photo",
				component: DigitalPhoto
			}
		]
	}
];

function App() {
	return (

		<Router>
			<Scroll />
			<Layout />
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
			<Footer />
		</Router>
	)
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
