import React from 'react';
import './index.css';

const SlotM = () =>{
  let x = '😄';
  let y = '😄';
  let z = '😄';

  return(<><h1> {x} {y} {z}</h1> 
        <h3 className='heading'>This is Matching</h3> 
        <hr/>
        </>)
}



const App = ()=>{
  return (<>
    <div className="center_div">
    <h1 className='heading_style'> 🎰 Welcome to <span style={{backgroundColor:'#ecf0f1', padding:'5px'}}>Slot Machine Game</span> 🎰</h1>
    <div className="inner_div">
      <SlotM/>
      <SlotM/>
    </div>
    </div>
  </>);
}

export default App;