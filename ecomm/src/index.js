import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Button } from "./button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>
);
