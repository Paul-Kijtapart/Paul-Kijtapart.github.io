import React from 'react';


class Education extends React.Component {
	render() {
		const university_name = this.props.aor_json.school;
		const major_name = this.props.aor_json.major;
		const graduate_year = this.props.aor_json.graduate_year;

		return (
			<div className="education">
				<p> {graduate_year} {major_name} {university_name} </p>
			</div>
		);
	}
};

export default Education;