import React from 'react';
import {
	Timeline,
	TimelineEvent
} from "react-event-timeline";
import Slider from "react-slick";

class Card extends React.Component {
	render() {
		const image_slider_config = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const responsibilities = this.props.responsibilities.map(function(responsibility, index) {
			return (<p key={index}> {responsibility} </p>);
		});

		const name = this.props.name;
		return (
			<div className="card">
				<h2 className="ui dividing header" id="app_name"> {name} </h2>
				<div className="responsibilities">
					{responsibilities}
				</div>
				<Slider 
					{...image_slider_config}
				>
					<div><h3>1</h3></div>
			        <div><h3>2</h3></div>
			        <div><h3>3</h3></div>
			        <div><h3>4</h3></div>
			        <div><h3>5</h3></div>
			        <div><h3>6</h3></div>
				</Slider>
			</div>
		);
	}
};

class Experience extends React.Component {
	render() {
		const aorInfo = this.props.aorInfo;
		const projects = aorInfo.projects;
		const timeLineEvents = projects.map(function(project) {
			const icon_type = <i> {project.type} </i>;
			//TODO: Display icons based on the type of the project
			// Need to addd different classname for each Type here
			return (
				<TimelineEvent
					key={project.name}
					title={project.eventType}
					createdAt={project.start}
					icon={icon_type}
				>
					<Card
						name={project.name}
						images={project.images}
						responsibilities={project.responsibilities}					
					/>
				</TimelineEvent>
			);
		});

		return (
			<div className="experience">
				<Timeline>
            		{timeLineEvents}
    			</Timeline>
			</div>
		);
	}
};

export default Experience;