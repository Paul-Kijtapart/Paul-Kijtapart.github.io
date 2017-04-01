import React from 'react';

// Components
import PortfolioContentWrapper from 'components/PortfolioContentWrapper.js';
import Introduction from 'components/Introduction.js';
import Experience from 'components/Experience.js';
import Education from 'components/Education.js';
import Skill from 'components/Skill.js';
import Contact from 'components/Contact.js';

// Util Components
import {
	Element
} from "react-scroll";
import LazyLoad from 'react-lazy-load';

class PortfolioApp extends React.Component {
	render() {

		return (
			<div className="portfolioApp">
				<PortfolioContentWrapper>
					<Element name="introduction" className="element">
						<Introduction aorInfo={this.props.aorInfo} />
					</Element>
					<Element name="experience" className="element">
						<Experience aorInfo={this.props.aorInfo} />
					</Element>
					
					<Element name="education" className="element">
						<Education aorInfo={this.props.aorInfo} />
					</Element>

					<Element name="skill" className="element">
						<Skill aorInfo={this.props.aorInfo} />
					</Element>

					<Element name="contact" className="element">
						<Contact aorInfo={this.props.aorInfo}/>
					</Element>
				</PortfolioContentWrapper>
			</div>);
	}

};

export default PortfolioApp;