import ReactDOM from "react-dom/client";

import App from "./App.jsx"; // jsx makes the components
import "./index.css";

const entryPoint = document.getElementById("root"); 
ReactDOM.createRoot(entryPoint).render(<App />); // build app and put all of that code into the main

// components need to have a capital letter (App) to prevent mixups with HTML syntax
// Other rule: return renderable (jsx) content