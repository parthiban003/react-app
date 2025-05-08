import React from 'react'

const Content = () => {

  function NameChange(){
    const names = ['first', 'second', 'third'];
    const int = Math.floor(Math.random()*3);
    return names[int]
  }
    const handleClick = () => {
      console.log('Thank you')
    }

  return (
    <main>
      <p>This is my {NameChange()} React</p>
      <button onClick={handleClick()}>Submit</button>
    </main>
  )
}


export default Content;