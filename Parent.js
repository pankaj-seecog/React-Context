import React from 'react';
import Child1 from './Child1';
import Context from './my.context'
class Parent extends React.Component{

render(){
  return (
    <Context.Provider value={"mohan"}>
<Child1 />
    </Context.Provider>
  )
}

}

export default Parent;