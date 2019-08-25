import React from 'react';
import {CricketContext} from  './my.context';


class India extends React.Component{
  static contextType = CricketContext;
l

render(){
  let {runs,players,makeFour} = this.context;
return (
  <div>
Players : {players}<br/>
Runs : {runs}
<hr/>
<button onClick={makeFour}>4 Runs</button>
  </div>
)
}

}


export default India;