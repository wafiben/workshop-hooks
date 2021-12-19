import SingleTask from "./SingleTask";
const ListOFTasks = ({ tasks,deleteTask }) => {
  return (
    <div>
      {tasks.map((elt) => (
        <SingleTask deleteTask={deleteTask}  task={elt} />
      ))}
    </div>
  );
};
export default ListOFTasks;
