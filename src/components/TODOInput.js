import React, { useState } from 'react'

function TODOInput(props) {
    const[inputText, setInputText] = useState('');
    console.log("todoinput --> ",props);
    const handleEnterPress = (e) =>{
        if(e.keyCode===13){
            props.addList(inputText);
            setInputText("")
        }
    }
    return (
        <div className="input-container">
            <input 
                type="text" 
                className='input-box-todo' 
                placeholder='Enter your TODO' 
                value={inputText}
                onChange={e=>{
                    setInputText(e.target.value);
                }}
                onKeyDown={handleEnterPress}
            />
            <button 
                className="add-btn"
                onClick={()=>{
                    props.addList(inputText)
                    setInputText('');
                }}
            >
                +
            </button>
            {/* <div>{inputText}</div> */}

        </div>
    )
}

export default TODOInput
