// /* eslint-disable import/no-anonymous-default-export */
// import {
//   ADD_COSTOMIZER,
//   ADD_LAYOUT,
//   ADD_COLOR,
//   ADD_MIXlAYOUT,
//   ADD_SIDEBAR_TYPES,
//   ROUTER_ANIMATION,
// } from "../actionType";
// import ConfigDB from "../../data/customizer/config";

// const initial_state = {
//   customizer: ConfigDB.data,
//   configData: {},
//   layout: "ltr",
//   settings: "",
//   sidebar_types: {},
//   color: {},
//   mix_layout: "",
//   animation: "",
// };

// export default (state = initial_state, action) => {
//   switch (action.type) {
//     case ADD_COSTOMIZER:
//       return { ...state, loading: false, customizer: ConfigDB.data };

//     case ADD_LAYOUT:
//       state.customizer.settings.layout_type = action.payload;
//       const layoutUpdate = state.customizer.settings.layout_type;
//       return { ...state, loading: true, layout: layoutUpdate };

//     case ADD_SIDEBAR_TYPES:
//       state.customizer.settings.sidebar = action.payload;
//       const sidebarTypeUpdate = state.customizer.settings.sidebar;

//       return { ...state, loading: true, sidebar_types: sidebarTypeUpdate };

//     case ADD_COLOR:
//       const colors = action.payload;
//       state.customizer.color.primary_color = colors.primary_color;
//       state.customizer.color.secondary_color = colors.secondary_color;
//       state.customizer.color.color = colors.color;
//       state.customizer.color.layout_version = colors.layout_version;

//       return { ...state, color: colors, loading: true };

//     case ADD_MIXlAYOUT:
//       const mix_layout = action.payload;
//       state.customizer.color.mix_layout = mix_layout;

//       return { ...state, mix_layout: mix_layout, loading: true };

//     case ROUTER_ANIMATION:
//       const anim = action.payload;
//       state.customizer.router_animation = anim;
//       return { ...state, animation: anim, loading: true };

//     default:
//       return { ...state };
//   }
// };
import { createSlice } from "@reduxjs/toolkit";
import ConfigDB from "../../data/customizer/config";

const initialState = {
  customizer: ConfigDB.data,
  configData: {},
  layout: "ltr",
  settings: "",
  sidebar_types: {},
  color: {},
  mix_layout: "",
  animation: "",
};

const customizerSlice = createSlice({
  name: "customizer",
  initialState,
  reducers: {
    ADD_COSTOMIZER: (state) => {
      state.customizer = ConfigDB.data;
    },
    ADD_LAYOUT: (state, action) => {
      state.customizer.settings.layout_type = action.payload;
      state.layout = action.payload;
    },
    ADD_SIDEBAR_TYPES: (state, action) => {
      state.customizer.settings.sidebar = action.payload;
      state.sidebar_types = action.payload;
    },
    ADD_COLOR: (state, action) => {
      const { primary_color, secondary_color, color, layout_version } = action.payload;
      state.customizer.color.primary_color = primary_color;
      state.customizer.color.secondary_color = secondary_color;
      state.customizer.color.color = color;
      state.customizer.color.layout_version = layout_version;
      state.color = action.payload;
    },
    ADD_MIXlAYOUT: (state, action) => {
      state.customizer.color.mix_layout = action.payload;
      state.mix_layout = action.payload;
    },
    ROUTER_ANIMATION: (state, action) => {
      state.customizer.router_animation = action.payload;
      state.animation = action.payload;
    },
  },
});

export const { ADD_COSTOMIZER, ADD_LAYOUT, ADD_SIDEBAR_TYPES, ADD_COLOR, ADD_MIXlAYOUT, ROUTER_ANIMATION } = customizerSlice.actions;

export default customizerSlice.reducer;
