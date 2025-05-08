import React, {useState} from "react";

function ColorBox({ color }){
  return(
    <div style={{
      width: '200px',
      height: '200px',
      backgroundColor: color,
      border: '2px solid black',
      margin: '20px auto'
    }}>

    </div>
  )
}

function ColorPicker(){
  const [color, setColor] = useState('lightblue');

  return(
       <div style={{textAlign: 'center'}}>
        <h2>Pick a color</h2>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={()=>setColor('green')}>Green</button>
        <button onClick={()=>setColor('blue')}>Green</button>
       </div>
  )
}

export default ColorPicker;