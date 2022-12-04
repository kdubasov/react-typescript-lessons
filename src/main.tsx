import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </BrowserRouter>
)
