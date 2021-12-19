const SingleTask = ({task,deleteTask}) => {
  const handleClick=()=>{
    deleteTask(task.id)
    alert('task is succesfully deleted')

  }
  return (<div>
      <h1>{task.descreption}</h1>
      <button onClick={handleClick}>delete</button>
  </div>);
};
export default SingleTask;
