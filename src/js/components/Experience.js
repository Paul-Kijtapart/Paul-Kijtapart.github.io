import React from 'react';


class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<p> I am card level. </p>
				{this.props.image}
			</div>
		);
	}
};

class Experience extends React.Component {
	render() {
		return (
			<div className="experience">
				<h2> Experience </h2>
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
};

export default Experience;