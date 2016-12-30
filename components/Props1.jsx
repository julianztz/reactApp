import React from 'react';
{/*state VS. props:
   state: can be changed & updated
   props: cannot be changed; used to pass data to state */}
   class Props1 extends React.Component{
       render(){
           return(
               <div>   
                <h1>{this.props.headerProp}</h1>
                <h1>{this.props.contentProp}</h1>
               </div>
           )
       }
   }
   Props1.defaultProps={
       headerProp: "default header",
       contentProp: "default content"
   }
   export default Props1;