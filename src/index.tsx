import React from "react";
import { createRoot } from "react-dom/client";
import { DragAndDropZones } from "./lite/views/Collection/DragAndDrop/DragAndDropZones";

const container = document.getElementById("root");

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <DragAndDropZones />
  </React.StrictMode>
);
