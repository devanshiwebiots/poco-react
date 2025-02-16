// /* eslint-disable import/no-anonymous-default-export */
// import {
//   GET_EMAILS,
//   GET_ALL_EMAILS,
//   GET_EMAIL_TYPES,
//   UPDATE_EMAIL_TYPES,
// } from "../actionType";

// import { data } from "../../data/email/email";

// const initial_state = {
//   allEmails: data,
//   singleData: [],
//   types: [],
//   loading: false,
// };

// export default (state = initial_state, action) => {
//   switch (action.type) {
//     case GET_EMAILS:
//       return { ...state };

//     case GET_ALL_EMAILS:
//       return { ...state, allEmails: data };

//     case GET_EMAIL_TYPES:
//       const getTypes = action.payload;
//       return { ...state, loading: true, types: getTypes };

//     case UPDATE_EMAIL_TYPES:
//       const singleEmail = state.allEmails.reduce((cartAcc, item) => {
//         if (item.id === action.payload.id) {
//           action.payload.favourite = !action.payload.favourite;
//           cartAcc.push({ ...item, favourite: action.payload.favourite });
//         } else {
//           cartAcc.push(item);
//         }
//         return cartAcc;
//       }, []);
//       return {
//         ...state,
//         loading: true,
//         singleData: singleEmail,
//         allEmails: singleEmail,
//       };

//     default:
//       return { ...state };
//   }
// };
import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/email/email";

const initialState = {
  allEmails: data,
  singleData: [],
  types: [],
  loading: false,
};

const groupBy = (array, f) => {
  return array.reduce((groups, item) => {
    const group = f(item)[0];
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {});
};

const emailSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    GET_EMAILS: (state) => state,
    GET_ALL_EMAILS: (state) => {
      state.allEmails = data;
    },
    GET_EMAIL_TYPES: (state, action) => {
      state.loading = true;
      state.types = action.payload;
    },
  },
});

export const { GET_EMAILS, GET_ALL_EMAILS, GET_EMAIL_TYPES } = emailSlice.actions;
export default emailSlice.reducer;
