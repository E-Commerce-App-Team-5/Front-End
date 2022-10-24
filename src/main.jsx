import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./routes/Routes";

// import App from "./components/EditModal";
import App from "./pages/Profiles";
// import App from "./pages/Cart";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./utils/redux/store/store";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
