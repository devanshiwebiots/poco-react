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
