import "./App.css";
import { useState, useEffect } from "react";
import Task from "./Components/Task";
import ListOFTasks from "./Components/ListOFtasks";

function App() {
  const [student, setStudent] = useState({ firstName: " ", lastName: " " });
  const arryOftasks = [
    { id: 0, descreption: "go to the docter", done: false },
    { id: 1, descreption: "meeting my mom", done: false },
  ];
  const [tasks, setTasks] = useState(arryOftasks);
  const AddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((elt) => elt.id != id));
  };
  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(student);
    setStudent({ firstName: " ", lastName: " " })
  };
  return (
    <div className="App">
      <h1>TO DO APP</h1>
      {tasks.length > 0 ? (
        <ListOFTasks deleteTask={deleteTask} tasks={tasks} />
      ) : (
        "there is no tasks to show"
      )}
      <Task AddTask={AddTask} />
      <div>
        <form onSubmit={onSubmit}>
          <input
            id="firstName"
            value={student.firstName}
            onChange={handleChange}
          />
          <input
            id="lastName"
            value={student.lastName}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
