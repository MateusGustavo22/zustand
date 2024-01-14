import { Trash2 } from "lucide-react";
import { useTaskStore } from "../store/TaskStore";

interface TaskProps {
  id: number;
  task: string;
}

export function Task({ task, id }: TaskProps) {
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="px-6 py-4 bg-zinc-800 justify-between flex gap-6 rounded-md">
      <span className="text-white">{task}</span>
      <div className="flex gap-4 items-center justify-center">
        <input type="checkbox" className="w-5 h-5 cursor-pointer" />
        <button onClick={() => removeTask(id)}>
          <Trash2 color="rgb(124, 58, 237)" />
        </button>
      </div>
    </div>
  );
}
