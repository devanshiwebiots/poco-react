// /* eslint-disable import/no-anonymous-default-export */
// import {
//   GET_LIST,
//   GET_LIST_SUCCESS,
//   ADD_NEW_ITEM,
//   REMOVE_ITEM,
//   MARK_ALL_ITEMS,
//   SELECTED_ITEM,
// } from "../actionType";
// import todoData from "../../data/todo/todos.json";

// const INIT_STATE = {
//   allTodoItems: [],
//   todoItems: [],
//   loading: false,
// };
// export default (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case GET_LIST:
//       const allTodoItems = todoData.data;
//       return { ...state, loading: false, allTodoItems: allTodoItems };

//     case GET_LIST_SUCCESS:
//       const liveItems = action.payload.filter(
//         (item) => item.status !== "deleted"
//       );
//       return {
//         ...state,
//         loading: true,
//         allTodoItems: liveItems,
//         todoItems: action.payload,
//       };

//     case ADD_NEW_ITEM:
//       state.allTodoItems.push({
//         id: state.allTodoItems.length + 1,
//         title: action.payload.task,
//       });
//       return {
//         ...state,
//         loading: true,
//         todoItems: state.allTodoItems,
//         allTodoItems: state.allTodoItems,
//       };

//     case SELECTED_ITEM:
//       const updatedStatus = state.allTodoItems.reduce((cartAcc, item) => {
//         if (item.id === action.payload.itemId) {
//           cartAcc.push({ ...item, status: action.payload.status });
//         } else {
//           cartAcc.push(item);
//         }
//         return cartAcc;
//       }, []);
//       return {
//         ...state,
//         loading: true,
//         todoItems: updatedStatus,
//         allTodoItems: updatedStatus,
//       };

//     case MARK_ALL_ITEMS:
//       const updateStatus = state.allTodoItems.reduce((cartAcc, item) => {
//         if (action.payload === false) {
//           cartAcc.push({ ...item, status: "completed" });
//         } else {
//           cartAcc.push({ ...item, status: "pending" });
//         }
//         return cartAcc;
//       }, []);
//       return {
//         ...state,
//         loading: true,
//         todoItems: updateStatus,
//         allTodoItems: updateStatus,
//       };

//     case REMOVE_ITEM:
//       const updatedItems = state.allTodoItems.reduce((cartAcc, item) => {
//         if (item.id === action.payload) {
//           cartAcc.push({ ...item, isStatus: "deleted" });
//         } else {
//           cartAcc.push(item);
//         }
//         return cartAcc;
//       }, []);
//       return {
//         ...state,
//         loading: true,
//         allTodoItems: updatedItems,
//         todoItems: updatedItems,
//       };

//     default:
//       return { ...state };
//   }
// };
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