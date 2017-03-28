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
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		const responsibilities = this.props.responsibilities.map(function(responsibility, index) {
			return (<p key={index}> {responsibility} </p>);
		});
		const images = this.props.images.map(function(image_path, index) {
			return (
				<div key={index}>
					<img src={image_path} />
				</div>
			);
		});

		const name = this.props.name;
		return (
			<div className="card">
				<h2 className="ui dividing header" id="app_name"> {name} </h2>
				<div id="image_slider">
					<Slider 
					{...image_slider_config}
					>
						<div>
							<img />
							<p> 1 </p>
						</div>
				        <div>
				        	<img />
				        	<p> 2 </p>
				        </div>
				        <div>
				        	<img />
				        	<p> 3 </p>
				        </div>
				        <div>
				        	<img />
				        	<p> 4 </p>
				        </div>
					</Slider>
				</div>
				<div className="ui divider"></div>
				<div className="responsibilities">
					{responsibilities}
				</div>
			</div>
		);
	}
};

import Android_icon from "icons/flaticon_svg/color/android.svg";
class Experience extends React.Component {
	render() {
		const aorInfo = this.props.aorInfo;
		const projects = aorInfo.projects;
		const timeLineEvents = projects.map(function(project) {
			const icon = (
				<Android_icon />
				// TODO: Icon displayed should correspond to the type of work
			);
			//TODO: Display icons based on the type of the project
			// Need to addd different classname for each Type here
			return (
				<TimelineEvent
					className="timeLineEvent"
					key={project.name}
					title={project.eventType}
					createdAt={project.start}
					icon={icon}
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
				<Timeline
					className="experienceTimeLine"
				>
            		{timeLineEvents}
    			</Timeline>
			</div>
		);
	}
};

export default Experience;