// import {  applyMiddleware, compose } from "redux";
// // middlewares
// import { thunk } from "redux-thunk";
// // Import custom components
// import reducers from "../redux/index";
// import { createStoreHook } from "react-redux";

// const store = createStoreHook(
//   reducers,
//   compose(
//     applyMiddleware(thunk),

//     //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
//     window.devToolsExtension
//       ? window.devToolsExtension()
//       : function (f) {
//           return f;
//         }
//   )
// );

// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;