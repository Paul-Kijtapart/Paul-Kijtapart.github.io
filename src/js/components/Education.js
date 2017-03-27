import React from 'react';

// Components
import {
	Circle
} from "react-progressbar.js";

function EducationCard(props) {
	const university_name = props.school;
	const major_name = props.major;
	const graduate_year = props.graduate_year;
	return (
		<div className="educationCard"> 
			<h2> {graduate_year} {major_name} {university_name} </h2>
		</div>);
};


class EducationPerformance extends React.Component {
	constructor(props) {
		super(props);
		this.get_ubc_grade = this.get_ubc_grade.bind(this);
	}

	get_ubc_grade(score) {
		if (score >= 90) {
			return "A+";
		}
		if (score >= 85) {
			return "A";
		}
		if (score >= 80) {
			return "A-";
		}
		if (score >= 76) {
			return "B+";
		}
		if (score >= 72) {
			return "B";
		}
		return "NotLikeThis";
	}

	render() {
		const courses = this.props.courses;
		const containerStyle = {
			width: '200px',
			height: '200px',
			margin: "20px"
		};

		const progressbar_config = {
			color: 'rgb(130, 202, 157)',
			trailColor: '#eee',
			trailWidth: 1,
			strokeWidth: 4
		};

		const courseDiplay = courses.map(function(course) {
			return (
				<Circle 
					key={course.name} 
					progress={course.score / 100}
					text={course.name}
					options={progressbar_config}
                	containerClassName={'educationProgressbar'}
				/>
			);
		});

		return (
			<div className="educationPerformance">
				{courseDiplay}
			</div>
		)
	}
};

class Education extends React.Component {
	render() {
		const education = this.props.aorInfo.education;
		return (
			<div className="education">
				<EducationCard {...education}/>
				<EducationPerformance {...education}/>
			</div>
		);
	}
};

export default Education;