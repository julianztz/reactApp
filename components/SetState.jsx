import React from 'react';
{/*setState() is for updating the component state;
    not replace the state; just add changes to the original state*/}
    class SetState extends React.Component{
        constructor(){
            super();
            this.state={
                 data:[],
                 "header": "hoho"
            }
            // console.log(this);
        this.setStateHandler = this.setStateHandler.bind(this);
        };

        setStateHandler(){
            var item="setState...";
            var myArray=this.state.data;
            console.log(myArray);
            // console.log(myArray.constructor.__proto__);

            myArray.push(item);
            console.log(this); //"this" is SetState class
            // console.log(this.constructor);//test
            this.setState({data:myArray})

        };
        
        render(){
            return(
                <div>   
                    <button onClick={this.setStateHandler}>Set State btn</button>
                    <h4>State Array: {this.state.data}</h4>
                    <h5>{this.state.header}</h5>
                </div>
            )
        }
    }
    export default SetState;