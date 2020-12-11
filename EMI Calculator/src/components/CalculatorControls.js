import React from 'react';

const calControl = {
	style:'currency',
	currency:'USD',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const CalculatorControls = props => {
	return(
		<div >			
			<div >
				<span >{parseInt(props.purchasingHousePrice).toLocaleString('en-GB', calControl)}</span>
				<input 
					type="range"
					
					id="purchasingHousePrice"  
					
					value={props.purchasingHousePrice} 
					 />
				<label className="grid__item--label" htmlFor="purchasingHousePrice">Purchasing House Price</label>
			</div>
			<div >
				<span >{parseInt(props.depositAmount).toLocaleString('en-GB', calControl)}</span>
				<input 
					type="range"
					
					id="depositAmount" 
					
					value={props.depositAmount}
         			/>
				<label className="grid__item--label" htmlFor="points">Deposit</label>
			</div>
			<div >
				<span >{props.mortgageTerm} Years</span>
				<input 
					type="range"
					
					id="mortgageTerm"  
					
					value={props.mortgageTerm} 
					 />
				<label className="grid__item--label" htmlFor="mortgageTerm">Mortgage Term</label>
			</div>
			<div >
				<span >{props.interestRate}%</span>
				<input 
					type="range"
					
					id="interestRate"  
					
					value={props.interestRate} 
					 />
				<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
			</div>
		</div>
	);
}