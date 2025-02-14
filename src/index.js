import React from "react";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
import { createRoot } from "react-dom/client";
import { unstable_batchedUpdates } from "react-dom";
unstable_batchedUpdates(() => {
  console.error = () => {};
});

class ErrorBoundary extends React.Component {
  componentDidCatch(error) {
    if (error.message.includes("ToastContainer")) {
      return;
    }
  }

  render() {
    return this.props.children;
  }
}

const Root = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Root />
  </ErrorBoundary>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
