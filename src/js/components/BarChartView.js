import React from 'react';
import {
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Bar
} from 'recharts';

// const skill_bar_chart_config = {
// 	width: 600,
// 	height:300,
// 	margin: {}
// };

class BarChartView extends React.Component {
	render() {
		const technical_skill_list = this.props.technical_skill_list;
		return (
			<div className="barChartView">
				<p> Hi! i am barChartView. </p>
				<BarChart 
					width={600} 
					height={300} 
					data={technical_skill_list}
           	 		margin={{top: 5, right: 30, left: 20, bottom: 5}}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<CartesianGrid strokeDasharray="3 3"/>
					<Tooltip/>
					<Legend />
					<Bar dataKey="level" fill="#8884d8" />
				</BarChart>
			</div>
		);
	}
};


export default BarChartView;