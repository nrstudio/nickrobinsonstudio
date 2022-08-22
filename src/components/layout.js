import * as React from "react"
import PropTypes from "prop-types"

import Header from './header'
import '../styles/index.css'

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			<div>
				<main>
					{children}
				</main>
			</div>
		</React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout