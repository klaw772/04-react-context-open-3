import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from "./App";
import { CountProvider } from './CountProvider';

const root = createRoot(document.getElementById("root"));

root.render(<CountProvider><App /></CountProvider>);
