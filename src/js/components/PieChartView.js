import React from "react";
import {
	PieChart,
	Pie,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';


class PieChartView extends React.Component {
	render() {
		const data = this.props.data;
		return (
			<div className="pieChartView">
				<ResponsiveContainer
					width={"50%"}
					height={300}
				>
					<PieChart>
						<Tooltip />
						<Pie data={data} valueKey="score" innerRadius="25%" outerRadius="40%"/>
						<Pie data={data} nameKey="name" valueKey="score" innerRadius="45%" outerRadius="80%"/>
						<Tooltip/>
		            </PieChart>
				</ResponsiveContainer>
			</div>
		);
	}
};


export default PieChartView;