import React from 'react'


export default class Row extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		this.classList = this.props.className ? this.props.className + ' row' : 'row'

			return (
				<div id={ this.props.id } className={ this.classList } style={ this.props.style } >
					{this.props.children}
				</div>
			)
	}
}
