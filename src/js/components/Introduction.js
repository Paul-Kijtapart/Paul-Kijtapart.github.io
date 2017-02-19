import React from 'react';


class CardProfile extends React.Component {
	render() {
		const location = this.props.aor_json.location;
		const school = this.props.aor_json.school;
		const major = this.props.aor_json.major;
		const interests = this.props.aor_json.interests.map(function(interest, index) {
			return (
				<h3 key={index}> {interest} </h3>
			);
		});
		return (
			<div className="cardProfile">
				<h1> Card Profile </h1>
				{interests}
				<h3> {school} </h3>
				<h3> {major} </h3>
				<h3> {location} </h3>
			</div>
		);
	}
};

class Description extends React.Component {
	render() {
		const name = this.props.aor_json.name;
		const status = this.props.aor_json.status;
		return (
			<div className="description">
				<h2> {name} </h2>
				<h4> {status} </h4>
			</div>
		);
	}
};

class Introduction extends React.Component {
	render() {
		return (
			<div className="introduction">
				<Description {...this.props} />
				<CardProfile {...this.props} />
			</div>);
	}

};

export default Introduction;