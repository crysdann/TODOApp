import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add Task
    addTask: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    // Delete task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // Completed tasks
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions;

export default taskSlice.reducer;
