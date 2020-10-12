import React from 'react';
import {Slider,Chip} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBudget,setBodyType} from '../../actions/cars/filters';

class DealsFilters extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value: [50,100],
            bodyTypes:[{label:"SUV",variant:"default"},{label:"Hatchback",variant:"default"},{label:"Sedan",variant:"default"}]
          }
        }

        updateBudgetChange(e,data){
          this.setState({value:data});
          this.props.dispatch(setBudget(data[0]*10000,data[1]*10000));
        }

        onSUVClick(data){
          const types = this.state.bodyTypes.map((type)=>{
            if(type===data){
            type.variant = type.variant==="outlined"? "default":"outlined";}
            return type;
          });
          this.setState({bodyTypes:types});
          const filteredTypes = types.map((type)=>{
              if(type.variant==="default")
                return type.label;
          });
          this.props.dispatch(setBodyType(filteredTypes.filter((type)=>type!=undefined)));
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
             /><br />
            <p>Select Body Type:</p>

            {this.state.bodyTypes.map((type) => (<Chip 
              label={type.label} 
              variant = {type.variant}
              color="primary"
              clickable={true}
              onClick={()=>this.onSUVClick(type)}
              />))}



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