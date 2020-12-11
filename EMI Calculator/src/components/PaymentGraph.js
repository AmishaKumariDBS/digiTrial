import React from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';

const DoughnutData = {
	
	datasets: [{
		data: [],
		backgroundColor: [
		'red',
		'black'
		],
		hoverBackgroundColor: [
		'maroon',
		'gray'
		]
	}],

	labels: [
		'Total Amount',
		'Total Interest'
	]
};

const DoughnutOPtion = {
	legend: {
		position: 'bottom'
	},
	labels: [
		'Total Amount',
		'Total Interest'
	]
};

const graphData = {
  labels: [],
  datasets: [{
    	label: 'Mortgage Balance',
    	fill: false,
    	lineTension: 0.1,
    	backgroundColor: 'black',
    	borderColor: 'black',
    	borderCapStyle: 'butt',
    	borderDash: [],
    	borderDashOffset: 0.0,
    	borderJoinStyle: 'miter',
    	pointBorderColor: 'black',
    	pointBackgroundColor: '#fff',
    	pointBorderWidth: 1,
    	pointHoverRadius: 5,
    	pointHoverBackgroundColor: 'black',
    	pointHoverBorderColor: 'black',
    	pointHoverBorderWidth: 2,
    	pointRadius: 1,
    	pointHitRadius: 10,
    	data: []
    },
    {
    	label: 'Interest Paid',
    	fill: false,
    	lineTension: 0.1,
    	backgroundColor: 'red',
    	borderColor: 'red',
    	borderCapStyle: 'butt',
    	borderDash: [],
    	borderDashOffset: 0.0,
    	borderJoinStyle: 'miter',
    	pointBorderColor: 'red',
    	pointBackgroundColor: '#fff',
    	pointBorderWidth: 1,
    	pointHoverRadius: 5,
    	pointHoverBackgroundColor: 'red',
    	pointHoverBorderColor: 'red',
    	pointHoverBorderWidth: 2,
    	pointRadius: 1,
    	pointHitRadius: 10,
    	data: []
    },
    {
    	label: 'Principal Repaid',
    	fill: false,
    	lineTension: 0.1,
    	backgroundColor: 'black',
    	borderColor: 'black',
    	borderCapStyle: 'butt',
    	borderDash: [],
    	borderDashOffset: 0.0,
    	borderJoinStyle: 'miter',
    	pointBorderColor: 'black',
    	pointBackgroundColor: '#fff',
    	pointBorderWidth: 1,
    	pointHoverRadius: 5,
    	pointHoverBackgroundColor: 'black',
    	pointHoverBorderColor: 'black',
    	pointHoverBorderWidth: 2,
    	pointRadius: 1,
    	pointHitRadius: 10,
    	data: []
    }
  ]
};
const graphOption = {
	scales: {
       	yAxes: [{
        	ticks: {
           		callback: function(value, index, values) {
           			if (value === 0) {
           				return value;
           			}
           			return '$' + (value / 1000) + 'K';
             		
           		}
         	}
       	}]
    },
    legend: {
    	position: 'bottom'
    },
    tooltips: {
    	callbacks: {
        	label: function(tooltipItems, data, index) {
            	return parseFloat(tooltipItems.value).toLocaleString('en-US', {style:'currency', currency:'GBP'}) + ' ' + data.datasets[tooltipItems.datasetIndex].label;
        	}
    	}
    }
}

const barGraphData = {
    	datasets: [{
    		label: 'Principal Repaid',
    		backgroundColor: 'black',
        	data: []
    	},
    	{
    		label: 'Interest Paid',
    		backgroundColor: 'red',
        	data: []
    	}],
    	labels: []
}

export const PaymentGraph = props => {
	graphData.labels = [];
	graphData.datasets[0].data = [];
	graphData.datasets[1].data = [];
	graphData.datasets[2].data = [];
	barGraphData.labels = [];
	barGraphData.datasets[0].data = [];
	barGraphData.datasets[1].data = [];
  	for(let i = 0; i <= props.mortgageTerm; i++) {
		graphData.labels.push('Year '+ i);
		graphData.datasets[0].data.push(props.yearlyPayments[i].outstandingBalance);
		graphData.datasets[1].data.push(props.yearlyPayments[i].interestPaidToDate);
		graphData.datasets[2].data.push(props.yearlyPayments[i].principalRepaidToDate);
		if (i > 0) { //Stops year 0 with no money paid from appearing on bar chart
			barGraphData.labels.push('Year '+ i);
			barGraphData.datasets[0].data.push(props.yearlyPayments[i].principalRepaid);
			barGraphData.datasets[1].data.push(props.yearlyPayments[i].interestPaid);
			
		}
	}
	DoughnutData.datasets[0].data.push(props.totalInterestPaid, props.totalRepaid - props.totalInterestPaid);
	
    return(
    	<div>
    		<div className="graph-container">
			<Doughnut
				data={DoughnutData}
				options={DoughnutOPtion}
			/>
    		</div>
    		<div className="graph-container">
    			<Bar 
    				data={barGraphData}
					options={graphOption}
					
    			/>
    		</div>
    	</div>
    )
}