import React from 'react';



class CardProfile extends React.Component {
	render() {
		const abs_parent_image = "data/images/introduction";

		return (
			<div className="cardProfile">
				<div className="second_card_profile_content_wrapper">
					<div className="card_profile_content_wrapper">
						<div className="profile_image_wrapper"> 
							<img
								className="profile_image"
								src={abs_parent_image + "/profilePic.introduction.jpg"}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

class Description extends React.Component {
	render() {
		const name = this.props.aorInfo.name;
		const status = this.props.aorInfo.status;
		const interests = this.props.aorInfo.interests.map(function(interest, index) {
			return (
				<li 
					key={index}
				> 
					{interest} 
				</li>
			);
		});
		const location = this.props.aorInfo.location;
		const education = this.props.aorInfo.education;
		const school = education.school;
		const major = education.major;

		return (
			<div className="description">
				<div className="description_content_wrapper">
					<h1> {name} </h1>
					<h3><strong> Major : </strong> {major} </h3>
					<h3><strong> School : </strong> {school} </h3>
					<h3><strong> Location : </strong> {location} </h3>
					<h4> {status} </h4>
					<p> Interests : </p>
					<ul>
						{interests}
					</ul>
				</div>
			</div>
		);
	}
};

class Introduction extends React.Component {
	render() {

		return (
			<div className="introduction">
				<CardProfile {...this.props} />
				<Description {...this.props} />
			</div>);
	}

};

export default Introduction;