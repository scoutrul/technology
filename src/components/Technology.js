import React, { Component } from 'react';
import {tech} from '../store/store';

let style = {
	ul: {
		listStyle: 'none',
		display: 'flex',
		justifyContent: 'space-around',
		flexFlow: 'row wrap',
		padding: 0
	},
	li: {
		textAlign: 'center'
	}

};

export default class extends Component {
	render(){
		let myTechnology = tech.map((item,i) => {
			return (
				<li key={i} style={style.li}>
					<a href={item.url} target='_blank'>
						{item.name}<br/>
						<img src={item.logo} alt={item.name} height='60px'/>
					</a>
				</li>
			)
		});

		return (
				<ul style={style.ul}>
					{myTechnology}
				</ul>
		)
	}
};

