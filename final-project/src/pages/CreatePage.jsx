import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TasksContext } from "../contexts/TaskContext";
const CreatePage = () => {


    const {fetchTasks} = useContext(TasksContext);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        dueDate: "",
      });

      const navigate = useNavigate();


    const handleCreation = (e) => {
        e.preventDefault();


        const token = localStorage.getItem("final-token");


        console.log(formData);
        fetch(`http://localhost:3000/tasks/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
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
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold mb-4 pt-10">
        Create a Task
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