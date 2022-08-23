import { useState } from "react";

const useTodo = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);

  return {
    tasks,
    addTask: (values) => {
      const newTask = {
        id: Date.now(),
        body: values.body,
        isDone: false,
      };
      setTasks([...tasks, newTask])
    },
    setDoneTask: (id) => {
      setTasks(
        tasks.map((task) =>
        task.id === id ? {...task, isDone: !task.isDone} : task)
      )
    },
    deleteTask : (id) => {
      setTasks(tasks.filter((task)=>task.id!==id))
    }
  };
};

export default useTodo;