// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//redux
import store from "./app/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  //</React.StrictMode>
);
