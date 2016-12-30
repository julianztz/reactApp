import React from 'react';

{/*component starts with Uppercase*/}
class App extends React.Component {
   render() {
       var inlineStyle={
           fontSize: 70,
           color: '#0000BB'
       }
      return (
         <div>
             {/*inline css*/}
             <h3 style={inlineStyle}>expression: {23 * 32}</h3>
             {/*custom attribute: use data prefix*/}
             <p data-custAttribute="">paragraph</p>
             <hr/>  


             {/*add Header and Content inside JSX tree, here*/}
             <Header/>
             <Content/>

         </div>
      );
   }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>header</h1>
            </div>
        )
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <h2>content</h2>
            </div>
        )
    }
}

export default App;

