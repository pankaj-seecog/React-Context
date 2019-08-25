import React from 'react';
import Context from './my.context'

const Child3 = (props)=>{
return (
  <Context.Consumer>
{
  val=>{
    return (
      <div>
The name is {val.name} . <br/>
Age : {val.age}<br/>
Salary : {val.sal}
      </div>
    )
  }
}
  </Context.Consumer>
)
}

export default Child3;
