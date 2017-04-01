import React from 'react';
import BarChartView from './BarChartView.js';

class Skill extends React.Component {
	render() {
		const aorInfo = this.props.aorInfo;
		const technical_skill_list =
			aorInfo.technical_skills;
		const level_meaning =
			aorInfo.level_meaning;

		return (
			<div className="skill">
				<h2> Skill </h2>
				<BarChartView 
					technical_skill_list={technical_skill_list}
					level_meaning={level_meaning}
				/>
			</div>
		);
	}

};

export default Skill;