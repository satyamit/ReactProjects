import logo from './logo.svg';
import './App.css';
import TODOInput from './components/TODOInput';
import { useState } from 'react';
import TODOList from './components/TODOList';
import TODOMain from './components/TODOMain';
function App() {
  //const[listTodo,setListTodo]=useState([]);
  // let addList = (inputText)=>{
  //   if(inputText!==''){
  //     setListTodo([...listTodo,inputText]);
  //   }
  // }
  //console.log("addList-->",addList);

  // const deleteListItem = (key) =>{
  //   let newListTodo =[...listTodo];
  //   newListTodo.splice(key,1);
  //   setListTodo([...newListTodo])
  // } 
  return (
    // <div>App</div>
    
    // <div className="main-container">
    //   <div className="center-container">
    //     <TODOInput addList={addList}/>
    //     {/* <TODOList listTodo={listTodo}/> */}
    //     <h1 className='app-heading'>TODO</h1>
    //     <hr />
    //     {
    //       listTodo.map((listItem,i)=>{
    //         return(
    //           <TODOList key={i} index={i} listItem={listItem} deleteListItem={deleteListItem} />
    //         )
    //       })
    //     }
    //   </div>
    // </div>
    <div>
      <TODOMain/>
    </div>
  );
}

export default App;
