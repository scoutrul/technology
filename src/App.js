import React, { Component } from 'react';
import './App.css';




let tech = [
		{
			name: "CSS FlexBox",
			logo: "http://hagaizamir.com/wp-content/uploads/2013/03/css3_logo1-186x160.png",
			url: "https://www.w3schools.com/css/css3_intro.asp"
		},
		{
			name: "CSS Grid",
			logo: "http://hagaizamir.com/wp-content/uploads/2013/03/css3_logo1-186x160.png",
			url: "https://www.w3schools.com/css/css3_intro.asp"
		},
		{
			name: "React",
			logo: "https://cdn.worldvectorlogo.com/logos/react.svg",
			url: "https://facebook.github.io/react/"
		},
		{
			name: "Redux",
			logo: "https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png",
			url: "http://redux.js.org/"
		}
	];


class Technology extends Component {
	render(){
		let myTechnology = tech.map((item,i) => {
			return (
				<li key={i}>
					<a href={item.url} target='_blank'>
						{item.name}<br/>
						<img src={item.logo} height='60px'/>
					</a>
				</li>
			)
		});

		return (
				<ul>
					{myTechnology}
				</ul>
		)
	}
}






class App extends Component {
	render() {
		return (
			<div className="App">
			 <Technology/>
			</div>
		);
	}
}

export default App;
