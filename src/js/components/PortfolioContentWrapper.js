import React from "react";

// Components for scroll functionality
import {
	Link,
	scroll,
	scrollSpy,
	Events
} from "react-scroll";

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

	handleSetActive(to) {
		console.log(to);
	}

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
			<div className="portfolioContentWrapper">
				<div className="top_navbar">
					<div className="ui inverted labeled icon menu">
					    <div className="left menu">
					    </div>
					    <div className="right menu">
					    	<Link 
					    		{...link_config}
					    		to="introduction"
					    		className="orange item"
					    	>
						      	<i className="diamond icon"></i>
						      	Introduction
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="experience"
						    	className="yellow item"
						    >
						    	<i className="tasks icon"></i>
						      	Experience
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="education"
						    	className="red item"
						    >
						    	<i className="student icon"></i>
						    	Education
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="skill"
						    	className="green item"
						    >
						    	<i className="gift icon"></i>
						      	Skill
						    </Link>

						    <Link 
						    	{...link_config}
						    	to="contact"
						    	className="teal item"
						    >
						    	<i className="mail outline icon"></i>
						    	Contact
						    </Link>
					    </div>
					</div>
				</div>
				<div className="app_content">
					{this.props.children}
				</div>
			</div>
		);
	}

};

export default PortfolioContentWrapper;