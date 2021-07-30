import React from 'react'
import { Chart } from 'react-charts'

import './App.css';
 
function App() {

	const getRandomData = () => {
		return [
			{
				data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
			},
			{
				data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
			}
		];
	}

	const series = React.useMemo(
		() => ({
		  type: 'bar'
		}),
		[]
	  )
 
	const axes = React.useMemo(
		() => [
			{ primary: true, type: 'linear', position: 'bottom' },
			{ type: 'linear', position: 'left' }
		],
		[]
	)
 
	return (
		<div className="grid">
			<div>
				<Chart data={getRandomData()} series={series} axes={axes} />
			</div>
			<div>
				<Chart data={getRandomData()} axes={axes} />
			</div>
			<div>
				<Chart data={getRandomData()} axes={axes} />
			</div>
			<div>
				<Chart data={getRandomData()} axes={axes} />
			</div>
			<div>
				<Chart data={getRandomData()} axes={axes} />
			</div>
			<div>
				<Chart data={getRandomData()} axes={axes} />
			</div>
		</div>
	)
}

export default App;
