import { createContext, useContext, useState, useEffect } from "react";
import { message } from "antd";
// Crear el contexto
const TaskContext = createContext();

// Hook personalizado para usar el contexto
export const useTasks = () => useContext(TaskContext);

// Proveedor del contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para cargar tareas desde el backend
  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://apitask-ixqf.onrender.com/task");
      if (!response.ok) throw new Error("Error al cargar las tareas");
      const data = await response.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar las tareas al montar el componente
  useEffect(() => {
    fetchTasks();
  }, []);

  // Función para agregar una nueva tarea
  const addTask = async (task) => {
    try {
      const response = await fetch("https://apitask-ixqf.onrender.com/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error("Error al agregar la tarea");
      const newTask = await response.json();
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para eliminar una tarea
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`https://apitask-ixqf.onrender.com/task/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar la tarea");
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para actualizar una tarea
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`https://apitask-ixqf.onrender.com/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) throw new Error("Error al actualizar la tarea");
      const updated = await response.json();
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? updated : task))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks, // Ahora se exporta setTasks
        loading,
        error,
        fetchTasks,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
