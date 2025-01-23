import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

interface PollConfig {
  pollId: string;
  question: string;
  options: Array<{
    id: string;
    text: string;
  }>;
}

declare global {
  interface Window {
    renderPollWidgetInline: (containerId: string, config: PollConfig) => void;
    renderPollWidgetFloatingButton: (config: PollConfig) => void;
  }
}

window.renderPollWidgetInline = (containerId: string, config: PollConfig) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  createRoot(container).render(
    <StrictMode>
      <App {...config} />
    </StrictMode>
  );
};

// window.renderPollWidgetFloatingButton = (config: PollConfig) => {
//   const container = document.createElement("div");
//   container.setAttribute("id", "floating-button");
//   document.body.appendChild(container);

//   container.setAttribute(
//     "style",
//     "position: fixed; bottom: 1rem; right: 1rem; border-radius: 50%; height: 90px; width: 90px"
//   );

//   createRoot(container).render(
//     <StrictMode>
//       <App {...config} />
//     </StrictMode>
//   );
// };
