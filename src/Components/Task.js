import { useState } from "react";
const Task=({AddTask})=>{
    const [task, setTask] = useState({id:Math.floor(Math.random()*10000)+1,  descreption: " ", done: false });
  const handleChange = (event) => {
    setTask({ id:Math.floor(Math.random()*10000)+1,...task, descreption: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    AddTask(task)
    setTask({descreption: '',done:false})
  };
    return( <div>
        <form onSubmit={onSubmit}>
          <input id="descreptionTask" onChange={handleChange} value={task.descreption} />
          <button type="submit">Submit</button>
        </form>
      </div>)
}
export default Task