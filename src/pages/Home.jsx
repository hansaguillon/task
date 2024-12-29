import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">Lista de Tareas</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;