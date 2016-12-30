import React from 'react';
{/*use forms from child component. onChange method will trigger state update that will be passed to child input value*/}

class Form2Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: 'Initial data... form2'
        }
        this.updateState=this.updateState.bind(this);
    }

    updateState(e){
        this.setState({data: e.target.value});
    }

    render(){
        return(
            <div>   
                <Content myDataProp={this.state.data} updateStateProp={this.updateState}></Content>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
                <h3>{this.props.myDataProp}</h3>
            </div>
        )
    }
}

export default Form2Child;