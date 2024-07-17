import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { AutheContextProvider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AutheContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AutheContextProvider>
  </React.StrictMode>
);
