import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
