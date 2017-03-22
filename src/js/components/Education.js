import React from 'react';


class Education extends React.Component {
	render() {
		const university_name = this.props.aorInfo.school;
		const major_name = this.props.aorInfo.major;
		const graduate_year = this.props.aorInfo.graduate_year;

		return (
			<div className="education">
				<p> {graduate_year} {major_name} {university_name} </p>
			</div>
		);
	}
};

export default Education;