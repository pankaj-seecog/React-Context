import React from 'react';
import Child1 from './Child1';
import Context from './my.context'
class Parent extends React.Component{


constructor(){
  super();
  this.state = {
    name : "Mohan",
    age : 21,
    sal : 345
  }
}

render(){
  return (
    <Context.Provider value={{...this.state}}>
<Child1 />
    </Context.Provider>
  )
}

}

export default Parent;