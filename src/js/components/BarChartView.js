import React from 'react';
import {
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Bar,
	ResponsiveContainer
} from 'recharts';


const CustomAxisTick = function(props) {
	var getMatchingIcon = function(level) {
		switch (level) {
			case 2:
				break;
			case 4:
				break;
			case 6:
				break;
			case 8:
				break;
			case 10:
				break;
		}
		return undefined;
	};

	var toProficientString = function(level, level_meaning) {
		if (!(level in level_meaning)) {
			return "";
		}
		return {
			icon: getMatchingIcon(level),
			meaning: level_meaning[level]
		}
	};
	const {
		level_meaning,
		fill,
		x,
		y,
		stroke,
		payload
	} = props;

	console.log(level_meaning);
	console.log(payload.value);

	let res = toProficientString(payload.value, level_meaning)
	return (
		<g>
			<text x={x} y={y} dy={34} textAnchor="middle" fill={fill}>
    			{res.icon}
    			{res.meaning}
    		</text>
		</g>
	);
};

class BarChartView extends React.Component {
	render() {
		const technical_skill_list = this.props.technical_skill_list;
		const level_meaning = this.props.level_meaning;
		return (
			<div className="barChartView"> 
				<ResponsiveContainer 
					width={"90%"}
					height={500}
				>
					<BarChart 
					  data={technical_skill_list} 
					  layout="vertical"
					  margin={{top: 5, right: 30, left: 20, bottom: 15}}
					>
					  <XAxis 
					  	domain={[0, 10]} 
					  	stroke="white" 
					  	type="number"
					  	interval={0}
					  	tickCount={6}
					  	tick={<CustomAxisTick level_meaning={level_meaning}/>}
					  />
					  <YAxis 
					  	stroke="white" 
					  	type="category" 
					  	dataKey="name" 
					  />
					  <CartesianGrid strokeDasharray="3 3"/>
					  <Tooltip/>
					  <Bar dataKey="level" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	}
};


export default BarChartView;