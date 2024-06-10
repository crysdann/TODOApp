import React from "react";
import ToDoContainer from "./components/ToDoContainer";
import { Provider } from "react-redux";
import store from "./redux/todoStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToDoContainer />
      </Provider>
    </>
  );
}

export default App;
