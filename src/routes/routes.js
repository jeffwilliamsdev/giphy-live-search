var React = require('react')
import { Redirect } from 'react-router'

import App from '../views/App'
import Home from '../views/Home'
import FourOFour from '../views/FourOFour'
// import ReactGA from 'react-ga'

function createElement(Component, props) {
	return <Component { ...props } data={ window.DATA } />
}

import { useScroll } from 'react-router-scroll'

// google analytics stuff
// ReactGA.initialize('UA-98753551-1');
//
// function logPageView() {
//   ReactGA.set({ page: window.location.pathname });
//   ReactGA.pageview(window.location.pathname);
// }

import { applyRouterMiddleware, browserHistory, IndexRoute, Route, Router, ReactRouter } from 'react-router'

// set onUpdate={ typeof window === 'object' ? logPageView : null } on Router Component
const routes =
		<Router history={ browserHistory } createElement={ createElement }>
			<Route path='/' component={ App } >
				<IndexRoute component={ Home } />
			</Route>
			<Route path="*" component={ FourOFour } />
		</Router>

export default routes
