import TodoSlice from "../features/TodoSlice";
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    todoList: TodoSlice
  },

});
export default store;
