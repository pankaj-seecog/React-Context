import React from 'react';
import Context from './my.context'

const Child3 = (props)=>{
return (
  <Context.Consumer>
{
  val=>{
    return (
      <div>
The name is {val}
      </div>
    )
  }
}
  </Context.Consumer>
)
}

export default Child3;
