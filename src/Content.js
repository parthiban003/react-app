import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";


const Content = () => {

  const [items, setItems] = useState (
    [
      { id:1,
        checked:true,
        item: 'Practice Coding'
      },
      {id:2,
        checked:false,
        item: 'Play Cricket'
      },
      {id:3,
        checked: true,
        item:'Learn about AI'
      }
    ]);

    const handleCheck = (id) => {
      const listItems = items.map((item) => 
      item.id===id ? {...item,checked:!item.checked} : item)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify
        (listItems)
      )
    }

    const handledelete = (id) => {
       const listItems = items.filter((item) => 
      item.id!==id)
       setItems(listItems)
    }

  return (
    <main>
      {(items.length)? (
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked = {item.checked} 
            />
            <label style={(item.checked)?{textDecoration:'line-through'}:null}
            onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
           <FaTrash 
           role='button'
           onClick={() => handledelete(item.id)}
           tabIndex='0'
           />
          </li>
        ))}
      </ul>
      ) : (
           <h3 style={{marginTop:"2rem"}}>Your List is Emty</h3>
      )
    }
    </main>
  )
}


export default Content;