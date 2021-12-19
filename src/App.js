import './App.css';
import { useState ,useEffect } from 'react';
import Home from './Home';

function App() {
const [count,setCount]=useState(0);
const [show,setShow]=useState(false)

const handleIncrement=()=>{
  setCount(count+1)
}
const handleDecrement=()=>{
  if(count>0){
    setCount(count-1)
  }
}
const handleShow=()=>{
  if(show===false){
    setShow(true)
  }
  else{
    setShow(false)
  }
}
useEffect(()=>{
console.log('mounting')
},[count])

  return (
    <div className="App">
    <button onClick={handleIncrement}>Increment</button>
    {count}
    <button onClick={handleDecrement} >Decrement</button>
    <div>
      <button onClick={handleShow}>Show</button>
      {show ? <Home/>:null}
      
    </div>
    </div>
  );
}

export default App;
