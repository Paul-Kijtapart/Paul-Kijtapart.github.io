import React from 'react';

// Components
import Introduction from 'components/Introduction.js';
import Experience from 'components/Experience.js';
import Education from 'components/Education.js';
import Skill from 'components/Skill.js';
import Contact from 'components/Contact.js';

class PortfolioApp extends React.Component {
	render() {
		return (
			<div className="portfolioApp">
				<Introduction aorInfo={this.props.aorInfo} />
				<Experience aorInfo={this.props.aorInfo} />
				<Education aorInfo={this.props.aorInfo} />
				<Skill />
				<Contact aorInfo={this.props.aorInfo}/>
			</div>);
	}

};

export default PortfolioApp;