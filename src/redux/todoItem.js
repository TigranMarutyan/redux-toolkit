import { createSlice } from "@reduxjs/toolkit";
import { idGenerator } from "../App";
const initialState = {
  items: [],
  style: "",
};

export const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    changeColor(state, action) {
      state.style = action.payload;
    },
    addTodo(state, action) {
      state.items.push({
        title: action.payload,
        id: idGenerator(),
        isCompleted: false,
      });
    },
    deleteTodo(state, action) {
      state.items.splice(
        state.items.findIndex((i) => i.id === action.payload),
        1
      );
    },
    toggleTodo(state, action) {
      const index = state.items.findIndex((i) => i.id === action.payload);
      const item = state.items.find((i) => i.id === action.payload);
      state.items.splice(index, 1, {
        ...item,
        isCompleted: !item.isCompleted,
      });
    },
  },
});
