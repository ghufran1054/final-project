import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../contexts/TaskContext";
const CreatePage = () => {


    const {fetchTasks, tasks} = useContext(TasksContext);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        dueDate: "",
      });

      const navigate = useNavigate();


    const handleUpdate = (e) => {
        e.preventDefault();


    }

    useEffect (() => {
        // Gets the task id from the url and then sets the task by iterating the tasks array
        const {id} = useParams();
        const task = tasks.find((task) => task._id === id);

    }, []);
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-10">
        Edit this Task
      </h1>
      <div className="flex justify-center">
        <form className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>
            <input
              type="text"
              id="description"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}

            />
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-gray-600">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}

            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreation}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};


export default CreatePage;