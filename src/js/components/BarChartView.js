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

// Black and white Icons
import Surprised_icon from "icons/flaticon_svg/color/surprised.svg";
import Smiling_icon from "icons/flaticon_svg/color/smiling.svg";
import Happy_icon from "icons/flaticon_svg/color/happy.svg";
import Happy_2_icon from "icons/flaticon_svg/color/happy-2.svg";
import Love_icon from "icons/flaticon_svg/color/in-love.svg";

const CustomAxisTick = function(props) {
	const {
		level_meaning,
		fill,
		x,
		y,
		stroke,
		payload
	} = props;

	const icon_config = {
		width: 22,
		height: 22,
		x: x - 10,
		y: y + 6,
		fill: "#ffffff"
	};

	var getMatchingIcon = function(level, icon_config) {
		switch (level) {
			case 2:
				return <Surprised_icon {...icon_config}/>;
			case 4:
				return <Smiling_icon {...icon_config}/>;
			case 6:
				return <Happy_icon {...icon_config}/>;
			case 8:
				return <Happy_2_icon {...icon_config}/>;
			case 10:
				return <Love_icon {...icon_config}/>;
		}
		return undefined;
	};

	var toProficientString = function(level, level_meaning) {
		if (!(level in level_meaning)) {
			return "";
		}
		return {
			icon: getMatchingIcon(level, icon_config),
			meaning: level_meaning[level]
		}
	};

	let res = toProficientString(payload.value, level_meaning)
	return (
		<g>
			{res.icon}
			<text className="bar_texts" x={x} y={y} dy={44} textAnchor="middle" fill={fill}>
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
					  margin={{top: 5, right: 30, left: 20, bottom: 25}}
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