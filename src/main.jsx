import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // 確保路徑是對的
import "./styles/global.scss"; // 這是最重要的地基

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
