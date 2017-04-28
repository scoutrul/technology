import React, { Component } from 'react'
import { specialization } from '../store/store'

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

		let spec = specialization.map((item,i)=>{

			return (
				<li key={i} style={style.ul.li}>
					<h3>{item.name}</h3>
					<div className='specValue' style={{'width': item.value+'%','textAlign':'right'}}>{item.value}%</div>
				</li>
				)
		});
		return (
				<section>
					<h1>Specialization</h1>
					<ul style={style.ul}>
						{spec}
					</ul>
				</section>
		)
	}
}