import React from 'react'
import '../../src/App.css';
import TODOInput from './TODOInput';
import { useState } from 'react';
import TODOList from './TODOList';
function TODOMain() {
    const[listTodo,setListTodo]=useState([]);
    let addList = (inputText)=>{
    if(inputText!==''){
      setListTodo([...listTodo,inputText]);
    }
  }
  const deleteListItem = (key) =>{
    let newListTodo =[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])
  } 
  return (
    <div className="main-container">
      <div className="center-container">
        <TODOInput addList={addList}/>
        {/* <TODOList listTodo={listTodo}/> */}
        <h1 className='app-heading'>TODO</h1>
        <hr />
        {
          listTodo.map((listItem,i)=>{
            return(
              <TODOList key={i} index={i} listItem={listItem} deleteListItem={deleteListItem} />
            )
          })
        }
      </div>
    </div>
  )
}

export default TODOMain
