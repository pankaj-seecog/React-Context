import React from 'react';
import Child11 from './Child11'
class Parent1 extends React.Component{

constructor(){
  super();
  this.state = {
    count :  0
  }
}

changeCount = (n)=>{
  this.setState({
    count : n
  })
}

render(){
  return (
    <div>
The count is {this.state.count} <br/>

<Child11 click={(evt)=>this.changeCount(evt)}/>
    </div>
  )
}

}

export default Parent1;