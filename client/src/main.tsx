import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/fonts"; // Import fonts directly

createRoot(document.getElementById("root")!).render(<App />);
