import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { createTask } from "../services/taskService";
import { message } from "antd";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { setTasks } = useTasks(); // Accede a setTasks desde el contexto

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title.trim()) {
      alert("El título es obligatorio.");
      return;
    }
  
    setLoading(true);
    try {
      // Crear el objeto de la tarea sin la propiedad de descripción si está vacía
      const taskData = {
        title: title.trim(),
        completed: false,
      };
  
      // Solo añadir la descripción si no está vacía
      if (description.trim()) {
        taskData.description = description.trim();
      }
  
      // Llamada para crear la tarea
      const newTask = await createTask(taskData);
      
      // Actualizar el estado con la nueva tarea
      setTasks((prev) => [...prev, newTask]); 
      setTitle("");
      setDescription(""); 
      message.success("¡Tarea creada exitosamente!");
    } catch (error) {
      console.error("Error al crear la tarea:", error.message);
      message.error("No se pudo crear la tarea. Por favor, inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Agregar Nueva Tarea</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        className="border p-2 w-full mb-4 rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        className="border p-2 w-full mb-4 rounded"
        rows="3"
      />
      <button
        type="submit"
        className={`px-4 py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-500"
        }`}
        disabled={loading}
      >
        {loading ? "Agregando..." : "Agregar"}
      </button>
    </form>
  );
};

export default TaskForm;
