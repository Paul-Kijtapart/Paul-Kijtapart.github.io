import React from "react";

// Components for scroll functionality
import {
	Link,
	scroll,
	scrollSpy,
	Events
} from "react-scroll";

class TopNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleDropDownClick = this.handleDropDownClick.bind(this);
	}

	handleDropDownClick(event) {
		event.preventDefault();
		console.log("Drop down toggle");
		this.props.onToggleDropDown();
	}

	render() {
		const isToggle = this.props.isToggle;
		const offset_scroll_value = isToggle ? -424 : -70;
		const link_config = {
			activeClass: "active",
			spy: true,
			offset: offset_scroll_value,
			smooth: true,
			duration: 500
		};

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

					<div className="ui inverted labeled icon menu mobile placeholder">
						<i 
							className="content icon"
							onClick={this.handleDropDownClick} 
						/>
					</div>
					<div 
						className="ui inverted vertical labeled icon menu mobile content"
						style={isToggle? {"display":"block"}: {"display":"none"}}
					>
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
		);
	}
}

class PortfolioContentWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggle: false
		};

		this.onToggleDropDown = this.onToggleDropDown.bind(this);
	}

	onToggleDropDown() {
		this.setState(function(prevState) {
			const current_toggle_status = prevState.isToggle;
			console.log("Current toggle state is now " + current_toggle_status);
			return ({
				isToggle: !current_toggle_status
			});
		});
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
		const content_style_with_toggle_on = {
			"padding-top": "424px"
		};

		return (
			<div className="portfolioContentWrapper">
				<TopNavBar 
					onToggleDropDown={this.onToggleDropDown} 
					isToggle={this.state.isToggle}
				/>
				<div 
					className="app_content"
					style={this.state.isToggle ? content_style_with_toggle_on : null}
				>	
					{this.props.children}
				</div>
			</div>
		);
	}

};

export default PortfolioContentWrapper;