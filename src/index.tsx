import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConverterBoxProvider } from "./context/ConverterBoxContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ConverterBoxProvider>
    <App />
  </ConverterBoxProvider>
  // </React.StrictMode>
);
