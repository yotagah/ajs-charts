import React, { useState } from 'react'
import { Chart } from 'react-charts'

import './App.css';

function App() {

	const getRandomData = (quantity, size, dimensions = 2) => {

		const getRandomVector = (dimensions, size) => {
			const array = [];
			for(let i = 0; i < size; i++) {
				const item = [];
				for(let j = 0; j < dimensions; j++) {
					if(j === 0) {
						item.push(i);
					} else {
						item.push(20*Math.random());
					}
				}
				array.push(item);
			}

			return array;
		}

		const data = [];
		for(let i = 0; i < quantity; i++) {
			data.push(getRandomVector(dimensions, size));
		}

		return data;
	}

	const [barData, setBarData] = useState(getRandomData(3, 10, 2));
	const [lineData, setLineData] = useState(getRandomData(7, 10, 2));
	const [bubbleData, setBubbleData] = useState(getRandomData(10, 30, 3));
	const [areaData, setAreaData] = useState(getRandomData(10, 10, 2));

	const getSeriesStyle = React.useCallback(
		() => ({
			transition: 'all .5s ease'
		}),
		[]
	)

	const getDatumStyle = React.useCallback(
		() => ({
			transition: 'all .5s ease'
		}),
		[]
	)

	const randomizeData = (type) => {
		switch(type) {
			case 'bar':
				setBarData(getRandomData(3, 10, 2));
				break;
			case 'line':
				setLineData(getRandomData(7, 10, 2));
				break;
			case 'bubble':
				setBubbleData(getRandomData(10, 30, 3));
				break;
			case 'area':
				setAreaData(getRandomData(10, 10, 2));
				break;
			default:
				break;
		}
	}

	return (
		<div className="grid">
			<div onClick={() => randomizeData('bar')}>
				<Chart
					data={barData}
					series={{
						type: 'bar'
					}}
					axes={[
						{
							primary: true,
							type: 'ordinal',
							position: 'bottom'
						},
						{
							type: 'linear',
							position: 'left',
							stacked: false
						}
					]}
					getSeriesStyle={getSeriesStyle}
					getDatumStyle={getDatumStyle}
				/>
			</div>
			<div onClick={() => randomizeData('line')}>
				<Chart
					data={lineData}
					series={{
						showPoints: false
					}}
					axes={[
						{
							primary: true,
							type: 'linear',
							position: 'bottom'
						},
						{
							type: 'linear',
							position: 'left',
							stacked: false
						}
					]}
					getSeriesStyle={getSeriesStyle}
					getDatumStyle={getDatumStyle}
				/>
			</div>
			<div onClick={() => randomizeData('bubble')}>
				<Chart
					data={bubbleData}
					series={{
						type: 'bubble',
						showPoints: false
					}}
					axes={[
						{
							primary: true,
							type: 'ordinal',
							position: 'bottom'
						},
						{
							type: 'linear',
							position: 'left',
							stacked: false
						}
					]}
					getSeriesStyle={getSeriesStyle}
					getDatumStyle={getDatumStyle}
				/>
			</div>
			<div onClick={() => randomizeData('area')}>
				<Chart
					data={areaData}
					series={{
						type: 'area'
					}}
					axes={[
						{
							primary: true,
							type: 'linear',
							position: 'bottom'
						},
						{
							type: 'linear',
							position: 'left',
							stacked: true
						}
					]}
					getSeriesStyle={getSeriesStyle}
					getDatumStyle={getDatumStyle}
				/>
			</div>
		</div>
	)
}

export default App;
