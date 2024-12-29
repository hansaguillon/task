const TaskModal = ({ task, onClose, onSave, onChange }) => {
  if (!task) return null; // No mostrar el modal si no hay tarea seleccionada

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Editar Tarea</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          value={task.title}
          onChange={(e) => onChange({ ...task, title: e.target.value })}
          placeholder="Título"
        />
        <textarea
          className="border p-2 w-full mb-4 h-32 resize-none" // Ajusta la altura y desactiva el redimensionado
          value={task.description}
          onChange={(e) => onChange({ ...task, description: e.target.value })}
          placeholder="Descripción"
          rows="6" // Incrementa el número de filas
        />

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
