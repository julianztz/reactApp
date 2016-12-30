import React from 'react';

class Events extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:"intial data..."
        }
        this.updateState=this.updateState.bind(this);
    }

    updateState(){
        this.setState({data: 'data updated!'})
    }

    render(){
        return(
            <div>
                <button onClick={this.updateState}>click</button>
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}
export default Events;