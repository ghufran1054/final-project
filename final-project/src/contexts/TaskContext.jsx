import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("final-token")}`,
        },
      });
      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        fetchTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
