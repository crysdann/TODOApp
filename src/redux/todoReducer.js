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

// Thunks
export const addTaskThunk = (taskText) => (dispatch, getState) => {
  dispatch(addTask(taskText));
};

export const deleteTaskThunk = (taskId) => (dispatch, getState) => {
  dispatch(deleteTask(taskId));
};

export const toggleCompleteThunk = (taskId) => (dispatch, getState) => {
  dispatch(toggleComplete(taskId));
};

export default taskSlice.reducer;
