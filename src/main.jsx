import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入Bootstrap 樣式 by 納森
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 引入Bootstrap JS  by 納森
import App from "./App"; // 確保路徑是對的
import "./styles/global.scss"; // 這是最重要的地基

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
