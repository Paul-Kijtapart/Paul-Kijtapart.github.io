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
				<Introduction/>
				<Experience />
				<Education />
				<Skill />
				<Contact />
			</div>);
	}

};

export default PortfolioApp;