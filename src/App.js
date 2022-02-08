import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';

function App() {
  const localData = JSON.parse(localStorage.getItem('todos'))
  const [data,setData] = useState(localData ? localData : [])
  // const[data,setData] = useState([])
  const newDataHandler = (newData)=>{
    setData([...data,newData])
  }
  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(data))
  },[data])
  
  return (
    <div className="App">
        <div className='title'>Todo List</div>
        <Todo onGetDataHandler={newDataHandler}/>
        <AddTodo data={data} setData={setData}/>
      
    </div>
  );
}

export default App;
