import React from 'react'

function TODOList(props) {
    console.log("todolist props --->",props);
    
  return (
    <li className="list-item">
        {props.listItem}
        <span className='icons'>
            <i  
                className="fa-solid fa-trash-can icon-delete" 
                onClick={e=> {props.deleteListItem(props.index)}}
            ></i>
        </span>
    </li>
  )
}

export default TODOList
