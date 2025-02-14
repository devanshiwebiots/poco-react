// import React from "react";
// import "./index.scss";
// import * as serviceWorker from "./serviceWorker";
// import store from "./store/index";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import MainRoutes from "./routes";
// import { createRoot } from "react-dom/client";
// import { unstable_batchedUpdates } from "react-dom";
// unstable_batchedUpdates(() => {
//   console.error = () => {};
// });

// class ErrorBoundary extends React.Component {
//   componentDidCatch(error) {
//     if (error.message.includes("ToastContainer")) {
//       return;
//     }
//   }

//   render() {
//     return this.props.children;
//   }
// }

// const Root = () => {
//   return (
//     <div className='App'>
//       <Provider store={store}>
//         <BrowserRouter>
//           <MainRoutes />
//         </BrowserRouter>
//       </Provider>
//     </div>
//   );
// };

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <ErrorBoundary>
//     <Root />
//   </ErrorBoundary>
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

// Suppress specific console errors
console.error = (...args) => {
  if (!args[0]?.includes("ToastContainer")) {
    console.warn(...args);
  }
};

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    if (error.message.includes("ToastContainer")) {
      return { hasError: true };
    }
    return null;
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Root />
  </ErrorBoundary>
);

// Register or unregister service worker based on requirements
serviceWorker.unregister();
