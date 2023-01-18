import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StyledEngineProvider} from "@mui/material";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StyledEngineProvider injectFirst>
       <App/>
</StyledEngineProvider>
)
