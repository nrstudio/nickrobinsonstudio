import * as React from 'react'

import DesktopNav from './desktopnav.js'
import MobileNav from './mobilenav.js'

const Header = () => {
	return (
		<div id="top">
			<DesktopNav />
			<MobileNav />
		</div>
	)
}

export default Header