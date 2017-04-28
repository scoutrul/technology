import React, { Component } from 'react'
import { career } from '../store/store'

const style = {
	ul: {
		listStyle: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		flexFlow: 'column wrap',
		padding: 0,

		li: {
			textAlign:''
		}
	}
	
}

export default class extends Component {
	render(){

		let items = career.map((item,i)=>{

			return (
				<li key={i}>
					<h3>{item.name} / <sub>{item.dates}</sub></h3>
					<i>{item.position}</i>
					<p>{item.descr}</p>
				</li>
				)
		});
		return (
				<section>
					<h1>Career</h1>
					<ul style={style.ul}>
						{items}
					</ul>
				</section>
		)
	}
}
