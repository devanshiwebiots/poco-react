import { createSlice } from "@reduxjs/toolkit";
import todoData from "../../data/todo/todos.json";

const initialState = {
  allTodoItems: [],
  todoItems: [],
  loading: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    GET_LIST: (state) => {
      state.loading = false;
      state.allTodoItems = todoData.data;
    },
    GET_LIST_SUCCESS: (state, action) => {
      state.loading = true;
      state.allTodoItems = action.payload.filter((item) => item.status !== "deleted");
      state.todoItems = action.payload;
    },
    ADD_NEW_ITEM: (state, action) => {
      state.allTodoItems.push({
        id: state.allTodoItems.length + 1,
        title: action.payload.task,
      });
      state.loading = true;
      state.todoItems = [...state.allTodoItems];
    },
    SELECTED_ITEM: (state, action) => {
      state.allTodoItems = state.allTodoItems.map((item) => (item.id === action.payload.itemId ? { ...item, status: action.payload.status } : item));
      state.todoItems = [...state.allTodoItems];
      state.loading = true;
    },
    MARK_ALL_ITEMS: (state, action) => {
      state.allTodoItems = state.allTodoItems.map((item) => ({
        ...item,
        status: action.payload === false ? "completed" : "pending",
      }));
      state.todoItems = [...state.allTodoItems];
      state.loading = true;
    },
    REMOVE_ITEM: (state, action) => {
      state.allTodoItems = state.allTodoItems.map((item) => (item.id === action.payload ? { ...item, isStatus: "deleted" } : item));
      state.todoItems = [...state.allTodoItems];
      state.loading = true;
    },
  },
});

export const { GET_LIST, GET_LIST_SUCCESS, ADD_NEW_ITEM, SELECTED_ITEM, MARK_ALL_ITEMS, REMOVE_ITEM } = todoSlice.actions;
export default todoSlice.reducer;