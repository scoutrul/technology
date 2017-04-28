import React, { Component } from 'react'
import {technology} from '../store/store'

let style = {
	ul: {
		listStyle: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		flexFlow: 'row wrap',
		padding: 0,
		fontSize: '1em'
	},
	li: {
		textAlign: 'center',
		margin: '1em'
	},
	img: {
		maxHeight: 120,
		maxWidth: 120,
		width: '6em'
	}

}

export default class extends Component {

	componentDidMount() {

	}

	render(){

		const shuffle = (a) => {
		    for (let i = a.length; i; i--) {
		        let temp = Math.floor(Math.random() * i);
		        [a[i - 1], a[temp]] = [a[temp], a[i - 1]];
		    }
		    return a;
		}
		
		const myTechnology = shuffle(technology).map((item,i) => {
			return (
				<li key={i} style={style.li}>
					<a href={item.url} target='_blank'>
						{item.name}<br/>
						<img src={item.logo} alt={item.name} style={style.img}/>
					</a>
				</li>
			)
		});


		return (
				<section>
					<h1>Technology and Tools</h1>
					<ul style={style.ul}>
						{myTechnology}
					</ul>
				</section>
		)
	}
}