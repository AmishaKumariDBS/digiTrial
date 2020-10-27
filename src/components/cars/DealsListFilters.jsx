import React from 'react';
import {Slider,Chip,TextField} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBudget,setBodyType,setSearch,setSort,setOrder} from '../../actions/cars/filters';

class DealsFilters extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value: [10,20],
            bodyTypes:[{label:"SUV",variant:"default"},{label:"Hatchback",variant:"default"},{label:"Sedan",variant:"default"},{label:"MUV",variant:"default"},{label:"Minivan",variant:"default"},
            {label:"Coupe",variant:"default"},{label:"Hybrid",variant:"default"},{label:"Luxury",variant:"default"},{label:"Convertible",variant:"default"},{label:"Pickup Truck",variant:"default"},{label:"Wagon",variant:"default"}],
            searchInput:[],
            input:"",
            sortBy:"price",
            order:1
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
          console.log(`data[0] val:${data[0]}`);
          console.log(`data[1] val:${data[1]}`);
          let min,max;
          if(data[0]<=20){
            //console.log(`min price: ${(data[0]/2)*100000}`)
            min = (data[0]/2)*100000;
          }
          else if(data[0]>20 && data[0]<=60){
            let y=10;
            let x=data[0];
            let inc=parseFloat((x-20)/5);
            inc=inc*5;
            inc=inc+y;
           // console.log(`min price:${inc*100000}`);
            min = inc*100000;
          }
          else if(data[0]>60 && data[0]<=80){
            let x=data[0];  
            let y=50;
            let inc=parseFloat((x-60)/4);
            inc = inc*10;
            inc = inc+y;
            min = inc*100000;
            //console.log(`min price:${inc*100000}`);
          }
          else if(data[0]>80 && data[0]<=100){
            let x=data[0];
            x = x-79;
            min = x*10000000;
            //console.log(`min price:${x*10000000}`);
          }
          // for data[1]
          if(data[1]<=20){
            //console.log(`max price: ${(data[1]/2)*100000}`)
            max = (data[1]/2)*100000;
          }
          else if(data[1]>20 && data[1]<=60){
            let y=10;
            let x=data[1];
            let inc=parseFloat((x-20)/5);
            inc=inc*5;
            inc=inc+y;
            //console.log(`max price:${inc*100000}`);
            max = inc*100000;
          }
          else if(data[1]>60 && data[1]<=80){
            let x=data[1];  
            let y=50;
            let inc=parseFloat((x-60)/4);
            inc = inc*10;
            inc = inc+y;
            max = inc*100000;
           // console.log(`max price:${inc*100000}`);
          }
          else if(data[1]>80 && data[1]<=100){
            let x=data[1];
            x = x-79;
            max =x*10000000;
            //console.log(`max price:${x*10000000}`);
          }

          this.props.dispatch(setBudget(min,max));
          console.log(`min price:${min} max price:${max}`);
        }

        onTypeChange(data){
          const types = this.state.bodyTypes.map((type)=>{
            if(type===data){
            type.variant = type.variant==="outlined"? "default":"outlined";}
            return type;
          }  );
          this.setState({bodyTypes:types});
          const filteredTypes = types.map((type)=>{
              if(type.variant==="default")
                return type.label;
          });
          this.props.dispatch(setBodyType(filteredTypes.filter((type)=>type!=undefined)));
        }
        
        changeOrder(){
          const order = this.state.order;
          this.setState({order:(order*-1)});
          this.props.dispatch(setOrder(order*-1));
        }
      
        render() {
          const marks = [
            {
              value: 1,
              label: '0.5L',
            },
            {
              value: 20,
              label: '10L',
            },
            {
              value: 60,
              label: '50L',
            },
            {
              value: 80,
              label: '1Cr',
            },
            {
              value: 99,
              label: '20Cr',
            }
          ];

        

          return (
            <div style={{width:250, margin:30}}>

            Sort By: <select 
                    className="select"
                    value={this.state.sortBy} 
                    onChange={(e)=>{
                        this.setState({sortBy:e.target.value});
                        switch(e.target.value){
                            case 'name': this.props.dispatch(setSort("name"));break;
                            case 'price': this.props.dispatch(setSort("price"));break;
                        }
                    }}
          
                    >
          
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                    {(this.state.order===1)?<button onClick={()=>this.changeOrder()}>Ascending</button>:<button onClick={()=>this.changeOrder()}>Descending</button>}<br/><br/>

            <TextField 
            value={this.state.input}
            label="Search Cars"
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
              min={1}
              max={99}
              scale={(x) =>{
                if(x<=20){ //x%2==0 && 
                  return parseFloat(x/2).toFixed(1);
                }
                else if(x>20 && x<=60){ //x%5==0 && 
                  let y=10;
                  let inc = parseFloat((x-20)/5);
                  inc=inc*5;
                  return parseFloat(y+inc).toFixed(1);
                }
                else if(x>60 && x<80){ //x%4==0 && 
                  let y=50;
                  let inc=parseFloat((x-60)/4);
                  inc = inc*10;
                  return parseFloat(inc+y).toFixed(1);
                }
                else if(x>=80 && x<=100){
                  return x-79;
                }
                
              }
              }//change
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