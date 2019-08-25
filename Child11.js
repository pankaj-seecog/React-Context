import React from 'react';

const Child11 = (props)=>{
return (
  <div>
  <button onClick={()=>props.click(8000)}>Change count again</button>
  </div>
)
}

export default Child11;
