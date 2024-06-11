import { addTask, deleteTask, toggleComplete } from "../redux/todoReducer";

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
