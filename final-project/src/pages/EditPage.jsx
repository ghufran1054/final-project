import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../contexts/TaskContext";
const EditPage = () => {


    const {fetchTasks, tasks} = useContext(TasksContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        dueDate: "",
      });



    const handleUpdate = (e) => {
        e.preventDefault();



        fetch(`http://localhost:3000/tasks/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${localStorage.getItem("final-token")}`,
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            fetchTasks();
            navigate("/");
        })
        .catch((error) => {
            console.error("Error creating task:", error);
        });



    }

    useEffect (() => {
        const task = tasks.find((task) => task._id === id);
        console.log(id);
        console.log(tasks);
        setFormData(
            {
                name: task.name,
                description: task.description,
                dueDate: task.dueDate
            }
        );

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
              value={formData.name}
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
              value={formData.description}
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
              value={formData.dueDate ? new Date(formData.dueDate).toISOString().slice(0, 10) : ''}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}

            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleUpdate}
          >
            Edit
          </button>
        </form>
      </div>
    </>
  );
};


export default EditPage;