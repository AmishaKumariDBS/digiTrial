import React from 'react';
import {Slider,Chip,TextField} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBudget,setBodyType,setSearch} from '../../actions/cars/filters';

class DealsFilters extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value: [50,100],
            bodyTypes:[{label:"SUV",variant:"default"},{label:"Hatchback",variant:"default"},{label:"Sedan",variant:"default"}],
            searchInput:[],
            input:""
          }
        }

          onSearch(e){
            const input=e.target.value.trim();
            let keywords=[""];
             this.setState({
              input
             });

             if((e.keyCode===13||e.keyCode===32)&& input && this.state.searchInput.indexOf(input)===-1)
         { this.setState((prevState)=>({
            searchInput:prevState.searchInput.concat(input)
          }));
        }

        if((e.keyCode===13||e.keyCode===32))
        this.setState({
          input:""
         });
         keywords = this.state.searchInput;
         if(input)
         keywords = this.state.searchInput.concat(input);
         if(keywords.length===0)
         keywords=[input];
         this.props.dispatch(setSearch(keywords));

        }
         

       onSearchDelete(data){ 
        const searchInput = this.state.searchInput.filter(item=>item!=data);
        let keywords=[""];
        this.setState({searchInput});
        keywords = searchInput;
        if(keywords.length===0)
        keywords=[""];
        this.props.dispatch(setSearch(keywords));
     }

        onBudgetChange(e,data){
          this.setState({value:data});
          this.props.dispatch(setBudget(data[0]*10000,data[1]*10000));
        }

        onTypeChange(data){
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

            <TextField 
            value={this.state.input}
            label="Search Model"
            variant="outlined"
            onChange={e=>this.onSearch(e)}
            onKeyDown={e=>this.onSearch(e)}
            />
            {this.state.searchInput.map((type,index) => (<Chip 
              label={type} 
              key={index}
              variant = "outlined"
              color="primary"
              onDelete={()=>this.onSearchDelete(type)}
              />))}<br />

            <p>Select Budget:</p>
            <Slider
              value={this.state.value}
              onChange={(e,data)=>this.onBudgetChange(e,data)}
              marks={marks}
              min={10}
              scale={(x) => x / 10}
              valueLabelDisplay="auto"
             /><br />

            <p>Select Body Type:</p>
            {this.state.bodyTypes.map((type,index) => (<Chip 
              label={type.label} 
              key={index}
              variant = {type.variant}
              color="primary"
              clickable={true}
              onClick={()=>this.onTypeChange(type)}
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