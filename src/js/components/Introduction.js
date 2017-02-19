import React from 'react';


class CardProfile extends React.Component {
	render() {
		return (
			<div className="cardProfile">
				<h2> Card Profile </h2>
			</div>
		);
	}
};

class Introduction extends React.Component {
	render() {
		return (
			<div className="introduction">
				<CardProfile />
			</div>);
	}

};

export default Introduction;