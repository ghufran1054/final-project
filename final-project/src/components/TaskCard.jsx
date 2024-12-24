import { TasksContext } from "../contexts/TaskContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const TaskCard = ({ Task }) => {
  const { fetchTasks } = useContext(TasksContext);
  const Navigate = useNavigate();
  const handleDelete = () => {
    fetch(`http://localhost:3000/tasks/delete/${Task._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("final-token")}`,
      },
    })
      .then(() => {
        fetchTasks();
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });

    fetchTasks();
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <h2 className="text-lg font-semibold">{Task.name}</h2>
      <p className="text-gray-600">{Task.description}</p>
      <p className="text-gray-600">
        <span className="text-black font-bold">Due Date: </span>
        {new Date(Task.dueDate).toLocaleDateString()}
      </p>
      <div className="flex space-x-5">
        <button
          className="flex-1 bg-red-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleDelete}
        >
          delete
        </button>
        <button
          className="flex-1 bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => {
            Navigate(`/edit/${Task._id}`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
