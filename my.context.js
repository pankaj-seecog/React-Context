import React from  'react';

var CricketContext = React.createContext();

class CricketProvider extends React.Component{

constructor(){
  super();
  this.state =  {
runs :  0,
players : 11
  }
}

makeFour = ()=>{
  this.setState({
    ...this.state,
    runs : this.state.runs + 4
  })
}

render(){
  return <CricketContext.Provider value={{...this.state,makeFour : this.makeFour}}>{this.props.children}</CricketContext.Provider>
}

}

// CricketConsumer = CricketContext.Consumer;

export {CricketContext,CricketProvider};