import React from 'react';
{/*setting state in parent component and passing it down the component tree
    using props*/}
    class StateProps extends React.Component{
        constructor(props){
            super(props);
            this.state={
                header: "Header from props...",
                "content": "Content from props..."
            }
        }
        render(){
            return(
                <div>
                    <Header headerProp={this.state.header}/>
                    <Content contentProp={this.state.content}/>
                </div>
            )
        }
    }
    class Header extends React.Component{
        render(){
            return(
                <div>
                    <h1>{this.props.headerProp}</h1>
                </div>
            )
        }
    }
      class Content extends React.Component{
        render(){
            return(
                <div>
                    <h1>{this.props.contentProp}</h1>
                </div>
            )
        }
    }
    export default StateProps;