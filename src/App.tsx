import { useEffect, useState } from "react";
import { Task } from "./components/Task";
import { useTaskStore } from "./store/TaskStore";

export function App() {
  const [inputText, setInputText] = useState("");

  const [tasks, addTask, fetchInitialTasks] = useTaskStore((state) => [
    state.tasks,
    state.addTask,
    state.fetchInitialTasks,
  ]);

  useEffect(() => {
    fetchInitialTasks();
  }, []);

  return (
    <div className="w-96 m-auto mt-12 gap-7 flex flex-col">
      <span className="text-white font-semibold text-3xl">
        Lista de tarefas
      </span>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-2 flex-col">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            placeholder="Nova tarefa"
            className="bg-zinc-800 w-full outline-none border-2 border-transparent focus:border-violet-800 text-white px-6 py-2 rounded-md"
          />
          <button
            onClick={() => addTask({ id: tasks.length + 1, task: inputText })}
            className="bg-violet-800 rounded-md py-2 hover:bg-violet-900 font-semibold text-white  w-full"
          >
            Criar tarefa
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <Task key={task.id} task={task.task} id={task.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
