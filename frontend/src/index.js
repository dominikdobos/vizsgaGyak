import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApiProvider } from "./contexts/ApiContext";
import { AdminProvider } from "./contexts/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </ApiProvider>
  </React.StrictMode>
);
