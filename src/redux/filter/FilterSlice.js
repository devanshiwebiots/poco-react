import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: ["Diesel", "Hudson", "Lee"],
  value: { min: 100, max: 950 },
  sortBy: "",
  searchBy: "",
  color: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    FILTER_BRAND: (state, action) => {
      state.brand = action.payload;
    },
    FILTER_COLOR: (state, action) => {
      state.color = action.payload;
    },
    FILTER_PRICE: (state, action) => {
      state.value = { min: action.payload.min, max: action.payload.max };
    },
    SORT_BY: (state, action) => {
      state.sortBy = action.payload;
    },
    SEARCH_BY: (state, action) => {
      state.searchBy = action.payload;
    },
  },
});

export const { FILTER_BRAND, FILTER_COLOR, FILTER_PRICE, SORT_BY, SEARCH_BY } = filtersSlice.actions;
export default filtersSlice.reducer;