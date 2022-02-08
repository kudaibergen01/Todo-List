import { useEffect, useReducer, useState } from "react"
import React  from "react"

import './Todo.css'
import ErrorModal from "./Ul/ErrorModal"


const Todo = ({onGetDataHandler})=>{

    const TodoReduser = (state,action)=>{
        if(action.type === "TODO_INPUT"){
            return{
                value:action.key,
                data:new Date().toLocaleDateString(),
            }
        }
        if(action.type=== "erorr"){
           return{
             value:"",
            isValid: true,
            title: "type something"}
        }
        if(action.type ==="Modal-OK"){
            return{
                value:"",
                isValid: false,   
            }
        }
        return {
            value:"",
            isValid:false,
        }
    }
    
    const [todostate, dispachTodo] = useReducer(TodoReduser,{
        value:'',
        date:'',
        isValid:null,
    })

    const TodoHanler = (event)=>{
        dispachTodo({type:"TODO_INPUT",key:event.target.value})
    }
    const sumbitHanler = (event)=>{
       
        event.preventDefault()

         if (todostate.value.trim().length === 0) {
			dispachTodo({type: "erorr"})
            return;
         }
        const newData ={
            value:todostate.value,
            data:todostate.data,
            id:Math.random().toString(),
            completed:false

        }
       
        onGetDataHandler(newData)

    
}
    const ErrorHandler = () => {
        dispachTodo({type:"Modal-OK"})
		
	}

   

    return(
        <>
            {todostate.isValid && <ErrorModal title={todostate.title} onConfirm={ErrorHandler}/>}
            <div>
             <form onSubmit={sumbitHanler}>
               <div className='todo'>
            <input 
            type="text" 
            name="text" 
            id="text"
            onChange={TodoHanler} 
            placeholder="Add taskhere..."/>
            
            <button className='add-btn' type="sumbit">Add</button><br/>
            </div>
        </form>
        </div>
        </>
        
       
     
    )
}
export default Todo