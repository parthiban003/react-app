import React, {useEffect, useState} from 'react'

const Ref = () => {
  const [name, setName] = useState('');
  const [cout, setCount] = useState('0');

  useEffect (() =>{
    setCount((prev) => prev + 1);
  });


  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.valu)}/>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default Ref