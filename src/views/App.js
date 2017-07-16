import React from 'react'
import render from 'react-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Helmet from 'react-helmet'
import mobileos from '../utils/Browser'


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			rendered: false
		}
	}
	componentWillMount() {
		this.state.rendered = true;
	}
	componentDidMount() {
		console.log(mobileos)
	}

	render() {
		return (
			<div id="page">
				<Helmet title="Jeff Williams Development" />
					<div id="content-wrapper">
						 { this.props.children }
					</div>
			</div>
		)
	}
}

module.exports = App
