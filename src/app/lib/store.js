import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "lib/features/counter/counterSlice";
import todosSlice from "lib/features/todos/todosSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
  todos: todosSlice,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default makeStore;
