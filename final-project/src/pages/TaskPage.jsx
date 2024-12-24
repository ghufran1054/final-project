import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TasksContext } from "../contexts/TaskContext";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const navigate = useNavigate();
  const { tasks, fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    const token = localStorage.getItem("final-token");
    console.log(token);
    if (!token) {
      navigate("/login");
    }

    if (tasks.length === 0) {
      fetchTasks();
    }
  }, []);


  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="flex justify-center text-3xl font-bold mb-4 pt-10">
          Tasks
        </h1>
        <button onClick={() => navigate("/create")} className="bg-green-500 display inline text-white px-4 py-2 rounded">Create</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10">
          {tasks &&
            tasks.map((task) => <TaskCard key={task._id} Task={task} />)}
        </div>
      </div>
    </>
  );
};

export default TaskPage;
