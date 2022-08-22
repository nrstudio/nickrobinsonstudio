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

// import DreamCards from './works/dreamcards'
import DigitalArt from './works/digital'
import MountainWaves from './works/mountain'
import ForestMagic from './works/forest'
import Washed from './works/washed'
import Demiurge from './works/demiurge'
import SolidSmoke from './works/solidsmoke'
import Drawings from './works/drawings'
import Paintings from './works/paintings'
import Lippincott from './works/lippincott'
import BrooksOfYork from './works/brooksofyork'
import WideWaters from './works/widewaters'
import FrontPorch from './works/frontporch'

import reportWebVitals from './reportWebVitals';

const routes = [
	{ 
		path: "/",
		component: Home,
		exact: true,
		routes: [
			{
				path: "/works/demiurge",
				component: Demiurge
			},
			{
				path: "/works/solidsmoke",
				component: SolidSmoke
			},
			{
				path: "/works/forest",
				component: ForestMagic
			},
			{
				path: "/works/washed",
				component: Washed
			},
			{
				path: "/works/mountain",
				component: MountainWaves
			},
			{
				path: "/works/digital",
				component: DigitalArt
			},
			{
				path: "/works/drawings",
				component: Drawings
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
				path: "/works/lippincott",
				component: Lippincott
			},
			{
				path: "/works/widewaters",
				component: WideWaters
			},
			{
				path: "/works/brooksofyork",
				component: BrooksOfYork
			},
			{
				path: "/works/frontporch",
				component: FrontPorch
			},
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
				path: "/works/demiurge",
				component: Demiurge
			},
			{
				path: "/works/solidsmoke",
				component: SolidSmoke
			},
			{
				path: "/works/forest",
				component: ForestMagic
			},
			{
				path: "/works/washed",
				component: Washed
			},
			{
				path: "/works/mountain",
				component: MountainWaves
			},
			{
				path: "/works/digital",
				component: DigitalArt
			},
			{
				path: "/works/drawings",
				component: Drawings
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
				path: "/works/lippincott",
				component: Lippincott
			},
			{
				path: "/works/widewaters",
				component: WideWaters
			},
			{
				path: "/works/brooksofyork",
				component: BrooksOfYork
			},
			{
				path: "/works/frontporch",
				component: FrontPorch
			},
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
