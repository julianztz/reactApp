import React from 'react';
import ReactDOM from 'react-dom';

class FindDOMNode extends React.Component{
    constructor(){
        super();
        this.findDOMNodeHandler=this.findDOMNodeHandler.bind(this);
    }

    findDOMNodeHandler(){
        var myDiv=document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color="green";
    }

    render(){
        return(
            <div>
                <button onClick={this.findDOMNodeHandler}>find DOM node btn</button>
                <div id="myDiv">node</div>
            </div>
        )
    }
}
export default FindDOMNode;