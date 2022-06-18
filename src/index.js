import React, { createContext } from 'react';
import colors from "./data/color-data";
import { render } from "react-dom";
import './index.css';
import App from './App';
import ColorProvider from "./components/ColorProvider.js";
export const ColorContext = createContext();
render(
    <ColorProvider>
        <App />
    </ColorProvider>,
    document.getElementById("root")
);