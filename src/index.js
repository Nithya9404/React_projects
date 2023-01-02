import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Child from "./child";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
