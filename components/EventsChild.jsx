import React from 'react';

{/*updateState & updateStateProp*/}
class EventsChild extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data: 'initial data'
        }

        this.updateState=this.updateState.bind(this);
    }

    updateState(){
        this.setState({data: 'data updated from the child Component'})
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
                <button onClick={this.props.updateStateProp}>Click</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        )
    }
}
export default EventsChild;