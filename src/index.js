import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/components/globals.css";

import "./index.css";
//
import "./styles/components/output.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App className="relative min-h-screenlg:grid lg:grid-cols-app" />);
