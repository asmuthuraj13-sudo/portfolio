import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import "./Styles/variables.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const cursorDot = document.createElement("div");
cursorDot.className = "cursor-dot";
document.body.appendChild(cursorDot);

const cursorRing = document.createElement("div");
cursorRing.className = "cursor-ring";
document.body.appendChild(cursorRing);

window.addEventListener("mousemove", (e) => {
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  cursorRing.style.left = `${e.clientX}px`;
  cursorRing.style.top = `${e.clientY}px`;
});

const interactiveElements = document.querySelectorAll("a, button, .project-card, .certificate-card, .skill-card");
interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
  element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);