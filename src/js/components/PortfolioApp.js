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
				<Introduction aor_json={this.props.aor_json} />
				<Experience aor_json={this.props.aor_json} />
				<Education aor_json={this.props.aor_json} />
				<Skill />
				<Contact aor_json={this.props.aor_json}/>
			</div>);
	}

};

export default PortfolioApp;