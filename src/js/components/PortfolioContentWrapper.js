import React from "react";

// Components for scroll functionality
import {
	Link,
	scroll,
	scrollSpy,
	Events
} from "react-scroll";

class TopNavBar extends React.Component {
	render() {
		const link_config = {
			activeClass: "active",
			spy: true,
			offset: -70,
			smooth: true,
			duration: 500
		};
		// TODO: add brand to left menu when have cool brand icon

		return (
			<div className="top_navbar">
					<div className="ui inverted labeled icon menu desktop">
					    <div className="left menu">
					    </div>
					    <div className="right menu">
					    	<Link 
					    		{...link_config}
					    		to="introduction"
					    		className="green item"
					    	>
						      	<i className="diamond icon" />
						      	Introduction
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="experience"
						    	className="teal item"
						    >
						    	<i className="tasks icon" />
						      	Experience
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="education"
						    	className="blue item"
						    >
						    	<i className="student icon" />
						    	Education
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="skill"
						    	className="violet item"
						    >
						    	<i className="gift icon" />
						      	Skill
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="contact"
						    	className="purple item"
						    >
						    	<i className="mail outline icon" />
						    	Contact
						    </Link>
					    </div>
					</div>
				</div>
		);
	}
}

class PortfolioContentWrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		Events.scrollEvent.register('begin', function() {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register('end', function() {
			console.log("end", arguments);
		});

		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render() {
		return (
			<div className="portfolioContentWrapper">
				<TopNavBar />
				<div className="app_content">
					{this.props.children}
				</div>
			</div>
		);
	}

};

export default PortfolioContentWrapper;