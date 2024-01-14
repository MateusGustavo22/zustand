import { create } from "zustand";

type Task = {
  id: number;
  task: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: number) => void;
  fetchInitialTasks: () => void;
};

export const useTaskStore = create<TaskStore>((set) => {
  return {
    tasks: [],
    addTask: (item) => set((state) => ({ tasks: [...state.tasks, item] })),
    removeTask: (taskId: number) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
    fetchInitialTasks: () => {
      const initialTasks = [
        { id: 1, task: "Tarefa 1" },
        { id: 2, task: "Tarefa 2" },
        { id: 3, task: "Tarefa 3" },
      ];

      // Define o estado inicial com as tarefas obtidas
      set({ tasks: initialTasks });
    },
  };
});
