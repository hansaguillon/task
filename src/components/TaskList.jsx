import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import TaskModal from "./TaskModal"; // Importar el nuevo componente
import { message } from "antd";

const TaskList = () => {
  const { tasks, setTasks, deleteTask, updateTask } = useTasks();
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);

  // Calcular tareas incompletas
  const incompleteTasksCount = tasks.filter((task) => !task.completed).length;

  // Eliminar una tarea
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      message.success("¡Tarea eliminada exitosamente!");
      setTasks((prev) => prev.filter((task) => task._id !== id));

    } catch (error) {
      console.error("Error al eliminar la tarea:", error.message);
      message.error("No se pudo eliminar la tarea. Por favor, inténtalo de nuevo.");
    }
  };

  // Cambiar estado de tarea completada
  const toggleComplete = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    try {
      await updateTask(task._id, updatedTask);
      setTasks((prev) =>
        prev.map((t) => (t._id === task._id ? updatedTask : t))
      );
      if (updatedTask.completed) {
        message.success("¡Tarea Completada!");
      } else {
        message.info("¡Tarea Cancelada!");
      }
    } catch (error) {
      console.error("Error al actualizar la tarea:", error.message);
      message.error("No se pudo completar la tarea. Por favor, inténtalo de nuevo.");
    }
  };

  // Filtrar tareas
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed === true;
    }
    if (filter === "pending") {
      return task.completed === false;
    }
    return true;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Tareas incompletas ({incompleteTasksCount})
      </h1>

      {/* Botones de filtro */}
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          onClick={() => setFilter("completed")}
        >
          Completadas
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => setFilter("pending")}
        >
          Pendientes
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">
          No hay tareas disponibles para este filtro. ¡Agrega una nueva!
        </p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task._id}
            className={`relative bg-white shadow rounded p-4 mb-4 flex justify-between items-center border-l-4 ${
              task.completed ? "border-green-500" : "border-orange-500"
            }`}
          >
            <div>
              <h3
                className="text-lg font-bold cursor-pointer"
                onClick={() => setSelectedTask(task)}
              >
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">{task.description}</p>
              <p className="text-sm text-gray-400">
                {new Date(task.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Botón para cambiar estado de completado */}
              <button
                className={`text-xl ${
                  task.completed ? "text-green-500" : "text-gray-400"
                }`}
                onClick={() => toggleComplete(task)}
              >
                <FaCheckCircle />
              </button>
              {/* Botón de eliminar */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(task._id)}
              >
                <FaTrashAlt className="text-2xl" />
              </button>
            </div>
          </div>
        ))
      )}

      {/* Modal para editar tarea */}
      <TaskModal
        task={selectedTask}
        onClose={() => setSelectedTask(null)}
        onSave={async () => {
          if (selectedTask) {
            try {
              await updateTask(selectedTask._id, selectedTask); // Llama a la función del contexto
              setSelectedTask(null);
              message.success("¡Tarea actualizada exitosamente!");
            } catch (error) {
              message.error("No se pudo actualizar la tarea. Por favor, inténtalo de nuevo.");
              console.error("Error al guardar los cambios:", error.message);
            }
          }
        }}
        onChange={setSelectedTask}
      />
    </div>
  );
};

export default TaskList;
