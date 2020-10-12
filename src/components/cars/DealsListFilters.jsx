import React from 'react';
import {Slider} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBudget} from '../../actions/cars/filters';

class DealsFilters extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value: [50,100]
          
          }
        }

        updateBudgetChange(e,data){
          this.setState({value:data});
          this.props.dispatch(setBudget(data[0]*10000,data[1]*10000));
        }
      
        render() {
          const marks = [
            {
              value: 10,
              label: '1L',
            },
            {
              value: 25,
              label: '2.5L',
            },
            {
              value: 50,
              label: '5L',
            },
            {
              value: 75,
              label: '7.5L',
            },
            {
              value: 100,
              label: '10L',
            }
          ];
      
          return (
            <div style={{width:200, margin:30}}>
            Select Budget:
            <Slider
              value={this.state.value}
              onChange={(e,data)=>this.updateBudgetChange(e,data)}
              marks={marks}
              min={10}
              scale={(x) => x / 10}
              valueLabelDisplay="auto"
             />

            </div>
          )
        }
      }

const  mapStateToProps = (state) =>{
  return{
    filters:state.filters
  };
}

export default connect(mapStateToProps)(DealsFilters);