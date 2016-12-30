import React from 'react';
{/*forceUpdate() is for updating component manually*/}
class ForceUpdate extends React.Component{
    constructor(){
        super();
        this.forceUpdateHandler=this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler(){
        this.forceUpdate();
    };

    render(){
        return(
            <div>   
                <button onClick={this.forceUpdateHandler}>force update btn</button>
                <h4>random num: {Math.random()*100}</h4>
            </div>
        )
    }
}
export default ForceUpdate;