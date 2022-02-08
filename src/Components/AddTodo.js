import React from "react";
import'./AddTodo.css'


const AddTodo =({data,setData})=>{
    const delateHandler = (event) =>{
        setData(data.filter((el) =>el.id !==event.target.id))
    }
    const checkHandler = (event) =>{
        setData(data.map(el=>{
            if(el.id === event.target.id){
                el.completed = !el.completed
            }
            return el;
        }))
    }
    return(
        <div className="todo">
            <ul>
            {data.map((el)=>{
                return(
                    <li key={el.id} className={el.completed? "crossText" : "listitem"} >
                        {el.value}
                        {el.data}
                        
                            <input className='completed' type="checkbox" id={el.id} onChange={checkHandler} checked={el.completed}></input>
                            <button className='delete'><i id={el.id} onClick={delateHandler}>Delete</i></button>
                        
                    </li>
                )
            })}
        </ul>
        </div>
        
    )
}
export default AddTodo