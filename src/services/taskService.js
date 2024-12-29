const API_URL = "https://apitask-ixqf.onrender.com/task";
export const fetchTasks = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener las tareas");
    }
    return response.json(); // Devuelve las tareas en el formato proporcionado
  };
  
  export const createTask = async (task) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Error al crear la tarea");
    }
    return response.json();
  };
  
  export const updateTask = async (id, updatedTask) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la tarea");
    }
    return response.json();
  };
  
  export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la tarea");
    }
  };